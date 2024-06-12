import { CanvasService } from '../canvas-service/canvas-service';
import { MimeViewerConfig } from '../mime-viewer-config';
import { ModeService } from '../mode-service/mode.service';
import { Direction } from '../models/direction';
import { Point } from '../models/point';
import { Rect } from '../models/rect';
import { ViewingDirection } from '../models/viewing-direction';
import { CalculateNextCanvasGroupFactory } from './calculate-next-canvas-group-factory';
import { CanvasGroup, ScrollDirection, ViewerMode } from '../models';
import { ZoomStrategy } from './zoom-strategy';

export interface GoToCanvasGroupStrategy {
  adjustPosition(): void;
  goToCanvasGroup(canvasGroup: CanvasGroup, panToCenter?: boolean): void;
  goToPreviousCanvasGroup(
    currentCanvasIndex: number,
    panToCenter?: boolean,
  ): void;
  goToNextCanvasGroup(currentCanvasIndex: number, panToCenter?: boolean): void;
  centerCurrentCanvas(): void;
  panToCenterVertically(immediately?: boolean): void;
  panToCenterHorizontally(immediately?: boolean): void;
}

export class DefaultGoToCanvasGroupStrategy implements GoToCanvasGroupStrategy {
  private _previousCanvasGroupIndex = 0;
  constructor(
    protected viewer: any,
    protected zoomStrategy: ZoomStrategy,
    protected canvasService: CanvasService,
    protected modeService: ModeService,
    protected config: MimeViewerConfig,
    protected viewingDirection: ViewingDirection,
  ) {}

  adjustPosition(): void {
    const rect = this.getRect(
      this.previousCanvasGroupIndex,
      this.canvasService.currentCanvasGroupIndex,
    );
    this.panTo(rect.x, rect.y, false);
  }

  goToCanvasGroup(canvasGroup: CanvasGroup): void {}

  goToPreviousCanvasGroup(currentCanvasIndex: number): void {}

  goToNextCanvasGroup(currentCanvasIndex: number): void {}

  centerCurrentCanvas(): void {
    const currentCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
    const currentCanvasGroupCenter = this.canvasService.getCanvasGroupRect(
      currentCanvasGroupIndex,
    );
    this.panToCenter(currentCanvasGroupCenter, false);
  }

  panToCenterVertically(immediately = false): void {
    const x = this.getViewportCenter().x;
    const y = 0;
    this.panTo(x, y, immediately);
  }

  panToCenterHorizontally(immediately = false): void {
    const x = 0;
    const y = this.getViewportCenter().y;
    this.panTo(x, y, immediately);
  }

  protected getPreviousCanvasGroupRect(nextCanvasGroupIndex: number): Rect {
    const canvasGroupIndexes =
      this.canvasService.getCanvasesPerCanvasGroup(nextCanvasGroupIndex);
    const previousCanvasIndex =
      canvasGroupIndexes[canvasGroupIndexes.length - 1];
    return this.canvasService.getCanvasRect(previousCanvasIndex);
  }

  protected updateCurrentCanvasGroupIndex(canvasGroupIndex: number) {
    this.canvasService.currentCanvasGroupIndex =
      this.canvasService.constrainToRange(canvasGroupIndex);
  }

  /**
    Should center the canvas in these cases:
    - If the viewer is in PAGE mode and is NOT fitted to width or height
    - If the viewer is ZOOMED in and zoom should NOT be preserved
   */
  protected shouldPanToCenter(): boolean {
    return (
      (!this.modeService.isPageZoomed() &&
        !this.canvasService.isFitToEnabled()) ||
      (this.modeService.isPageZoomed() &&
        !this.config.preserveZoomOnCanvasGroupChange)
    );
  }

  protected updateViewerMode(canvasGroup: CanvasGroup): void {
    this.modeService.setPageModeByZoomLevel(
      this.getZoomLevel(
        this.canvasService.getCanvasGroupRect(canvasGroup.canvasGroupIndex),
      ),
      this.zoomStrategy.getHomeZoomLevel(this.modeService.mode),
    );
  }

