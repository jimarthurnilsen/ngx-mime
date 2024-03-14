import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class IconComponent {
    constructor() {
        this.iconName = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: IconComponent, selector: "mime-icon", inputs: { iconName: "iconName" }, ngImport: i0, template: "<div class=\"mat-icon\">\n  <ng-container *ngIf=\"iconName === 'single_page_display'\">\n    <div class=\"single-page-display\">\n      <svg\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        viewBox=\"0 0 90 90\"\n        preserveAspectRatio=\"xMidYMin slice\"\n      >\n        <style type=\"text/css\">\n          .st0 {\n            clip-path: url(#SVGID_2_);\n          }\n        </style>\n        <g>\n          <defs><rect width=\"100%\" height=\"100%\" /></defs>\n          <clipPath>\n            <use xlink:href=\"#SVGID_1_\" style=\"overflow: visible\" />\n          </clipPath>\n          <path\n            class=\"st0\"\n            d=\"M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M26.1,31.8H4V4.1h13.6v8.4h8.5V31.8z M30,31.6\n          V11.4L18.7,0H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6\"\n          />\n        </g>\n      </svg>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"iconName === 'two_page_display'\">\n    <svg\n      version=\"1.1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      viewBox=\"0 0 90 90\"\n      preserveAspectRatio=\"xMidYMin slice\"\n    >\n      <style type=\"text/css\">\n        .st0 {\n          clip-path: url(#SVGID_2_);\n        }\n      </style>\n      <g>\n        <defs><rect width=\"100%\" height=\"100%\" /></defs>\n        <clipPath>\n          <use xlink:href=\"#SVGID_3_\" style=\"overflow: visible\" />\n        </clipPath>\n        <path\n          class=\"st0\"\n          d=\"M52.5,25.2H39.1v2.7h13.4V25.2z M52.5,18.1H39.1v2.7h13.4V18.1z M56.8,31.8H34.7V4.1h13.6v8.4h8.5V31.8z\n        M60.8,31.6V11.4L49.4,0H35c0,0-4.3,0-4.3,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C56.6,35.9,60.8,35.9,60.8,31.6\"\n        />\n        <path\n          class=\"st0\"\n          d=\"M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M21.7,11.1H8.3v2.7h13.4V11.1z M26.1,31.8H4V4.1\n       h22.1V31.8z M30,31.6V4.3c0,0,0-4.3-4.3-4.3H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6\"\n        />\n      </g>\n    </svg>\n  </ng-container>\n</div>\n", styles: [".mat-icon{vertical-align:middle}.single-page-display{margin-left:5px}svg{height:40px;width:40px}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mime-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"mat-icon\">\n  <ng-container *ngIf=\"iconName === 'single_page_display'\">\n    <div class=\"single-page-display\">\n      <svg\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        viewBox=\"0 0 90 90\"\n        preserveAspectRatio=\"xMidYMin slice\"\n      >\n        <style type=\"text/css\">\n          .st0 {\n            clip-path: url(#SVGID_2_);\n          }\n        </style>\n        <g>\n          <defs><rect width=\"100%\" height=\"100%\" /></defs>\n          <clipPath>\n            <use xlink:href=\"#SVGID_1_\" style=\"overflow: visible\" />\n          </clipPath>\n          <path\n            class=\"st0\"\n            d=\"M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M26.1,31.8H4V4.1h13.6v8.4h8.5V31.8z M30,31.6\n          V11.4L18.7,0H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6\"\n          />\n        </g>\n      </svg>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"iconName === 'two_page_display'\">\n    <svg\n      version=\"1.1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n      viewBox=\"0 0 90 90\"\n      preserveAspectRatio=\"xMidYMin slice\"\n    >\n      <style type=\"text/css\">\n        .st0 {\n          clip-path: url(#SVGID_2_);\n        }\n      </style>\n      <g>\n        <defs><rect width=\"100%\" height=\"100%\" /></defs>\n        <clipPath>\n          <use xlink:href=\"#SVGID_3_\" style=\"overflow: visible\" />\n        </clipPath>\n        <path\n          class=\"st0\"\n          d=\"M52.5,25.2H39.1v2.7h13.4V25.2z M52.5,18.1H39.1v2.7h13.4V18.1z M56.8,31.8H34.7V4.1h13.6v8.4h8.5V31.8z\n        M60.8,31.6V11.4L49.4,0H35c0,0-4.3,0-4.3,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C56.6,35.9,60.8,35.9,60.8,31.6\"\n        />\n        <path\n          class=\"st0\"\n          d=\"M21.7,25.2H8.3v2.7h13.4V25.2z M21.7,18.1H8.3v2.7h13.4V18.1z M21.7,11.1H8.3v2.7h13.4V11.1z M26.1,31.8H4V4.1\n       h22.1V31.8z M30,31.6V4.3c0,0,0-4.3-4.3-4.3H4.3C4.3,0,0,0,0,4.3v27.4c0,0,0,4.3,4.3,4.3h21.5C25.8,35.9,30,35.9,30,31.6\"\n        />\n      </g>\n    </svg>\n  </ng-container>\n</div>\n", styles: [".mat-icon{vertical-align:middle}.single-page-display{margin-left:5px}svg{height:40px;width:40px}\n"] }]
        }], propDecorators: { iconName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvdmlldy1kaWFsb2cvaWNvbi9pY29uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi92aWV3LWRpYWxvZy9pY29uL2ljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVExRSxNQUFNLE9BQU8sYUFBYTtJQU4xQjtRQU9XLGFBQVEsR0FBRyxFQUFFLENBQUM7S0FDeEI7OEdBRlksYUFBYTtrR0FBYixhQUFhLG1GQ1IxQiw0cUVBNkRBOzsyRkRyRGEsYUFBYTtrQkFOekIsU0FBUzsrQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU07OEJBR3RDLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtaW1lLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICBASW5wdXQoKSBpY29uTmFtZSA9ICcnO1xufVxuIiwiPGRpdiBjbGFzcz1cIm1hdC1pY29uXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJpY29uTmFtZSA9PT0gJ3NpbmdsZV9wYWdlX2Rpc3BsYXknXCI+XG4gICAgPGRpdiBjbGFzcz1cInNpbmdsZS1wYWdlLWRpc3BsYXlcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDkwIDkwXCJcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWluIHNsaWNlXCJcbiAgICAgID5cbiAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuICAgICAgICAgIC5zdDAge1xuICAgICAgICAgICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzJfKTtcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxnPlxuICAgICAgICAgIDxkZWZzPjxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiAvPjwvZGVmcz5cbiAgICAgICAgICA8Y2xpcFBhdGg+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjU1ZHSURfMV9cIiBzdHlsZT1cIm92ZXJmbG93OiB2aXNpYmxlXCIgLz5cbiAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cInN0MFwiXG4gICAgICAgICAgICBkPVwiTTIxLjcsMjUuMkg4LjN2Mi43aDEzLjRWMjUuMnogTTIxLjcsMTguMUg4LjN2Mi43aDEzLjRWMTguMXogTTI2LjEsMzEuOEg0VjQuMWgxMy42djguNGg4LjVWMzEuOHogTTMwLDMxLjZcbiAgICAgICAgICBWMTEuNEwxOC43LDBINC4zQzQuMywwLDAsMCwwLDQuM3YyNy40YzAsMCwwLDQuMyw0LjMsNC4zaDIxLjVDMjUuOCwzNS45LDMwLDM1LjksMzAsMzEuNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaWNvbk5hbWUgPT09ICd0d29fcGFnZV9kaXNwbGF5J1wiPlxuICAgIDxzdmdcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgdmlld0JveD1cIjAgMCA5MCA5MFwiXG4gICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaW4gc2xpY2VcIlxuICAgID5cbiAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbiAgICAgICAgLnN0MCB7XG4gICAgICAgICAgY2xpcC1wYXRoOiB1cmwoI1NWR0lEXzJfKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxnPlxuICAgICAgICA8ZGVmcz48cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgLz48L2RlZnM+XG4gICAgICAgIDxjbGlwUGF0aD5cbiAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjU1ZHSURfM19cIiBzdHlsZT1cIm92ZXJmbG93OiB2aXNpYmxlXCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBjbGFzcz1cInN0MFwiXG4gICAgICAgICAgZD1cIk01Mi41LDI1LjJIMzkuMXYyLjdoMTMuNFYyNS4yeiBNNTIuNSwxOC4xSDM5LjF2Mi43aDEzLjRWMTguMXogTTU2LjgsMzEuOEgzNC43VjQuMWgxMy42djguNGg4LjVWMzEuOHpcbiAgICAgICAgTTYwLjgsMzEuNlYxMS40TDQ5LjQsMEgzNWMwLDAtNC4zLDAtNC4zLDQuM3YyNy40YzAsMCwwLDQuMyw0LjMsNC4zaDIxLjVDNTYuNiwzNS45LDYwLjgsMzUuOSw2MC44LDMxLjZcIlxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGNsYXNzPVwic3QwXCJcbiAgICAgICAgICBkPVwiTTIxLjcsMjUuMkg4LjN2Mi43aDEzLjRWMjUuMnogTTIxLjcsMTguMUg4LjN2Mi43aDEzLjRWMTguMXogTTIxLjcsMTEuMUg4LjN2Mi43aDEzLjRWMTEuMXogTTI2LjEsMzEuOEg0VjQuMVxuICAgICAgIGgyMi4xVjMxLjh6IE0zMCwzMS42VjQuM2MwLDAsMC00LjMtNC4zLTQuM0g0LjNDNC4zLDAsMCwwLDAsNC4zdjI3LjRjMCwwLDAsNC4zLDQuMyw0LjNoMjEuNUMyNS44LDM1LjksMzAsMzUuOSwzMCwzMS42XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==