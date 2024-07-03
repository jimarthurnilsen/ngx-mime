import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { FormBuilder, FormControl, Validators, } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CanvasService } from '../core/canvas-service/canvas-service';
import { MimeViewerIntl } from '../core/intl';
import { ViewerService } from '../core/viewer-service/viewer.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "../core/viewer-service/viewer.service";
import * as i4 from "../core/canvas-service/canvas-service";
import * as i5 from "../core/intl";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/form-field";
export class CanvasGroupDialogComponent {
    constructor(dialogRef, fb, viewerService, canvasService, intl, changeDetectorRef) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.viewerService = viewerService;
        this.canvasService = canvasService;
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.subscriptions = new Subscription();
        this.numberOfCanvases = this.canvasService.numberOfCanvases;
        this.canvasGroupForm = this.fb.group({
            canvasGroupControl: new FormControl(null, [
                Validators.required,
                Validators.min(1),
                Validators.max(this.numberOfCanvases),
            ]),
        });
    }
    get canvasGroupControl() {
        return this.canvasGroupForm.get('canvasGroupControl');
    }
    ngOnInit() {
        this.subscriptions.add(this.intl.changes.subscribe(() => this.changeDetectorRef.markForCheck()));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onSubmit() {
        if (this.canvasGroupForm.valid) {
            const pageNumber = this.canvasGroupControl?.value;
            if (pageNumber !== null && pageNumber !== undefined)
                this.viewerService.goToCanvasGroup(this.canvasService.findCanvasGroupByCanvasIndex(pageNumber - 1), false);
            this.dialogRef.close();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CanvasGroupDialogComponent, deps: [{ token: i1.MatDialogRef }, { token: i2.FormBuilder }, { token: i3.ViewerService }, { token: i4.CanvasService }, { token: i5.MimeViewerIntl }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: CanvasGroupDialogComponent, selector: "ng-component", ngImport: i0, template: "<h1 class=\"canvas-group-dialog-title\" mat-dialog-title>{{\n  intl.goToPageLabel\n}}</h1>\n<form\n  [formGroup]=\"canvasGroupForm\"\n  (ngSubmit)=\"onSubmit()\"\n  novalidate\n  autocomplete=\"off\"\n>\n  <div mat-dialog-content>\n    <mat-form-field [floatLabel]=\"'always'\">\n      <mat-label>{{ intl.enterPageNumber }}</mat-label>\n      <input\n        class=\"go-to-canvas-group-input\"\n        type=\"number\"\n        matInput\n        min=\"1\"\n        formControlName=\"canvasGroupControl\"\n      />\n      @if (canvasGroupControl?.errors?.['max']) {\n        <mat-error>{{ intl.pageDoesNotExists }}</mat-error>\n      }\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions [align]=\"'end'\">\n    <button type=\"button\" mat-button matDialogClose>CANCEL</button>\n    <button\n      type=\"submit\"\n      mat-button\n      [disabled]=\"canvasGroupForm.pristine || canvasGroupForm.invalid\"\n      >OK</button\n    >\n  </div>\n</form>\n", styles: [".canvas-group-dialog-title{margin:0 0 20px;display:block}\n"], dependencies: [{ kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i6.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "directive", type: i7.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i8.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i8.MatLabel, selector: "mat-label" }, { kind: "directive", type: i8.MatError, selector: "mat-error, [matError]", inputs: ["id"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CanvasGroupDialogComponent, decorators: [{
            type: Component,
            args: [{ changeDetection: ChangeDetectionStrategy.OnPush, template: "<h1 class=\"canvas-group-dialog-title\" mat-dialog-title>{{\n  intl.goToPageLabel\n}}</h1>\n<form\n  [formGroup]=\"canvasGroupForm\"\n  (ngSubmit)=\"onSubmit()\"\n  novalidate\n  autocomplete=\"off\"\n>\n  <div mat-dialog-content>\n    <mat-form-field [floatLabel]=\"'always'\">\n      <mat-label>{{ intl.enterPageNumber }}</mat-label>\n      <input\n        class=\"go-to-canvas-group-input\"\n        type=\"number\"\n        matInput\n        min=\"1\"\n        formControlName=\"canvasGroupControl\"\n      />\n      @if (canvasGroupControl?.errors?.['max']) {\n        <mat-error>{{ intl.pageDoesNotExists }}</mat-error>\n      }\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions [align]=\"'end'\">\n    <button type=\"button\" mat-button matDialogClose>CANCEL</button>\n    <button\n      type=\"submit\"\n      mat-button\n      [disabled]=\"canvasGroupForm.pristine || canvasGroupForm.invalid\"\n      >OK</button\n    >\n  </div>\n</form>\n", styles: [".canvas-group-dialog-title{margin:0 0 20px;display:block}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: i2.FormBuilder }, { type: i3.ViewerService }, { type: i4.CanvasService }, { type: i5.MimeViewerIntl }, { type: i0.ChangeDetectorRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyb3VwLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL25neC1taW1lL3NyYy9saWIvY2FudmFzLWdyb3VwLWRpYWxvZy9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbmd4LW1pbWUvc3JjL2xpYi9jYW52YXMtZ3JvdXAtZGlhbG9nL2NhbnZhcy1ncm91cC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxXQUFXLEVBQ1gsV0FBVyxFQUVYLFVBQVUsR0FDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7Ozs7OztBQU90RSxNQUFNLE9BQU8sMEJBQTBCO0lBT3JDLFlBQ1UsU0FBbUQsRUFDbkQsRUFBZSxFQUNmLGFBQTRCLEVBQzVCLGFBQTRCLEVBQzdCLElBQW9CLEVBQ25CLGlCQUFvQztRQUxwQyxjQUFTLEdBQVQsU0FBUyxDQUEwQztRQUNuRCxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2Ysa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFDbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVJ0QyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFVekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDNUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuQyxrQkFBa0IsRUFBRSxJQUFJLFdBQVcsQ0FBZ0IsSUFBSSxFQUFFO2dCQUN2RCxVQUFVLENBQUMsUUFBUTtnQkFDbkIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQ3RDLENBQUM7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FDekUsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDO1lBQ2xELElBQUksVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLEtBQUssU0FBUztnQkFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUMvRCxLQUFLLENBQ04sQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7OEdBakRVLDBCQUEwQjtrR0FBMUIsMEJBQTBCLG9EQ3hCdkMsaThCQWtDQTs7MkZEVmEsMEJBQTBCO2tCQUx0QyxTQUFTO3NDQUdTLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL2NhbnZhcy1zZXJ2aWNlL2NhbnZhcy1zZXJ2aWNlJztcbmltcG9ydCB7IE1pbWVWaWV3ZXJJbnRsIH0gZnJvbSAnLi4vY29yZS9pbnRsJztcbmltcG9ydCB7IFZpZXdlclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3ZpZXdlci1zZXJ2aWNlL3ZpZXdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnLi9jYW52YXMtZ3JvdXAtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLWdyb3VwLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FudmFzR3JvdXBEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG51bWJlck9mQ2FudmFzZXM6IG51bWJlcjtcbiAgY2FudmFzR3JvdXBGb3JtOiBGb3JtR3JvdXA8e1xuICAgIGNhbnZhc0dyb3VwQ29udHJvbDogRm9ybUNvbnRyb2w8bnVtYmVyIHwgbnVsbD47XG4gIH0+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDYW52YXNHcm91cERpYWxvZ0NvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSB2aWV3ZXJTZXJ2aWNlOiBWaWV3ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcbiAgICBwdWJsaWMgaW50bDogTWltZVZpZXdlckludGwsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgdGhpcy5udW1iZXJPZkNhbnZhc2VzID0gdGhpcy5jYW52YXNTZXJ2aWNlLm51bWJlck9mQ2FudmFzZXM7XG4gICAgdGhpcy5jYW52YXNHcm91cEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGNhbnZhc0dyb3VwQ29udHJvbDogbmV3IEZvcm1Db250cm9sPG51bWJlciB8IG51bGw+KG51bGwsIFtcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgVmFsaWRhdG9ycy5taW4oMSksXG4gICAgICAgIFZhbGlkYXRvcnMubWF4KHRoaXMubnVtYmVyT2ZDYW52YXNlcyksXG4gICAgICBdKSxcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjYW52YXNHcm91cENvbnRyb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzR3JvdXBGb3JtLmdldCgnY2FudmFzR3JvdXBDb250cm9sJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5pbnRsLmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FudmFzR3JvdXBGb3JtLnZhbGlkKSB7XG4gICAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5jYW52YXNHcm91cENvbnRyb2w/LnZhbHVlO1xuICAgICAgaWYgKHBhZ2VOdW1iZXIgIT09IG51bGwgJiYgcGFnZU51bWJlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnZpZXdlclNlcnZpY2UuZ29Ub0NhbnZhc0dyb3VwKFxuICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5maW5kQ2FudmFzR3JvdXBCeUNhbnZhc0luZGV4KHBhZ2VOdW1iZXIgLSAxKSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxoMSBjbGFzcz1cImNhbnZhcy1ncm91cC1kaWFsb2ctdGl0bGVcIiBtYXQtZGlhbG9nLXRpdGxlPnt7XG4gIGludGwuZ29Ub1BhZ2VMYWJlbFxufX08L2gxPlxuPGZvcm1cbiAgW2Zvcm1Hcm91cF09XCJjYW52YXNHcm91cEZvcm1cIlxuICAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiXG4gIG5vdmFsaWRhdGVcbiAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbj5cbiAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIFtmbG9hdExhYmVsXT1cIidhbHdheXMnXCI+XG4gICAgICA8bWF0LWxhYmVsPnt7IGludGwuZW50ZXJQYWdlTnVtYmVyIH19PC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJnby10by1jYW52YXMtZ3JvdXAtaW5wdXRcIlxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgbWluPVwiMVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNhbnZhc0dyb3VwQ29udHJvbFwiXG4gICAgICAvPlxuICAgICAgQGlmIChjYW52YXNHcm91cENvbnRyb2w/LmVycm9ycz8uWydtYXgnXSkge1xuICAgICAgICA8bWF0LWVycm9yPnt7IGludGwucGFnZURvZXNOb3RFeGlzdHMgfX08L21hdC1lcnJvcj5cbiAgICAgIH1cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Rpdj5cbiAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgW2FsaWduXT1cIidlbmQnXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiBtYXREaWFsb2dDbG9zZT5DQU5DRUw8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgIG1hdC1idXR0b25cbiAgICAgIFtkaXNhYmxlZF09XCJjYW52YXNHcm91cEZvcm0ucHJpc3RpbmUgfHwgY2FudmFzR3JvdXBGb3JtLmludmFsaWRcIlxuICAgICAgPk9LPC9idXR0b25cbiAgICA+XG4gIDwvZGl2PlxuPC9mb3JtPlxuIl19