import { TestBed } from '@angular/core/testing';
import d3 from 'd3';
import { Spy, provideAutoSpy } from 'jest-auto-spies';
import { Resource } from '../models/manifest';
import { Rect } from '../models/rect';
import { ViewerLayout } from '../models/viewer-layout';
import { ViewerLayoutService } from '../viewer-layout-service/viewer-layout-service';
import { CanvasService } from './canvas-service';

describe('CanvasService', () => {
  let service: CanvasService;
  let viewerLayoutServiceSpy: Spy<ViewerLayoutService>;

  beforeEach(() => {
    const canvases: Rect[] = [];
    const tileSources: Resource[] = [];
    for (let i = 0; i < 100; i++) {
      canvases.push(new Rect());
      tileSources.push({
        id: 'id' + i,
        height: 100,
        width: 100,
        type: 'image',
        tileOverlap: 0,
      });
    }

    TestBed.configureTestingModule({
      providers: [
        CanvasService,
        provideAutoSpy(ViewerLayoutService, {
          gettersToSpyOn: ['layout'],
        }),
      ],
    });
    service = TestBed.inject(CanvasService);
    viewerLayoutServiceSpy = TestBed.inject(
      ViewerLayoutService,
    ) as Spy<ViewerLayoutService>;

    jest.spyOn(service as any, 'createOverlay').mockImplementation();
    viewerLayoutServiceSpy.accessorSpies.getters.layout.mockReturnValue(
      ViewerLayout.ONE_PAGE,
    );

    service.setSvgNode(d3.create('svg'));
    service.addTileSources(tileSources);
    service.updateViewer();
  });

  it('should return true when requested canvas group index is within bounds', () => {
    expect(service.isWithinBounds(0)).toBe(true);
    expect(service.isWithinBounds(10)).toBe(true);
    expect(service.isWithinBounds(99)).toBe(true);
  });

  it('should return false when requested canvas group index is outside bounds', () => {
    expect(service.isWithinBounds(-1)).toBe(false);
    expect(service.isWithinBounds(100)).toBe(false);
    expect(service.isWithinBounds(101)).toBe(false);
    expect(service.isWithinBounds(1000)).toBe(false);
  });

  it('should set canvas group index', () => {
    service.currentCanvasGroupIndex = 0;
    expect(service.currentCanvasGroupIndex).toBe(0);
    service.currentCanvasGroupIndex = 99;
    expect(service.currentCanvasGroupIndex).toBe(99);
  });

  it('should not set canvas group index if outside bounds', () => {
    service.currentCanvasGroupIndex = 76;

    service.currentCanvasGroupIndex = -2;
    expect(service.currentCanvasGroupIndex).toBe(76);

    service.currentCanvasGroupIndex = 100;
    expect(service.currentCanvasGroupIndex).toBe(76);

    service.currentCanvasGroupIndex = 101;
    expect(service.currentCanvasGroupIndex).toBe(76);

    service.currentCanvasGroupIndex = 176;
    expect(service.currentCanvasGroupIndex).toBe(76);
  });

  it('should get next canvas group index', () => {
    let currentCanvasGroup = (service.currentCanvasGroupIndex = 0);
    expect(service.getNextCanvasGroupIndex()).toBe(currentCanvasGroup + 1);

    currentCanvasGroup = service.currentCanvasGroupIndex = 98;
    expect(service.getNextCanvasGroupIndex()).toBe(currentCanvasGroup + 1);
  });

  it('should get previous canvas group index', () => {
    let currentCanvasGroup = (service.currentCanvasGroupIndex = 2);
    expect(service.getPrevCanvasGroupIndex()).toBe(currentCanvasGroup - 1);

    currentCanvasGroup = service.currentCanvasGroupIndex = 1;
    expect(service.getPrevCanvasGroupIndex()).toBe(currentCanvasGroup - 1);
  });

  it('should return -1 when next canvas group index is out of bounds', () => {
    service.currentCanvasGroupIndex = 99;
    expect(service.getNextCanvasGroupIndex()).toBe(-1);
  });

  it('should return -1 when previous canvas group index is out of bounds', () => {
    service.currentCanvasGroupIndex = 0;
    expect(service.getPrevCanvasGroupIndex()).toBe(-1);
  });

  it('should return max canvas group index when next canvas group index is larger than max', () => {
    let newCanvasGroupIndex = service.constrainToRange(101);
    expect(newCanvasGroupIndex).toBe(99);

    newCanvasGroupIndex = service.constrainToRange(110);
    expect(newCanvasGroupIndex).toBe(99);
  });

  it('should not return canvas group index lower than 0', () => {
    let newCanvasGroupIndex = service.constrainToRange(0);
    expect(newCanvasGroupIndex).toBe(0);

    newCanvasGroupIndex = service.constrainToRange(-1);
    expect(newCanvasGroupIndex).toBe(0);

    newCanvasGroupIndex = service.constrainToRange(-10);
    expect(newCanvasGroupIndex).toBe(0);
  });

  it('should return 1 if canvas group is empty', () => {
    const canvasGroupLabel = service.getCanvasGroupLabel(0);
    expect(canvasGroupLabel).toBe('1');
  });
});
