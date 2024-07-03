export class CanvasGroups {
    constructor() {
        this.canvasGroups = [];
        this.tileSourceAndRects = [];
        this.canvasesPerCanvasGroup = [];
    }
    add(canvasGroup) {
        this.canvasGroups.push(canvasGroup);
        if (canvasGroup.tileSourceAndRects) {
            canvasGroup.tileSourceAndRects.forEach((tileSourceAndRect, i) => {
                this.tileSourceAndRects.push(tileSourceAndRect);
            });
        }
    }
    addRange(canvasGroups) {
        this.canvasGroups = [...canvasGroups];
    }
    get(index) {
        return { ...this.canvasGroups[index] };
    }
    findClosestIndex(point) {
        let i = 0;
        let lastDelta;
        if (point === null) {
            return -1;
        }
        this.canvasGroups.some(function (canvasGroup, index) {
            const delta = Math.abs(point.x - canvasGroup.rect.centerX);
            if (delta >= lastDelta) {
                return true;
            }
            i = index;
            lastDelta = delta;
            return false;
        });
        return i;
    }
    length() {
        return this.canvasGroups.length;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL21vZGVscy9jYW52YXMtZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ0UsaUJBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLHVCQUFrQixHQUF3QixFQUFFLENBQUM7UUFDN0MsMkJBQXNCLEdBQWUsRUFBRSxDQUFDO0lBNEMxQyxDQUFDO0lBMUNRLEdBQUcsQ0FBQyxXQUF3QjtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwQyxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ25DLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQ3BDLENBQUMsaUJBQW9DLEVBQUUsQ0FBUyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRU0sUUFBUSxDQUFDLFlBQXdDO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQVk7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxTQUFjLENBQUM7UUFFbkIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDbkIsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLFdBQXdCLEVBQUUsS0FBYTtZQUN0RSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzRCxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNWLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhbnZhc0dyb3VwLFxuICBUaWxlU291cmNlQW5kUmVjdCxcbn0gZnJvbSAnLi4vY2FudmFzLXNlcnZpY2UvdGlsZS1zb3VyY2UtYW5kLXJlY3QubW9kZWwnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50JztcblxuZXhwb3J0IGNsYXNzIENhbnZhc0dyb3VwcyB7XG4gIGNhbnZhc0dyb3VwczogQ2FudmFzR3JvdXBbXSA9IFtdO1xuICB0aWxlU291cmNlQW5kUmVjdHM6IFRpbGVTb3VyY2VBbmRSZWN0W10gPSBbXTtcbiAgY2FudmFzZXNQZXJDYW52YXNHcm91cDogbnVtYmVyW11bXSA9IFtdO1xuXG4gIHB1YmxpYyBhZGQoY2FudmFzR3JvdXA6IENhbnZhc0dyb3VwKTogdm9pZCB7XG4gICAgdGhpcy5jYW52YXNHcm91cHMucHVzaChjYW52YXNHcm91cCk7XG5cbiAgICBpZiAoY2FudmFzR3JvdXAudGlsZVNvdXJjZUFuZFJlY3RzKSB7XG4gICAgICBjYW52YXNHcm91cC50aWxlU291cmNlQW5kUmVjdHMuZm9yRWFjaChcbiAgICAgICAgKHRpbGVTb3VyY2VBbmRSZWN0OiBUaWxlU291cmNlQW5kUmVjdCwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgdGhpcy50aWxlU291cmNlQW5kUmVjdHMucHVzaCh0aWxlU291cmNlQW5kUmVjdCk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRSYW5nZShjYW52YXNHcm91cHM6IFJlYWRvbmx5QXJyYXk8Q2FudmFzR3JvdXA+KTogdm9pZCB7XG4gICAgdGhpcy5jYW52YXNHcm91cHMgPSBbLi4uY2FudmFzR3JvdXBzXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoaW5kZXg6IG51bWJlcik6IENhbnZhc0dyb3VwIHtcbiAgICByZXR1cm4geyAuLi50aGlzLmNhbnZhc0dyb3Vwc1tpbmRleF0gfTtcbiAgfVxuXG4gIHB1YmxpYyBmaW5kQ2xvc2VzdEluZGV4KHBvaW50OiBQb2ludCk6IG51bWJlciB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBsYXN0RGVsdGE6IGFueTtcblxuICAgIGlmIChwb2ludCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICB0aGlzLmNhbnZhc0dyb3Vwcy5zb21lKGZ1bmN0aW9uIChjYW52YXNHcm91cDogQ2FudmFzR3JvdXAsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IGRlbHRhID0gTWF0aC5hYnMocG9pbnQueCAtIGNhbnZhc0dyb3VwLnJlY3QuY2VudGVyWCk7XG4gICAgICBpZiAoZGVsdGEgPj0gbGFzdERlbHRhKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaSA9IGluZGV4O1xuICAgICAgbGFzdERlbHRhID0gZGVsdGE7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGk7XG4gIH1cblxuICBwdWJsaWMgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBzLmxlbmd0aDtcbiAgfVxufVxuIl19