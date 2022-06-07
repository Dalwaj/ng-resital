import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppAccueilComponent} from "./app-accueil/app-accueil.component";
import {ListProductComponent} from "./product/list-product/list-product.component";
import {DetailProductComponent} from "./product/detail-product/detail-product.component";

const routes: Routes = [
  {path: 'resital', component: AppAccueilComponent},
  {path: 'resital/products', component: ListProductComponent},
  {path: 'resital/products/:id', component: DetailProductComponent},
  {path: 'resital/home', redirectTo: 'resital', pathMatch: 'full'},
  {path: '', redirectTo: 'resital', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true,
      relativeLinkResolution: 'corrected', // Fix Router BUG
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
