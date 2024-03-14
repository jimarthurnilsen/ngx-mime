import { ViewingDirection } from '../../../models/viewing-direction';
export class BuilderUtils {
    static extractId(value) {
        return value['id'];
    }
    static extracType(value) {
        return value['type'];
    }
    static extractContext(value) {
        return value['@context'];
    }
    static extractViewingDirection(value) {
        if (value['viewingDirection'] === 'right-to-left') {
            return ViewingDirection.RTL;
        }
        else {
            return ViewingDirection.LTR;
        }
    }
    static extractViewingHint(value) {
        if (Array.isArray(value)) {
            return value[0];
        }
        return undefined;
    }
    static findCanvasIndex(canvases, sequences) {
        let index = -1;
        if (canvases[0]) {
            index = sequences[0].canvases.findIndex((canvas) => canvas.id === canvases[0].id);
        }
        return index;
    }
    static extractLogo(provider) {
        let logo;
        if (Array.isArray(provider)) {
            logo = this.extractId(provider[0].logo[0]);
        }
        return logo;
    }
    static extractLanguageValue(data, preferredLanguage) {
        if (!data) {
            return '';
        }
        const key = preferredLanguage && data[preferredLanguage]
            ? preferredLanguage
            : this.extractDefaultLanguage(data);
        return data[key][0];
    }
    static extractDefaultLanguage(data) {
        return Object.keys(data)[0];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci11dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL2J1aWxkZXJzL2lpaWYvdjMvYnVpbGRlci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRSxNQUFNLE9BQU8sWUFBWTtJQUN2QixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVU7UUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBVTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsdUJBQXVCLENBQUMsS0FBVTtRQUN2QyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLGVBQWUsRUFBRSxDQUFDO1lBQ2xELE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQzlCLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBVTtRQUNsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBZSxFQUFFLFNBQWdCO1FBQ3RELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNoQixLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ2pELENBQUM7UUFDSixDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUEyQjtRQUM1QyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLG9CQUFvQixDQUN6QixJQUE4QixFQUM5QixpQkFBMEI7UUFFMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO1FBQ0QsTUFBTSxHQUFHLEdBQ1AsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDO1lBQzFDLENBQUMsQ0FBQyxpQkFBaUI7WUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQThCO1FBQzFELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXMgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvbWFuaWZlc3QnO1xuaW1wb3J0IHsgVmlld2luZ0RpcmVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVscy92aWV3aW5nLWRpcmVjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCdWlsZGVyVXRpbHMge1xuICBzdGF0aWMgZXh0cmFjdElkKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZVsnaWQnXTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWNUeXBlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZVsndHlwZSddO1xuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RDb250ZXh0KHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB2YWx1ZVsnQGNvbnRleHQnXTtcbiAgfVxuXG4gIHN0YXRpYyBleHRyYWN0Vmlld2luZ0RpcmVjdGlvbih2YWx1ZTogYW55KTogVmlld2luZ0RpcmVjdGlvbiB7XG4gICAgaWYgKHZhbHVlWyd2aWV3aW5nRGlyZWN0aW9uJ10gPT09ICdyaWdodC10by1sZWZ0Jykge1xuICAgICAgcmV0dXJuIFZpZXdpbmdEaXJlY3Rpb24uUlRMO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gVmlld2luZ0RpcmVjdGlvbi5MVFI7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGV4dHJhY3RWaWV3aW5nSGludCh2YWx1ZTogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZVswXTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQ2FudmFzSW5kZXgoY2FudmFzZXM6IGFueVtdLCBzZXF1ZW5jZXM6IGFueVtdKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBpZiAoY2FudmFzZXNbMF0pIHtcbiAgICAgIGluZGV4ID0gc2VxdWVuY2VzWzBdLmNhbnZhc2VzLmZpbmRJbmRleChcbiAgICAgICAgKGNhbnZhczogQ2FudmFzKSA9PiBjYW52YXMuaWQgPT09IGNhbnZhc2VzWzBdLmlkXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdExvZ28ocHJvdmlkZXI6IGFueVtdIHwgdW5kZWZpbmVkKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgbG9nbztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm92aWRlcikpIHtcbiAgICAgIGxvZ28gPSB0aGlzLmV4dHJhY3RJZChwcm92aWRlclswXS5sb2dvWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvZ287XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdExhbmd1YWdlVmFsdWUoXG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+LFxuICAgIHByZWZlcnJlZExhbmd1YWdlPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9XG4gICAgICBwcmVmZXJyZWRMYW5ndWFnZSAmJiBkYXRhW3ByZWZlcnJlZExhbmd1YWdlXVxuICAgICAgICA/IHByZWZlcnJlZExhbmd1YWdlXG4gICAgICAgIDogdGhpcy5leHRyYWN0RGVmYXVsdExhbmd1YWdlKGRhdGEpO1xuICAgIHJldHVybiBkYXRhW2tleV1bMF07XG4gIH1cblxuICBzdGF0aWMgZXh0cmFjdERlZmF1bHRMYW5ndWFnZShkYXRhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4pOiBzdHJpbmcge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVswXTtcbiAgfVxufVxuIl19