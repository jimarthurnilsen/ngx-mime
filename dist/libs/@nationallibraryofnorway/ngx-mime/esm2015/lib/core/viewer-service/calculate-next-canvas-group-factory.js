import { ViewerMode } from '../models/viewer-mode';
import { NavigatorCalculateNextCanvasGroupStrategy } from './navigator-calculate-next-canvas-group-strategy';
import { DashboardModeCalculateNextCanvasGroupStrategy } from './dashboard-mode-calculate-next-canvas-group-strategy';
import { PageModeCalculateNextCanvasGroupStrategy } from './page-mode-calculate-next-canvas-group-strategy';
import { PageZoomedModeCalculateNextCanvasGroupStrategy } from './page-zoomed-mode-calculate-next-canvas-group-strategy';
export class CalculateNextCanvasGroupFactory {
    static create(mode) {
        if (mode === ViewerMode.DASHBOARD) {
            return new DashboardModeCalculateNextCanvasGroupStrategy();
        }
        else if (mode === ViewerMode.PAGE) {
            return new PageModeCalculateNextCanvasGroupStrategy();
        }
        else if (mode === ViewerMode.PAGE_ZOOMED) {
            return new PageZoomedModeCalculateNextCanvasGroupStrategy();
        }
        else {
            return new NavigatorCalculateNextCanvasGroupStrategy();
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY29yZS92aWV3ZXItc2VydmljZS9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFN0csT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFekgsTUFBTSxPQUFPLCtCQUErQjtJQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWdCO1FBQ25DLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxJQUFJLDZDQUE2QyxFQUFFLENBQUM7U0FDNUQ7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ25DLE9BQU8sSUFBSSx3Q0FBd0MsRUFBRSxDQUFDO1NBQ3ZEO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDLFdBQVcsRUFBRTtZQUMxQyxPQUFPLElBQUksOENBQThDLEVBQUUsQ0FBQztTQUM3RDthQUFNO1lBQ0wsT0FBTyxJQUFJLHlDQUF5QyxFQUFFLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3ZXJNb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdlci1tb2RlJztcbmltcG9ydCB7IE5hdmlnYXRvckNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IH0gZnJvbSAnLi9uYXZpZ2F0b3ItY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcbmltcG9ydCB7IENhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IH0gZnJvbSAnLi9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZUNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IH0gZnJvbSAnLi9kYXNoYm9hcmQtbW9kZS1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuaW1wb3J0IHsgUGFnZU1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB9IGZyb20gJy4vcGFnZS1tb2RlLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneSc7XG5pbXBvcnQgeyBQYWdlWm9vbWVkTW9kZUNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IH0gZnJvbSAnLi9wYWdlLXpvb21lZC1tb2RlLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneSc7XG5cbmV4cG9ydCBjbGFzcyBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBGYWN0b3J5IHtcbiAgcHVibGljIHN0YXRpYyBjcmVhdGUobW9kZTogVmlld2VyTW9kZSk6IENhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5IHtcbiAgICBpZiAobW9kZSA9PT0gVmlld2VyTW9kZS5EQVNIQk9BUkQpIHtcbiAgICAgIHJldHVybiBuZXcgRGFzaGJvYXJkTW9kZUNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5KCk7XG4gICAgfSBlbHNlIGlmIChtb2RlID09PSBWaWV3ZXJNb2RlLlBBR0UpIHtcbiAgICAgIHJldHVybiBuZXcgUGFnZU1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSgpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFX1pPT01FRCkge1xuICAgICAgcmV0dXJuIG5ldyBQYWdlWm9vbWVkTW9kZUNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgTmF2aWdhdG9yQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==