import { LayoutBuilder } from './layout.builder';
import { StylesBuilder } from './styles.builder';
export class AltoBuilder {
    constructor() {
        this.layoutBuilder = new LayoutBuilder();
    }
    withAltoXml(altoXml) {
        this.altoXml = altoXml;
        return this;
    }
    build() {
        if (this.altoXml.Styles) {
            this.layoutBuilder.withTextStyles(new StylesBuilder(this.altoXml.Styles[0]).build());
        }
        this.layoutBuilder.withLayoutXml(this.altoXml.Layout[0]);
        return {
            layout: this.layoutBuilder.build(),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWx0by5idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9uZ3gtbWltZS9zcmMvbGliL2NvcmUvYnVpbGRlcnMvYWx0by9hbHRvLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxNQUFNLE9BQU8sV0FBVztJQUF4QjtRQUNVLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQW9COUMsQ0FBQztJQWpCQyxXQUFXLENBQUMsT0FBWTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FDL0IsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FDbEQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1NBQ25DLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbHRvIH0gZnJvbSAnLi4vLi4vYWx0by1zZXJ2aWNlL2FsdG8ubW9kZWwnO1xuaW1wb3J0IHsgTGF5b3V0QnVpbGRlciB9IGZyb20gJy4vbGF5b3V0LmJ1aWxkZXInO1xuaW1wb3J0IHsgU3R5bGVzQnVpbGRlciB9IGZyb20gJy4vc3R5bGVzLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgQWx0b0J1aWxkZXIge1xuICBwcml2YXRlIGxheW91dEJ1aWxkZXIgPSBuZXcgTGF5b3V0QnVpbGRlcigpO1xuICBwcml2YXRlIGFsdG9YbWw6IGFueSB8IHVuZGVmaW5lZDtcblxuICB3aXRoQWx0b1htbChhbHRvWG1sOiBhbnkpOiBBbHRvQnVpbGRlciB7XG4gICAgdGhpcy5hbHRvWG1sID0gYWx0b1htbDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGJ1aWxkKCk6IEFsdG8ge1xuICAgIGlmICh0aGlzLmFsdG9YbWwuU3R5bGVzKSB7XG4gICAgICB0aGlzLmxheW91dEJ1aWxkZXIud2l0aFRleHRTdHlsZXMoXG4gICAgICAgIG5ldyBTdHlsZXNCdWlsZGVyKHRoaXMuYWx0b1htbC5TdHlsZXNbMF0pLmJ1aWxkKClcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubGF5b3V0QnVpbGRlci53aXRoTGF5b3V0WG1sKHRoaXMuYWx0b1htbC5MYXlvdXRbMF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXRCdWlsZGVyLmJ1aWxkKCksXG4gICAgfTtcbiAgfVxufVxuIl19