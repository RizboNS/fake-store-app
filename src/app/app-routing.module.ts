import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HomeComponent } from './components/home/home.component';
import { MensProductsComponent } from './components/mens-products/mens-products.component';
import { WomansProductsComponent } from './components/womans-products/womans-products.component';

const routes: Routes = [
  { path: 'womens-clothing', component: WomansProductsComponent },
  { path: 'mens-clothing', component: MensProductsComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
