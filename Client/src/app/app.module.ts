import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material/material.module';
import { SaveFormComponent } from './save-form/save-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveFormComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
