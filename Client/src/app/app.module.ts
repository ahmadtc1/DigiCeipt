import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material/material.module';
import { SaveFormComponent } from './save-form/save-form.component';
import { RouterModule } from '@angular/router';
import { ReceiptViewComponent } from './receipt-view/receipt-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveFormComponent,
    ReceiptViewComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: 'welcome', component: AppComponent },
      { path: 'upload', component: ReceiptViewComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
