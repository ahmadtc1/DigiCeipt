import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material/material.module';
import { SaveFormComponent } from './receipt/save-form/save-form.component';
import { ReceiptViewComponent } from './receipt/receipt-view/receipt-view.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    SaveFormComponent,
    ReceiptViewComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'receipts', component: ReceiptViewComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: "**", redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SaveFormComponent
  ]
})
export class AppModule { }