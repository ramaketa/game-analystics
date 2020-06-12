import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbCardModule,
  NbAutocompleteModule,
  NbSelectModule, NbInputModule, NbToastrService, NbToastrModule, NbToggleModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Dota2Component } from './components/dota2/dota2.component';
import { CsGoComponent } from './components/cs-go/cs-go.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'dota2', component: Dota2Component },
  { path: 'cs-go', component: CsGoComponent },
  { path: '**', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Dota2Component,
    CsGoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    RouterModule.forRoot(appRoutes),
    NbCardModule,
    NbAutocompleteModule,
    NgbTypeaheadModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbToastrModule.forRoot(),
    NbToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
