import { Direction } from '../models/direction';
import { ViewingDirection } from '../models/viewing-direction';
export class DashboardModeCalculateNextCanvasGroupStrategy {
    calculateNextCanvasGroup(criteria) {
        const speed = criteria.speed;
        const direction = criteria.direction;
        const currentCanvasGroupIndex = criteria.currentCanvasGroupIndex;
        const currentCanvasGroupCenter = criteria.currentCanvasGroupCenter;
        let nextCanvasGroup;
        let canvasGroupDelta = this.calculateNumberOfCanvasGroupsToGo(speed);
        if (canvasGroupDelta === 0) {
            nextCanvasGroup = currentCanvasGroupCenter;
        }
        else {
            canvasGroupDelta =
                direction === Direction.LEFT ? canvasGroupDelta : canvasGroupDelta * -1;
            nextCanvasGroup =
                criteria.viewingDirection === ViewingDirection.LTR
                    ? currentCanvasGroupIndex + canvasGroupDelta
                    : currentCanvasGroupIndex - canvasGroupDelta;
        }
        return nextCanvasGroup;
    }
    calculateNumberOfCanvasGroupsToGo(speed) {
        let canvasGroupsToGo = 10;
        if (speed !== undefined) {
            if (speed < 500) {
                canvasGroupsToGo = 0;
            }
            else if (speed >= 500 && speed < 1500) {
                canvasGroupsToGo = 1;
            }
            else if (speed >= 1500 && speed < 2500) {
                canvasGroupsToGo = 3;
            }
            else if (speed >= 2500 && speed < 3500) {
                canvasGroupsToGo = 5;
            }
        }
        return canvasGroupsToGo;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLW1vZGUtY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2NvcmUvdmlld2VyLXNlcnZpY2UvZGFzaGJvYXJkLW1vZGUtY2FsY3VsYXRlLW5leHQtY2FudmFzLWdyb3VwLXN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU0vRCxNQUFNLE9BQU8sNkNBQTZDO0lBRXhELHdCQUF3QixDQUFDLFFBQWlDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxNQUFNLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztRQUNqRSxNQUFNLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztRQUVuRSxJQUFJLGVBQXVCLENBQUM7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsSUFBSSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7WUFDMUIsZUFBZSxHQUFHLHdCQUF3QixDQUFDO1NBQzVDO2FBQU07WUFDTCxnQkFBZ0I7Z0JBQ2QsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRSxlQUFlO2dCQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsQ0FBQyxHQUFHO29CQUNoRCxDQUFDLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCO29CQUM1QyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUM7U0FDbEQ7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRU8saUNBQWlDLENBQUMsS0FBeUI7UUFDakUsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDZixnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDdEI7aUJBQU0sSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUU7Z0JBQ3ZDLGdCQUFnQixHQUFHLENBQUMsQ0FBQzthQUN0QjtpQkFBTSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtnQkFDeEMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFO2dCQUN4QyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FDRjtRQUNELE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2RpcmVjdGlvbic7XG5pbXBvcnQgeyBWaWV3aW5nRGlyZWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3ZpZXdpbmctZGlyZWN0aW9uJztcbmltcG9ydCB7XG4gIENhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5LFxuICBOZXh0Q2FudmFzR3JvdXBDcml0ZXJpYSxcbn0gZnJvbSAnLi9jYWxjdWxhdGUtbmV4dC1jYW52YXMtZ3JvdXAtc3RyYXRlZ3knO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kZUNhbGN1bGF0ZU5leHRDYW52YXNHcm91cFN0cmF0ZWd5XG4gIGltcGxlbWVudHMgQ2FsY3VsYXRlTmV4dENhbnZhc0dyb3VwU3RyYXRlZ3kge1xuICBjYWxjdWxhdGVOZXh0Q2FudmFzR3JvdXAoY3JpdGVyaWE6IE5leHRDYW52YXNHcm91cENyaXRlcmlhKTogbnVtYmVyIHtcbiAgICBjb25zdCBzcGVlZCA9IGNyaXRlcmlhLnNwZWVkO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGNyaXRlcmlhLmRpcmVjdGlvbjtcbiAgICBjb25zdCBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCA9IGNyaXRlcmlhLmN1cnJlbnRDYW52YXNHcm91cEluZGV4O1xuICAgIGNvbnN0IGN1cnJlbnRDYW52YXNHcm91cENlbnRlciA9IGNyaXRlcmlhLmN1cnJlbnRDYW52YXNHcm91cENlbnRlcjtcblxuICAgIGxldCBuZXh0Q2FudmFzR3JvdXA6IG51bWJlcjtcbiAgICBsZXQgY2FudmFzR3JvdXBEZWx0YSA9IHRoaXMuY2FsY3VsYXRlTnVtYmVyT2ZDYW52YXNHcm91cHNUb0dvKHNwZWVkKTtcbiAgICBpZiAoY2FudmFzR3JvdXBEZWx0YSA9PT0gMCkge1xuICAgICAgbmV4dENhbnZhc0dyb3VwID0gY3VycmVudENhbnZhc0dyb3VwQ2VudGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW52YXNHcm91cERlbHRhID1cbiAgICAgICAgZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVCA/IGNhbnZhc0dyb3VwRGVsdGEgOiBjYW52YXNHcm91cERlbHRhICogLTE7XG4gICAgICBuZXh0Q2FudmFzR3JvdXAgPVxuICAgICAgICBjcml0ZXJpYS52aWV3aW5nRGlyZWN0aW9uID09PSBWaWV3aW5nRGlyZWN0aW9uLkxUUlxuICAgICAgICAgID8gY3VycmVudENhbnZhc0dyb3VwSW5kZXggKyBjYW52YXNHcm91cERlbHRhXG4gICAgICAgICAgOiBjdXJyZW50Q2FudmFzR3JvdXBJbmRleCAtIGNhbnZhc0dyb3VwRGVsdGE7XG4gICAgfVxuICAgIHJldHVybiBuZXh0Q2FudmFzR3JvdXA7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU51bWJlck9mQ2FudmFzR3JvdXBzVG9HbyhzcGVlZDogbnVtYmVyIHwgdW5kZWZpbmVkKTogbnVtYmVyIHtcbiAgICBsZXQgY2FudmFzR3JvdXBzVG9HbyA9IDEwO1xuICAgIGlmIChzcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoc3BlZWQgPCA1MDApIHtcbiAgICAgICAgY2FudmFzR3JvdXBzVG9HbyA9IDA7XG4gICAgICB9IGVsc2UgaWYgKHNwZWVkID49IDUwMCAmJiBzcGVlZCA8IDE1MDApIHtcbiAgICAgICAgY2FudmFzR3JvdXBzVG9HbyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHNwZWVkID49IDE1MDAgJiYgc3BlZWQgPCAyNTAwKSB7XG4gICAgICAgIGNhbnZhc0dyb3Vwc1RvR28gPSAzO1xuICAgICAgfSBlbHNlIGlmIChzcGVlZCA+PSAyNTAwICYmIHNwZWVkIDwgMzUwMCkge1xuICAgICAgICBjYW52YXNHcm91cHNUb0dvID0gNTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbnZhc0dyb3Vwc1RvR287XG4gIH1cbn1cbiJdfQ==