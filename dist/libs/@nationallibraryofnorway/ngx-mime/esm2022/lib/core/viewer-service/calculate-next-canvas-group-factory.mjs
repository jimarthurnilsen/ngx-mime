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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY29yZS92aWV3ZXItc2VydmljZS9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFN0csT0FBTyxFQUFFLDZDQUE2QyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDdEgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUcsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFFekgsTUFBTSxPQUFPLCtCQUErQjtJQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWdCO1FBQ25DLElBQUksSUFBSSxLQUFLLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQyxPQUFPLElBQUksNkNBQTZDLEVBQUUsQ0FBQztRQUM3RCxDQUFDO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BDLE9BQU8sSUFBSSx3Q0FBd0MsRUFBRSxDQUFDO1FBQ3hELENBQUM7YUFBTSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0MsT0FBTyxJQUFJLDhDQUE4QyxFQUFFLENBQUM7UUFDOUQsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUkseUNBQXlDLEVBQUUsQ0FBQztRQUN6RCxDQUFDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlld2VyTW9kZSB9IGZyb20gJy4uL21vZGVscy92aWV3ZXItbW9kZSc7XG5pbXBvcnQgeyBOYXZpZ2F0b3JDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB9IGZyb20gJy4vbmF2aWdhdG9yLWNhbGN1bGF0ZS1uZXh0LWNhbnZhcy1ncm91cC1zdHJhdGVneSc7XG5pbXBvcnQgeyBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB9IGZyb20gJy4vY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB9IGZyb20gJy4vZGFzaGJvYXJkLW1vZGUtY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5JztcbmltcG9ydCB7IFBhZ2VNb2RlQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kgfSBmcm9tICcuL3BhZ2UtbW9kZS1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuaW1wb3J0IHsgUGFnZVpvb21lZE1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB9IGZyb20gJy4vcGFnZS16b29tZWQtbW9kZS1jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwRmFjdG9yeSB7XG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG1vZGU6IFZpZXdlck1vZGUpOiBDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSB7XG4gICAgaWYgKG1vZGUgPT09IFZpZXdlck1vZGUuREFTSEJPQVJEKSB7XG4gICAgICByZXR1cm4gbmV3IERhc2hib2FyZE1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSgpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PT0gVmlld2VyTW9kZS5QQUdFKSB7XG4gICAgICByZXR1cm4gbmV3IFBhZ2VNb2RlQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3koKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IFZpZXdlck1vZGUuUEFHRV9aT09NRUQpIHtcbiAgICAgIHJldHVybiBuZXcgUGFnZVpvb21lZE1vZGVDYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXBTdHJhdGVneSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IE5hdmlnYXRvckNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5KCk7XG4gICAgfVxuICB9XG59XG4iXX0=