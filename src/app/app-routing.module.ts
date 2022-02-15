import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddedSuccessfullyComponent } from './added-successfully/added-successfully.component';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomedemoComponent } from './homedemo/homedemo.component';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { LoginComponent } from './login/login.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RatingAddedSuccessfullyComponent } from './rating-added-successfully/rating-added-successfully.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path:'homefirst', component:HomeComponent},
  { path:'products', component:ProductlistComponent,canActivate:[AuthGuardService]},
  { path:'productDetail/:id', component:ProductdetailComponent,canActivate:[AuthGuardService]},
  { path:'add/cart/:id', component:AddToCartComponent,canActivate:[AuthGuardService]},
 // {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
 // {path:'product',component:ProductComponent,canActivate:[AuthGuardService]},
  {path:'InvalidCredentials',component:InvalidCredentialsComponent},
  {path:'addedsuccessfully/:cartid/:productid',component:AddedSuccessfullyComponent,canActivate:[AuthGuardService]},
  {path:'addrating/:productid',component:AddRatingComponent,canActivate:[AuthGuardService]},
  {path:'ratingadded',component:RatingAddedSuccessfullyComponent,canActivate:[AuthGuardService]},
  {path:'addtowishlist/:id',component:WishlistComponent,canActivate:[AuthGuardService]},
  {path:'',component:HomedemoComponent},
  {path:'test',component:FirstComponent}
];

@NgModule({
  declarations:[],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
