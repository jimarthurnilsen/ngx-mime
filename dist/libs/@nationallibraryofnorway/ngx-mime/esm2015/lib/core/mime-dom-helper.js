import { FullscreenService } from './fullscreen-service/fullscreen.service';
import { Dimensions } from './models/dimensions';
import { Injectable } from '@angular/core';
export class MimeDomHelper {
    constructor(fullscreen) {
        this.fullscreen = fullscreen;
    }
    getBoundingClientRect(el) {
        try {
            if (this.isDocumentInFullScreenMode() &&
                el.nativeElement.nodeName === 'MIME-VIEWER') {
                return this.createFullscreenDimensions(el);
            }
            else {
                return this.createDimensions(el);
            }
        }
        catch (e) {
            return new Dimensions();
        }
    }
    isDocumentInFullScreenMode() {
        return this.fullscreen.isFullscreen();
    }
    toggleFullscreen() {
        const el = document.getElementById('ngx-mime-mimeViewer');
        if (this.fullscreen.isEnabled()) {
            this.fullscreen.toggle(el);
        }
    }
    setFocusOnViewer() {
        const el = document.getElementById('ngx-mime-mimeViewer');
        if (el) {
            el.focus();
        }
    }
    createFullscreenDimensions(el) {
        const dimensions = el.nativeElement.getBoundingClientRect();
        const width = this.getFullscreenWidth();
        const height = this.getFullscreenHeight();
        return new Dimensions(Object.assign(Object.assign({}, dimensions), { top: 0, bottom: height, width: width, height: height, left: 0, right: width }));
    }
    createDimensions(el) {
        const dimensions = el.nativeElement.getBoundingClientRect();
        return new Dimensions({
            top: dimensions.top,
            bottom: dimensions.bottom,
            width: dimensions.width,
            height: dimensions.height,
            left: dimensions.left,
            right: dimensions.right
        });
    }
    getFullscreenWidth() {
        return (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth);
    }
    getFullscreenHeight() {
        return (window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight);
    }
}
MimeDomHelper.decorators = [
    { type: Injectable }
];
MimeDomHelper.ctorParameters = () => [
    { type: FullscreenService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZS1kb20taGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvcmUvbWltZS1kb20taGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQUcsQ0FBQztJQUU5QyxxQkFBcUIsQ0FBQyxFQUFjO1FBQ3pDLElBQUk7WUFDRixJQUNFLElBQUksQ0FBQywwQkFBMEIsRUFBRTtnQkFDakMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssYUFBYSxFQUMzQztnQkFDQSxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLElBQUksVUFBVSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU0sMEJBQTBCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE1BQU0sRUFBRSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMvRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE1BQU0sRUFBRSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkUsSUFBSSxFQUFFLEVBQUU7WUFDTixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDWjtJQUNILENBQUM7SUFFTywwQkFBMEIsQ0FBQyxFQUFjO1FBQy9DLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM1RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN4QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksVUFBVSxpQ0FDaEIsVUFBVSxLQUNiLEdBQUcsRUFBRSxDQUFDLEVBQ04sTUFBTSxFQUFFLE1BQU0sRUFDZCxLQUFLLEVBQUUsS0FBSyxFQUNaLE1BQU0sRUFBRSxNQUFNLEVBQ2QsSUFBSSxFQUFFLENBQUMsRUFDUCxLQUFLLEVBQUUsS0FBSyxJQUNaLENBQUM7SUFDTCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsRUFBYztRQUNyQyxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDNUQsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDbkIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO1lBQ3pCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztZQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDekIsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJO1lBQ3JCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUN4QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLE9BQU8sQ0FDTCxNQUFNLENBQUMsVUFBVTtZQUNqQixRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVc7WUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLE9BQU8sQ0FDTCxNQUFNLENBQUMsV0FBVztZQUNsQixRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVk7WUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQzNCLENBQUM7SUFDSixDQUFDOzs7WUE5RUYsVUFBVTs7O1lBSkYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tICcuL2Z1bGxzY3JlZW4tc2VydmljZS9mdWxsc2NyZWVuLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4vbW9kZWxzL2RpbWVuc2lvbnMnO1xuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWltZURvbUhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZnVsbHNjcmVlbjogRnVsbHNjcmVlblNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbDogRWxlbWVudFJlZik6IERpbWVuc2lvbnMge1xuICAgIHRyeSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaXNEb2N1bWVudEluRnVsbFNjcmVlbk1vZGUoKSAmJlxuICAgICAgICBlbC5uYXRpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnTUlNRS1WSUVXRVInXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRnVsbHNjcmVlbkRpbWVuc2lvbnMoZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRGltZW5zaW9ucyhlbCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG5ldyBEaW1lbnNpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzRG9jdW1lbnRJbkZ1bGxTY3JlZW5Nb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4uaXNGdWxsc2NyZWVuKCk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlRnVsbHNjcmVlbigpOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IDxhbnk+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25neC1taW1lLW1pbWVWaWV3ZXInKTtcbiAgICBpZiAodGhpcy5mdWxsc2NyZWVuLmlzRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmZ1bGxzY3JlZW4udG9nZ2xlKGVsKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0Rm9jdXNPblZpZXdlcigpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmd4LW1pbWUtbWltZVZpZXdlcicpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUZ1bGxzY3JlZW5EaW1lbnNpb25zKGVsOiBFbGVtZW50UmVmKTogRGltZW5zaW9ucyB7XG4gICAgY29uc3QgZGltZW5zaW9ucyA9IGVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldEZ1bGxzY3JlZW5XaWR0aCgpO1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0RnVsbHNjcmVlbkhlaWdodCgpO1xuICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh7XG4gICAgICAuLi5kaW1lbnNpb25zLFxuICAgICAgdG9wOiAwLFxuICAgICAgYm90dG9tOiBoZWlnaHQsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogd2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGltZW5zaW9ucyhlbDogRWxlbWVudFJlZik6IERpbWVuc2lvbnMge1xuICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBlbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh7XG4gICAgICB0b3A6IGRpbWVuc2lvbnMudG9wLFxuICAgICAgYm90dG9tOiBkaW1lbnNpb25zLmJvdHRvbSxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoLFxuICAgICAgaGVpZ2h0OiBkaW1lbnNpb25zLmhlaWdodCxcbiAgICAgIGxlZnQ6IGRpbWVuc2lvbnMubGVmdCxcbiAgICAgIHJpZ2h0OiBkaW1lbnNpb25zLnJpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZ1bGxzY3JlZW5XaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG4gICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RnVsbHNjcmVlbkhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgfHxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHxcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0XG4gICAgKTtcbiAgfVxufVxuIl19