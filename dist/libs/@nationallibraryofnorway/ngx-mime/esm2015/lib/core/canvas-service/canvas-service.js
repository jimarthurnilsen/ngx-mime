import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { CanvasGroups } from './../models/canvas-groups';
import { CanvasGroupStrategyFactory } from './canvas-groups-strategy.factory';
export class CanvasService {
    constructor() {
        this._currentNumberOfCanvasGroups = new BehaviorSubject(0);
        this._currentCanvasGroupIndex = new BehaviorSubject(0);
        this.canvasGroups = new CanvasGroups();
        this._numberOfCanvases = 0;
    }
    addAll(canvasRects, layout) {
        this.numberOfCanvases = canvasRects.length;
        const canvasGroupStrategy = CanvasGroupStrategyFactory.create(layout);
        this.canvasGroups = canvasGroupStrategy.addAll(canvasRects);
        this._currentNumberOfCanvasGroups.next(this.canvasGroups.length());
    }
    reset() {
        this.numberOfCanvases = 0;
        this._currentCanvasGroupIndex.next(0);
        this.canvasGroups = new CanvasGroups();
    }
    get onCanvasGroupIndexChange() {
        return this._currentCanvasGroupIndex
            .asObservable()
            .pipe(distinctUntilChanged());
    }
    get onNumberOfCanvasGroupsChange() {
        return this._currentNumberOfCanvasGroups
            .asObservable()
            .pipe(distinctUntilChanged());
    }
    set currentCanvasGroupIndex(currentCanvasGroupIndex) {
        if (!this.isWithinBounds(currentCanvasGroupIndex)) {
            return;
        }
        this._currentCanvasGroupIndex.next(currentCanvasGroupIndex);
    }
    get currentCanvasGroupIndex() {
        return this._currentCanvasGroupIndex.value;
    }
    get numberOfCanvases() {
        return this._numberOfCanvases;
    }
    set numberOfCanvases(numberOfCanvases) {
        this._numberOfCanvases = numberOfCanvases;
    }
    get numberOfCanvasGroups() {
        return this.canvasGroups.length();
    }
    get currentCanvasIndex() {
        const canvases = this.canvasGroups.canvasesPerCanvasGroup[this.currentCanvasGroupIndex];
        return canvases && canvases.length >= 1 ? canvases[0] : 0;
    }
    isWithinBounds(canvasGroupIndex) {
        return (canvasGroupIndex > -1 && canvasGroupIndex <= this.numberOfCanvasGroups - 1);
    }
    isCurrentCanvasGroupValid() {
        return this.isWithinBounds(this.currentCanvasGroupIndex);
    }
    // Returns -1 if next canvas index is out of bounds
    getNextCanvasGroupIndex() {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex + 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex++;
        return this.currentCanvasGroupIndex;
    }
    // Returns -1 if previous canvas index is out of bounds
    getPrevCanvasGroupIndex() {
        if (!this.isWithinBounds(this.currentCanvasGroupIndex - 1)) {
            return -1;
        }
        this.currentCanvasGroupIndex--;
        return this.currentCanvasGroupIndex;
    }
    constrainToRange(canvasGroupsIndex) {
        if (canvasGroupsIndex < 0) {
            return 0;
        }
        else if (canvasGroupsIndex >= this.numberOfCanvasGroups - 1) {
            return this.numberOfCanvasGroups - 1;
        }
        else {
            return canvasGroupsIndex;
        }
    }
    findClosestCanvasGroupIndex(point) {
        return this.canvasGroups.findClosestIndex(point);
    }
    findCanvasGroupByCanvasIndex(canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.findIndex(function (canvasForCanvasGroup) {
            return canvasForCanvasGroup.indexOf(canvasIndex) >= 0;
        });
    }
    findCanvasByCanvasIndex(canvasIndex) {
        return this.canvasGroups.canvasesPerCanvasGroup.length === 0
            ? -1
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex][0];
    }
    getCanvasGroupLabel(canvasGroupIndex) {
        if (!this.canvasGroups.canvasGroupRects ||
            this.canvasGroups.canvasesPerCanvasGroup.length === 0) {
            return '1';
        }
        const canvasGroup = this.canvasGroups.canvasesPerCanvasGroup[canvasGroupIndex];
        let canvasGroupLabel = '' + (canvasGroup[0] + 1);
        if (canvasGroup.length > 1) {
            canvasGroupLabel =
                canvasGroupLabel + '-' + (canvasGroup[canvasGroup.length - 1] + 1);
        }
        return canvasGroupLabel;
    }
    getCanvasesPerCanvasGroup(canvasIndex) {
        return !this.canvasGroups.canvasGroupRects
            ? [0]
            : this.canvasGroups.canvasesPerCanvasGroup[canvasIndex];
    }
    getCanvasRect(canvasIndex) {
        return this.canvasGroups.canvasRects[canvasIndex];
    }
    getCurrentCanvasGroupRect() {
        return this.getCanvasGroupRect(this.currentCanvasGroupIndex);
    }
    getCanvasGroupRect(canvasGroupIndex) {
        return this.canvasGroups.get(canvasGroupIndex);
    }
    getMaxHeight() {
        return this.canvasGroups.getMaxHeight();
    }
    getMaxWidth() {
        return this.canvasGroups.getMaxWidth();
    }
}
CanvasService.decorators = [
    { type: Injectable }
];
CanvasService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLXNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY29yZS9jYW52YXMtc2VydmljZS9jYW52YXMtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRzlFLE1BQU0sT0FBTyxhQUFhO0lBV3hCO1FBVlUsaUNBQTRCLEdBRWxDLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLDZCQUF3QixHQUU5QixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqQixpQkFBWSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRWhCLE1BQU0sQ0FBQyxXQUFtQixFQUFFLE1BQW9CO1FBQzlDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQzNDLE1BQU0sbUJBQW1CLEdBQUcsMEJBQTBCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSx3QkFBd0I7UUFDMUIsT0FBTyxJQUFJLENBQUMsd0JBQXdCO2FBQ2pDLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUksNEJBQTRCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QjthQUNyQyxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxJQUFJLHVCQUF1QixDQUFDLHVCQUErQjtRQUN6RCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBd0I7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGdCQUFnQixDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQ3ZELElBQUksQ0FBQyx1QkFBdUIsQ0FDN0IsQ0FBQTtRQUNELE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsY0FBYyxDQUFDLGdCQUF3QjtRQUNyQyxPQUFPLENBQ0wsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFFRCx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsdUJBQXVCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMxRCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELHVCQUF1QjtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDMUQsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLGlCQUF5QjtRQUN4QyxJQUFJLGlCQUFpQixHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQztTQUNWO2FBQU0sSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxLQUFZO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNEJBQTRCLENBQUMsV0FBbUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxVQUN4RCxvQkFBOEI7WUFFOUIsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVCQUF1QixDQUFDLFdBQW1CO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELG1CQUFtQixDQUFDLGdCQUF3QjtRQUMxQyxJQUNFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0I7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUNyRDtZQUNBLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUMxRCxnQkFBZ0IsQ0FDakIsQ0FBQztRQUNGLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpELElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUIsZ0JBQWdCO2dCQUNkLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRUQseUJBQXlCLENBQUMsV0FBbUI7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO1lBQ3hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxhQUFhLENBQUMsV0FBbUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQseUJBQXlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxnQkFBd0I7UUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUM7OztZQTFLRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2FudmFzR3JvdXBzIH0gZnJvbSAnLi8uLi9tb2RlbHMvY2FudmFzLWdyb3Vwcyc7XG5pbXBvcnQgeyBWaWV3ZXJMYXlvdXQgfSBmcm9tICcuLi9tb2RlbHMvdmlld2VyLWxheW91dCc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vLi4vbW9kZWxzL3BvaW50JztcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLy4uL21vZGVscy9yZWN0JztcbmltcG9ydCB7IENhbnZhc0dyb3VwU3RyYXRlZ3lGYWN0b3J5IH0gZnJvbSAnLi9jYW52YXMtZ3JvdXBzLXN0cmF0ZWd5LmZhY3RvcnknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FudmFzU2VydmljZSB7XG4gIHByb3RlY3RlZCBfY3VycmVudE51bWJlck9mQ2FudmFzR3JvdXBzOiBCZWhhdmlvclN1YmplY3Q8XG4gICAgbnVtYmVyXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuICBwcm90ZWN0ZWQgX2N1cnJlbnRDYW52YXNHcm91cEluZGV4OiBCZWhhdmlvclN1YmplY3Q8XG4gICAgbnVtYmVyXG4gID4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KDApO1xuXG4gIHByb3RlY3RlZCBjYW52YXNHcm91cHM6IENhbnZhc0dyb3VwcyA9IG5ldyBDYW52YXNHcm91cHMoKTtcbiAgcHJvdGVjdGVkIF9udW1iZXJPZkNhbnZhc2VzID0gMDtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkQWxsKGNhbnZhc1JlY3RzOiBSZWN0W10sIGxheW91dDogVmlld2VyTGF5b3V0KSB7XG4gICAgdGhpcy5udW1iZXJPZkNhbnZhc2VzID0gY2FudmFzUmVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IGNhbnZhc0dyb3VwU3RyYXRlZ3kgPSBDYW52YXNHcm91cFN0cmF0ZWd5RmFjdG9yeS5jcmVhdGUobGF5b3V0KTtcbiAgICB0aGlzLmNhbnZhc0dyb3VwcyA9IGNhbnZhc0dyb3VwU3RyYXRlZ3kuYWRkQWxsKGNhbnZhc1JlY3RzKTtcbiAgICB0aGlzLl9jdXJyZW50TnVtYmVyT2ZDYW52YXNHcm91cHMubmV4dCh0aGlzLmNhbnZhc0dyb3Vwcy5sZW5ndGgoKSk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm51bWJlck9mQ2FudmFzZXMgPSAwO1xuICAgIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4Lm5leHQoMCk7XG4gICAgdGhpcy5jYW52YXNHcm91cHMgPSBuZXcgQ2FudmFzR3JvdXBzKCk7XG4gIH1cblxuICBnZXQgb25DYW52YXNHcm91cEluZGV4Q2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4XG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgZ2V0IG9uTnVtYmVyT2ZDYW52YXNHcm91cHNDaGFuZ2UoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudE51bWJlck9mQ2FudmFzR3JvdXBzXG4gICAgICAuYXNPYnNlcnZhYmxlKClcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4KGN1cnJlbnRDYW52YXNHcm91cEluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNXaXRoaW5Cb3VuZHMoY3VycmVudENhbnZhc0dyb3VwSW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4Lm5leHQoY3VycmVudENhbnZhc0dyb3VwSW5kZXgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDYW52YXNHcm91cEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRDYW52YXNHcm91cEluZGV4LnZhbHVlO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mQ2FudmFzZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbnVtYmVyT2ZDYW52YXNlcztcbiAgfVxuXG4gIHNldCBudW1iZXJPZkNhbnZhc2VzKG51bWJlck9mQ2FudmFzZXM6IG51bWJlcikge1xuICAgIHRoaXMuX251bWJlck9mQ2FudmFzZXMgPSBudW1iZXJPZkNhbnZhc2VzO1xuICB9XG5cbiAgZ2V0IG51bWJlck9mQ2FudmFzR3JvdXBzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmxlbmd0aCgpO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRDYW52YXNJbmRleCgpOiBudW1iZXIge1xuICAgIGNvbnN0IGNhbnZhc2VzID0gdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cFtcbiAgICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXhcbiAgICBdXG4gICAgcmV0dXJuIGNhbnZhc2VzICYmIGNhbnZhc2VzLmxlbmd0aCA+PSAxID8gY2FudmFzZXNbMF0gOiAwO1xuICB9XG5cbiAgaXNXaXRoaW5Cb3VuZHMoY2FudmFzR3JvdXBJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNhbnZhc0dyb3VwSW5kZXggPiAtMSAmJiBjYW52YXNHcm91cEluZGV4IDw9IHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgLSAxXG4gICAgKTtcbiAgfVxuXG4gIGlzQ3VycmVudENhbnZhc0dyb3VwVmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNXaXRoaW5Cb3VuZHModGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCk7XG4gIH1cblxuICAvLyBSZXR1cm5zIC0xIGlmIG5leHQgY2FudmFzIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAgZ2V0TmV4dENhbnZhc0dyb3VwSW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNXaXRoaW5Cb3VuZHModGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCArIDEpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgfVxuXG4gIC8vIFJldHVybnMgLTEgaWYgcHJldmlvdXMgY2FudmFzIGluZGV4IGlzIG91dCBvZiBib3VuZHNcbiAgZ2V0UHJldkNhbnZhc0dyb3VwSW5kZXgoKTogbnVtYmVyIHtcbiAgICBpZiAoIXRoaXMuaXNXaXRoaW5Cb3VuZHModGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleCAtIDEpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXgtLTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50Q2FudmFzR3JvdXBJbmRleDtcbiAgfVxuXG4gIGNvbnN0cmFpblRvUmFuZ2UoY2FudmFzR3JvdXBzSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGNhbnZhc0dyb3Vwc0luZGV4IDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChjYW52YXNHcm91cHNJbmRleCA+PSB0aGlzLm51bWJlck9mQ2FudmFzR3JvdXBzIC0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZDYW52YXNHcm91cHMgLSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FudmFzR3JvdXBzSW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZmluZENsb3Nlc3RDYW52YXNHcm91cEluZGV4KHBvaW50OiBQb2ludCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmZpbmRDbG9zZXN0SW5kZXgocG9pbnQpO1xuICB9XG5cbiAgZmluZENhbnZhc0dyb3VwQnlDYW52YXNJbmRleChjYW52YXNJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNHcm91cHMuY2FudmFzZXNQZXJDYW52YXNHcm91cC5maW5kSW5kZXgoZnVuY3Rpb24oXG4gICAgICBjYW52YXNGb3JDYW52YXNHcm91cDogbnVtYmVyW11cbiAgICApIHtcbiAgICAgIHJldHVybiBjYW52YXNGb3JDYW52YXNHcm91cC5pbmRleE9mKGNhbnZhc0luZGV4KSA+PSAwO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZENhbnZhc0J5Q2FudmFzSW5kZXgoY2FudmFzSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXAubGVuZ3RoID09PSAwXG4gICAgICA/IC0xXG4gICAgICA6IHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbY2FudmFzSW5kZXhdWzBdO1xuICB9XG5cbiAgZ2V0Q2FudmFzR3JvdXBMYWJlbChjYW52YXNHcm91cEluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmNhbnZhc0dyb3Vwcy5jYW52YXNHcm91cFJlY3RzIHx8XG4gICAgICB0aGlzLmNhbnZhc0dyb3Vwcy5jYW52YXNlc1BlckNhbnZhc0dyb3VwLmxlbmd0aCA9PT0gMFxuICAgICkge1xuICAgICAgcmV0dXJuICcxJztcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXNHcm91cCA9IHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbXG4gICAgICBjYW52YXNHcm91cEluZGV4XG4gICAgXTtcbiAgICBsZXQgY2FudmFzR3JvdXBMYWJlbCA9ICcnICsgKGNhbnZhc0dyb3VwWzBdICsgMSk7XG5cbiAgICBpZiAoY2FudmFzR3JvdXAubGVuZ3RoID4gMSkge1xuICAgICAgY2FudmFzR3JvdXBMYWJlbCA9XG4gICAgICAgIGNhbnZhc0dyb3VwTGFiZWwgKyAnLScgKyAoY2FudmFzR3JvdXBbY2FudmFzR3JvdXAubGVuZ3RoIC0gMV0gKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FudmFzR3JvdXBMYWJlbDtcbiAgfVxuXG4gIGdldENhbnZhc2VzUGVyQ2FudmFzR3JvdXAoY2FudmFzSW5kZXg6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gIXRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc0dyb3VwUmVjdHNcbiAgICAgID8gWzBdXG4gICAgICA6IHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc2VzUGVyQ2FudmFzR3JvdXBbY2FudmFzSW5kZXhdO1xuICB9XG5cbiAgZ2V0Q2FudmFzUmVjdChjYW52YXNJbmRleDogbnVtYmVyKTogUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmNhbnZhc1JlY3RzW2NhbnZhc0luZGV4XTtcbiAgfVxuXG4gIGdldEN1cnJlbnRDYW52YXNHcm91cFJlY3QoKTogUmVjdCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FudmFzR3JvdXBSZWN0KHRoaXMuY3VycmVudENhbnZhc0dyb3VwSW5kZXgpO1xuICB9XG5cbiAgZ2V0Q2FudmFzR3JvdXBSZWN0KGNhbnZhc0dyb3VwSW5kZXg6IG51bWJlcik6IFJlY3Qge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0dyb3Vwcy5nZXQoY2FudmFzR3JvdXBJbmRleCk7XG4gIH1cblxuICBnZXRNYXhIZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXNHcm91cHMuZ2V0TWF4SGVpZ2h0KCk7XG4gIH1cblxuICBnZXRNYXhXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNhbnZhc0dyb3Vwcy5nZXRNYXhXaWR0aCgpO1xuICB9XG59XG4iXX0=