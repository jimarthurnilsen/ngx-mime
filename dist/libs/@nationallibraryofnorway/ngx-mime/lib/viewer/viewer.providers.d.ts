import { AttributionDialogResizeService } from '../attribution-dialog/attribution-dialog-resize.service';
import { AttributionDialogService } from '../attribution-dialog/attribution-dialog.service';
import { CanvasGroupDialogService } from '../canvas-group-dialog/canvas-group-dialog.service';
import { ContentSearchDialogConfigStrategyFactory } from '../content-search-dialog/content-search-dialog-config-strategy-factory';
import { ContentSearchDialogService } from '../content-search-dialog/content-search-dialog.service';
import { AccessKeysService } from '../core/access-keys-handler-service/access-keys.service';
import { AltoService } from '../core/alto-service/alto.service';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { ClickService } from '../core/click-service/click.service';
import { FullscreenService } from '../core/fullscreen-service/fullscreen.service';
import { HighlightService } from '../core/highlight-service/highlight.service';
import { IiifContentSearchService } from '../core/iiif-content-search-service/iiif-content-search.service';
import { IiifManifestService } from '../core/iiif-manifest-service/iiif-manifest-service';
import { MimeDomHelper } from '../core/mime-dom-helper';
import { MimeResizeService } from '../core/mime-resize-service/mime-resize.service';
import { ModeService } from '../core/mode-service/mode.service';
import { ContentSearchNavigationService } from '../core/navigation/content-search-navigation-service/content-search-navigation.service';
import { SpinnerService } from '../core/spinner-service/spinner.service';
import { StyleService } from '../core/style-service/style.service';
import { ViewerLayoutService } from '../core/viewer-layout-service/viewer-layout-service';
import { ViewerService } from '../core/viewer-service/viewer.service';
import { HelpDialogConfigStrategyFactory } from '../help-dialog/help-dialog-config-strategy-factory';
import { HelpDialogService } from '../help-dialog/help-dialog.service';
import { InformationDialogConfigStrategyFactory } from '../information-dialog/information-dialog-config-strategy-factory';
import { InformationDialogService } from '../information-dialog/information-dialog.service';
import { ViewDialogConfigStrategyFactory } from '../view-dialog/view-dialog-config-strategy-factory';
import { ViewDialogService } from '../view-dialog/view-dialog.service';
export declare const VIEWER_PROVIDERS: (typeof ModeService | typeof CanvasService | typeof HighlightService | typeof SpinnerService | typeof IiifManifestService | typeof AltoService | typeof ClickService | typeof IiifContentSearchService | typeof StyleService | typeof ViewerLayoutService | typeof ViewerService | typeof MimeResizeService | typeof FullscreenService | typeof MimeDomHelper | typeof ContentSearchDialogConfigStrategyFactory | typeof ContentSearchNavigationService | typeof ContentSearchDialogService | typeof InformationDialogConfigStrategyFactory | typeof InformationDialogService | typeof ViewDialogConfigStrategyFactory | typeof ViewDialogService | typeof AccessKeysService | typeof AttributionDialogResizeService | typeof CanvasGroupDialogService | typeof HelpDialogConfigStrategyFactory | typeof HelpDialogService | typeof AttributionDialogService)[];
