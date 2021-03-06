import { SpinnerService } from './spinner-service/spinner.service';
import { NgModule } from '@angular/core';

import { MimeViewerIntl } from './intl/viewer-intl';
import { IiifManifestService } from './iiif-manifest-service/iiif-manifest-service';
import { IiifContentSearchService } from './iiif-content-search-service/iiif-content-search.service';
import { CanvasService } from './canvas-service/canvas-service';
import { MimeResizeService } from './mime-resize-service/mime-resize.service';
import { FullscreenService } from './fullscreen-service/fullscreen.service';
import { ViewerService } from './viewer-service/viewer.service';
import { ModeService } from './mode-service/mode.service';
import { ClickService } from './click-service/click.service';
import { ViewerLayoutService } from './viewer-layout-service/viewer-layout-service';
import { AccessKeysService } from './access-keys-handler-service/access-keys.service';
import { ContentSearchNavigationService } from './navigation/content-search-navigation-service/content-search-navigation.service';
import { StyleService } from './style-service/style.service';

@NgModule({
  providers: [
    MimeViewerIntl,
    IiifManifestService,
    IiifContentSearchService,
    MimeResizeService,
    FullscreenService,
    ViewerService,
    ClickService,
    CanvasService,
    ModeService,
    SpinnerService,
    AccessKeysService,
    ViewerLayoutService,
    ContentSearchNavigationService,
    StyleService
  ]
})
export class CoreModule {}