  protected panTo(x: number, y: number, immediately = false): void {
    this.viewer.viewport.panTo(
      {
        x: x,
        y: y,
      },
      immediately,
    );
  }

  protected getViewportCenter(): Point {
    return this.viewer.viewport.getCenter();
  }

  protected getViewportBounds(): Rect {
    return this.viewer.viewport.getBounds();
  }

  protected panToCenter(canvasGroupRect: Rect, immediately = false): void {
    this.panTo(canvasGroupRect.centerX, canvasGroupRect.centerY, immediately);
  }

  protected isNewCanvasGroup(previous: number, current: number): boolean {
    return previous !== current;
  }

  protected isNavigatingToPreviousCanvas(
    previous: number,
    current: number,
  ): boolean {
    return previous > current;
  }

  protected getX(
    previousCanvasGroupIndex: number,
    nextCanvasGroupIndex: number,
  ): number {
    return 0;
  }

  protected getY(
    previousCanvasGroupIndex: number,
    nextCanvasGroupIndex: number,
  ): number {
    return 0;
  }

  protected getRect(
    previousCanvasGroupIndex: number,
    nextCanvasGroupIndex: number,
  ): Rect {
    return new Rect({
      x: this.getX(previousCanvasGroupIndex, nextCanvasGroupIndex),
      y: this.getY(previousCanvasGroupIndex, nextCanvasGroupIndex),
    });
  }

  private getZoomLevel(canvasGroup: Rect): number {
    const viewportBounds: Rect = this.getViewportBounds();
    let zoomLevel = this.viewer.viewport.getZoom();
    if (this.canvasService.isFitToWidthEnabled()) {
      zoomLevel = this.zoomStrategy.getFitToWidthZoomLevel(
        viewportBounds.width,
        canvasGroup.width,
      );
    } else if (this.canvasService.isFitToHeightEnabled()) {
      zoomLevel = this.zoomStrategy.getFitToHeightZoomLevel(
        viewportBounds.height,
        canvasGroup.height,
      );
    }
    return zoomLevel;
  }

  protected getNewCanvasGroupIndex(
    currentCanvasIndex: number,
    direction: Direction,
    scrollDirection: ScrollDirection,
  ): number {
    return CalculateNextCanvasGroupFactory.create(
      ViewerMode.NAVIGATOR,
    ).calculateNextCanvasGroup({
      direction,
      currentCanvasGroupIndex: this.canvasService.findClosestCanvasGroupIndex(
        this.getViewportCenter(),
      ),
      currentCanvasGroupCenter: currentCanvasIndex,
      viewingDirection: this.viewingDirection,
      scrollDirection,
    });
  }

  set previousCanvasGroupIndex(previousCanvasGroupIndex: number) {
    this._previousCanvasGroupIndex = previousCanvasGroupIndex;
  }

  get previousCanvasGroupIndex(): number {
    return this._previousCanvasGroupIndex;
  }
}

export class HorizontalGoToCanvasGroupStrategy extends DefaultGoToCanvasGroupStrategy {
  override goToCanvasGroup(canvasGroup: CanvasGroup, panToCenter = false) {
    this.previousCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
    this.updateCurrentCanvasGroupIndex(canvasGroup.canvasGroupIndex);

    if (this.canvasService.isFitToEnabled()) {
      this.updateViewerMode(canvasGroup);
    }

    if (panToCenter || this.shouldPanToCenter()) {
      this.panToCenter(
        this.canvasService.getCanvasGroupRect(canvasGroup.canvasGroupIndex),
        canvasGroup.immediately,
      );
    } else {
      const rect = this.getRect(
        this.previousCanvasGroupIndex,
        canvasGroup.canvasGroupIndex,
      );
      this.panTo(rect.x, rect.y, canvasGroup.immediately);
    }
  }

  override goToPreviousCanvasGroup(
    currentCanvasIndex: number,
    panToCenter = false,
  ): void {
    if (this.canvasService.isPreviousCanvasGroupValid()) {
      this.goToCanvasGroup(
        {
          canvasGroupIndex: this.getNewCanvasGroupIndex(
            currentCanvasIndex,
            Direction.PREVIOUS,
            ScrollDirection.HORIZONTAL,
          ),
          immediately: false,
        },
        panToCenter,
      );
    }
  }

