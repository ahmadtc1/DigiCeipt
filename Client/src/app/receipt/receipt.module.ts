import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReceiptViewComponent } from './receipt-view/receipt-view.component';
import { SaveFormComponent } from './save-form/save-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ReceiptViewComponent }
        ])
    ],
    exports: [

    ],
    declarations: [
        ReceiptViewComponent,
        SaveFormComponent
    ]
})

export class ProductModule { }