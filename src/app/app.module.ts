import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppAccueilComponent } from './app-accueil/app-accueil.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbSearchModule,
  NbTabsetModule, NbRouteTabsetModule, NbCardModule, NbListModule
} from "@nebular/theme";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    AppAccueilComponent,
    ListProductComponent,
    DetailProductComponent,
    DetailUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbSearchModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
