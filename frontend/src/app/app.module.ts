import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AnalysisEditorComponent } from './analysis-editor/analysis-editor.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AnalysisEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
