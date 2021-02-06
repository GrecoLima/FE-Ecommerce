import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerListComponent } from './seller-list/seller-list.component';
import { AddSellerComponent } from './add-seller/add-seller.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './user-pages/login/login.component'
import { RegisterComponent } from './user-pages/register/register.component'



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'view-sellers', component: SellerListComponent },
  { path: 'add-seller', component: AddSellerComponent },
  { path: 'view-products', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
