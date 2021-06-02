import { Hit } from './hit';
export class SearchResult {
    constructor(fields) {
        this.q = '';
        this.hits = [];
        if (fields) {
            this.q = fields.q || this.q;
            this.hits = fields.hits || this.hits;
        }
    }
    add(hit) {
        this.hits.push(hit);
    }
    get(index) {
        return new Hit(Object.assign({}, this.hits[index]));
    }
    size() {
        return this.hits.length;
    }
    last() {
        return this.get(this.size() - 1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL21vZGVscy9zZWFyY2gtcmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUIsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBWSxNQUFxQztRQUgxQyxNQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1AsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUd0QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFRO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxHQUFHLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksR0FBRyxtQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUVNLElBQUk7UUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzFCLENBQUM7SUFFTSxJQUFJO1FBQ1QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIaXQgfSBmcm9tICcuL2hpdCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHQge1xuICBwdWJsaWMgcSA9ICcnO1xuICBwdWJsaWMgaGl0czogSGl0W10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihmaWVsZHM/OiB7IHE/OiBzdHJpbmc7IGhpdHM/OiBIaXRbXSB9KSB7XG4gICAgaWYgKGZpZWxkcykge1xuICAgICAgdGhpcy5xID0gZmllbGRzLnEgfHwgdGhpcy5xO1xuICAgICAgdGhpcy5oaXRzID0gZmllbGRzLmhpdHMgfHwgdGhpcy5oaXRzO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGQoaGl0OiBIaXQpOiB2b2lkIHtcbiAgICB0aGlzLmhpdHMucHVzaChoaXQpO1xuICB9XG5cbiAgcHVibGljIGdldChpbmRleDogbnVtYmVyKTogSGl0IHtcbiAgICByZXR1cm4gbmV3IEhpdCh7XG4gICAgICAuLi50aGlzLmhpdHNbaW5kZXhdXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmhpdHMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGxhc3QoKTogSGl0IHtcbiAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5zaXplKCkgLSAxKTtcbiAgfVxufVxuIl19