  override goToNextCanvasGroup(
    currentCanvasIndex: number,
    panToCenter = false,
  ): void {
    if (this.canvasService.isNextCanvasGroupValid()) {
      this.goToCanvasGroup(
        {
          canvasGroupIndex: this.getNewCanvasGroupIndex(
            currentCanvasIndex,
            Direction.NEXT,
            ScrollDirection.HORIZONTAL,
          ),
          immediately: false,
        },
        panToCenter,
      );
    }
  }

  override getY(
    previousCanvasGroupIndex: number,
    nextCanvasGroupIndex: number,
  ): number {
    const currentCanvasGroupRect =
      this.canvasService.getCurrentCanvasGroupRect();
    return this.config.startOnTopOnCanvasGroupChange &&
      this.isNewCanvasGroup(previousCanvasGroupIndex, nextCanvasGroupIndex)
      ? currentCanvasGroupRect.y +
          this.getViewportBounds().height / 2 -
          this.viewer.collectionTileMargin
      : this.getViewportCenter().y;
  }

  override getX(
    previousCanvasGroupIndex: number,
    nextCanvasGroupIndex: number,
  ): number {
    const currentCanvasGroupRect =
      this.canvasService.getCurrentCanvasGroupRect();
    if (
      this.isNavigatingToPreviousCanvas(
        previousCanvasGroupIndex,
        nextCanvasGroupIndex,
      )
    ) {
      return this.viewingDirection === ViewingDirection.LTR
        ? this.rightX(currentCanvasGroupRect)
        : this.leftX(currentCanvasGroupRect);
    } else {
      return this.viewingDirection === ViewingDirection.LTR
        ? this.leftX(currentCanvasGroupRect)
        : this.rightX(currentCanvasGroupRect);
    }
  }

  private leftX(canvas: Rect): number {
    const x = canvas.x + this.getViewportBounds().width / 2;
    return this.isCanvasWiderThanViewport(canvas) ? x : canvas.centerX;
  }

  private rightX(canvas: Rect): number {
    const x = canvas.x + canvas.width - this.getViewportBounds().width / 2;
    return this.isCanvasWiderThanViewport(canvas) ? x : canvas.centerX;
  }

  private isCanvasWiderThanViewport(canvas: Rect): boolean {
    return canvas.width > this.getViewportBounds().width;
  }
}

export class VerticalGoToCanvasGroupStrategy extends DefaultGoToCanvasGroupStrategy {
  override goToCanvasGroup(canvasGroup: CanvasGroup, panToCenter = false) {
    this.previousCanvasGroupIndex = this.canvasService.currentCanvasGroupIndex;
    this.updateCurrentCanvasGroupIndex(canvasGroup.canvasGroupIndex);

    if (this.canvasService.isFitToEnabled()) {
      this.updateViewerMode(canvasGroup);
    }

    if (panToCenter || this.shouldPanToCenter()) {
      this.panToCenter(
        this.canvasService.getCanvasGroupRect(canvasGroup.canvasGroupIndex),
        canvasGroup.immediately,
      );
    }
  }

  override goToPreviousCanvasGroup(
    currentCanvasIndex: number,
    panToCenter = false,
  ): void {
    if (this.canvasService.isPreviousCanvasGroupValid()) {
      this.goToCanvasGroup(
        {
          canvasGroupIndex: this.getNewCanvasGroupIndex(
            currentCanvasIndex,
            Direction.PREVIOUS,
            ScrollDirection.VERTICAL,
          ),
          immediately: false,
        },
        panToCenter,
      );
    }
  }

  override goToNextCanvasGroup(
    currentCanvasIndex: number,
    panToCenter = false,
  ): void {
    if (this.canvasService.isNextCanvasGroupValid()) {
      this.goToCanvasGroup(
        {
          canvasGroupIndex: this.getNewCanvasGroupIndex(
            currentCanvasIndex,
            Direction.NEXT,
            ScrollDirection.VERTICAL,
          ),
          immediately: false,
        },
        panToCenter,
      );
    }
  }
}
