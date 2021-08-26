import { AfterViewChecked, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AttributionDialogService } from '../attribution-dialog/attribution-dialog.service';
import { ContentSearchDialogService } from '../content-search-dialog/content-search-dialog.service';
import { ContentsDialogService } from '../contents-dialog/contents-dialog.service';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { AltoService } from '../core/alto-service/alto.service';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeViewerIntl } from '../core/intl/viewer-intl';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { MimeViewerConfig } from '../core/mime-viewer-config';
import { ModeService } from '../core/mode-service/mode.service';
import { Manifest } from '../core/models/manifest';
import { ViewerMode } from '../core/models/viewer-mode';
import { StyleService } from '../core/style-service/style.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { HelpDialogService } from '../help-dialog/help-dialog.service';
import { IiifContentSearchService } from './../core/iiif-content-search-service/iiif-content-search.service';
export declare class ViewerComponent implements OnInit, AfterViewChecked, OnDestroy, OnChanges {
    snackBar: MatSnackBar;
    intl: MimeViewerIntl;
    private el;
    private iiifManifestService;
    private contentsDialogService;
    private attributionDialogService;
    private contentSearchDialogService;
    private helpDialogService;
    private viewerService;
    private resizeService;
    private changeDetectorRef;
    private modeService;
    private iiifContentSearchService;
    private accessKeysHandlerService;
    private canvasService;
    private viewerLayoutService;
    private styleService;
    private altoService;
    zone: NgZone;
    manifestUri: string;
    q: string;
    canvasIndex: number;
    config: MimeViewerConfig;
    tabIndex: number;
    viewerModeChanged: EventEmitter<ViewerMode>;
    canvasChanged: EventEmitter<number>;
    qChanged: EventEmitter<string>;
    manifestChanged: EventEmitter<Manifest>;
    recognizedTextContentToggleChanged: EventEmitter<boolean>;
    private subscriptions;
    private isCanvasPressed;
    private currentManifest;
    private viewerLayout;
    private viewerState;
    isRecognizedTextContentToggled: boolean;
    showHeaderAndFooterState: string;
    errorMessage: string | null;
    private header;
    private footer;
    private osdToolbar;
    constructor(snackBar: MatSnackBar, intl: MimeViewerIntl, el: ElementRef, iiifManifestService: IiifManifestService, contentsDialogService: ContentsDialogService, attributionDialogService: AttributionDialogService, contentSearchDialogService: ContentSearchDialogService, helpDialogService: HelpDialogService, viewerService: ViewerService, resizeService: MimeResizeService, changeDetectorRef: ChangeDetectorRef, modeService: ModeService, iiifContentSearchService: IiifContentSearchService, accessKeysHandlerService: AccessKeysService, canvasService: CanvasService, viewerLayoutService: ViewerLayoutService, styleService: StyleService, altoService: AltoService, zone: NgZone);
    get mimeHeaderBeforeRef(): ViewContainerRef;
    get mimeHeaderAfterRef(): ViewContainerRef;
    get mimeFooterBeforeRef(): ViewContainerRef;
    get mimeFooterAfterRef(): ViewContainerRef;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    handleKeys(event: KeyboardEvent): void;
    onDrop(event: any): void;
    onDragOver(event: any): void;
    onDragLeave(event: any): void;
    ngOnDestroy(): void;
    toggleToolbarsState(mode: ViewerMode): void;
    ngAfterViewChecked(): void;
    private loadManifest;
    private initialize;
    private cleanup;
    private resetCurrentManifest;
    private resetErrorMessage;
    setClasses(): {
        'mode-page': boolean;
        'mode-page-zoomed': boolean;
        'mode-dashboard': boolean;
        'layout-one-page': boolean;
        'layout-two-page': boolean;
        'canvas-pressed': boolean;
    };
}
