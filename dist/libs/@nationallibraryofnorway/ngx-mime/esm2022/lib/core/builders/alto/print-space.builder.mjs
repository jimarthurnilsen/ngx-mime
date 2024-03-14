import { TextBlocksBuilder } from './text-blocks.builder';
export class PrintSpaceBuilder {
    withPrintSpaceXml(printSpaceXml) {
        this.printSpaceXml = printSpaceXml;
        return this;
    }
    withTextStyles(textStyles) {
        this.textStyles = textStyles;
        return this;
    }
    build() {
        let textBlocks = [];
        if (this.printSpaceXml?.$$) {
            textBlocks = this.extractTextBlocks(this.printSpaceXml.$$);
        }
        return {
            textBlocks: new TextBlocksBuilder()
                .withTextBlocksXml(textBlocks)
                .withTextStyles(this.textStyles)
                .build(),
        };
    }
    extractTextBlocks(node) {
        let blocks = [];
        node.forEach((n) => {
            if (this.isTextBlock(n)) {
                blocks = [...blocks, n];
            }
            else if (this.isComposedBlock(n)) {
                if (n.$$) {
                    blocks = [...blocks, ...this.extractTextBlocks(n.$$)];
                }
            }
        });
        return blocks;
    }
    isTextBlock(n) {
        return n['#name'] && n['#name'] === 'TextBlock';
    }
    isComposedBlock(n) {
        return n['#name'] && n['#name'] === 'ComposedBlock';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQtc3BhY2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jb3JlL2J1aWxkZXJzL2FsdG8vcHJpbnQtc3BhY2UuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxNQUFNLE9BQU8saUJBQWlCO0lBSTVCLGlCQUFpQixDQUFDLGFBQWtCO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGNBQWMsQ0FDWixVQUE4QztRQUU5QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxVQUFVLEdBQVUsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUNELE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtpQkFDaEMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO2lCQUM3QixjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDL0IsS0FBSyxFQUFFO1NBQ1gsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxJQUFTO1FBQ2pDLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFCLENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNULE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxDQUFNO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLENBQUM7SUFDbEQsQ0FBQztJQUVPLGVBQWUsQ0FBQyxDQUFNO1FBQzVCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxlQUFlLENBQUM7SUFDdEQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpbnRTcGFjZSwgVGV4dFN0eWxlIH0gZnJvbSAnLi4vLi4vYWx0by1zZXJ2aWNlL2FsdG8ubW9kZWwnO1xuaW1wb3J0IHsgVGV4dEJsb2Nrc0J1aWxkZXIgfSBmcm9tICcuL3RleHQtYmxvY2tzLmJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgUHJpbnRTcGFjZUJ1aWxkZXIge1xuICBwcml2YXRlIHRleHRTdHlsZXM6IE1hcDxzdHJpbmcsIFRleHRTdHlsZT4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcHJpbnRTcGFjZVhtbDogYW55IHwgdW5kZWZpbmVkO1xuXG4gIHdpdGhQcmludFNwYWNlWG1sKHByaW50U3BhY2VYbWw6IGFueSkge1xuICAgIHRoaXMucHJpbnRTcGFjZVhtbCA9IHByaW50U3BhY2VYbWw7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aXRoVGV4dFN0eWxlcyhcbiAgICB0ZXh0U3R5bGVzOiBNYXA8c3RyaW5nLCBUZXh0U3R5bGU+IHwgdW5kZWZpbmVkXG4gICk6IFByaW50U3BhY2VCdWlsZGVyIHtcbiAgICB0aGlzLnRleHRTdHlsZXMgPSB0ZXh0U3R5bGVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnVpbGQoKTogUHJpbnRTcGFjZSB7XG4gICAgbGV0IHRleHRCbG9ja3M6IGFueVtdID0gW107XG5cbiAgICBpZiAodGhpcy5wcmludFNwYWNlWG1sPy4kJCkge1xuICAgICAgdGV4dEJsb2NrcyA9IHRoaXMuZXh0cmFjdFRleHRCbG9ja3ModGhpcy5wcmludFNwYWNlWG1sLiQkKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHRCbG9ja3M6IG5ldyBUZXh0QmxvY2tzQnVpbGRlcigpXG4gICAgICAgIC53aXRoVGV4dEJsb2Nrc1htbCh0ZXh0QmxvY2tzKVxuICAgICAgICAud2l0aFRleHRTdHlsZXModGhpcy50ZXh0U3R5bGVzKVxuICAgICAgICAuYnVpbGQoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBleHRyYWN0VGV4dEJsb2Nrcyhub2RlOiBhbnkpOiBhbnlbXSB7XG4gICAgbGV0IGJsb2NrczogYW55W10gPSBbXTtcbiAgICBub2RlLmZvckVhY2goKG46IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNUZXh0QmxvY2sobikpIHtcbiAgICAgICAgYmxvY2tzID0gWy4uLmJsb2Nrcywgbl07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDb21wb3NlZEJsb2NrKG4pKSB7XG4gICAgICAgIGlmIChuLiQkKSB7XG4gICAgICAgICAgYmxvY2tzID0gWy4uLmJsb2NrcywgLi4udGhpcy5leHRyYWN0VGV4dEJsb2NrcyhuLiQkKV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYmxvY2tzO1xuICB9XG5cbiAgcHJpdmF0ZSBpc1RleHRCbG9jayhuOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gblsnI25hbWUnXSAmJiBuWycjbmFtZSddID09PSAnVGV4dEJsb2NrJztcbiAgfVxuXG4gIHByaXZhdGUgaXNDb21wb3NlZEJsb2NrKG46IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBuWycjbmFtZSddICYmIG5bJyNuYW1lJ10gPT09ICdDb21wb3NlZEJsb2NrJztcbiAgfVxufVxuIl19