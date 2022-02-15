import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
import { HomeComponent } from './home/home.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddedSuccessfullyComponent } from './added-successfully/added-successfully.component';
import { AddRatingComponent } from './add-rating/add-rating.component';
import { RatingAddedSuccessfullyComponent } from './rating-added-successfully/rating-added-successfully.component';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth-service.service';
import { JwtModule } from '@auth0/angular-jwt';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomedemoComponent } from './homedemo/homedemo.component';
import { FirstComponent } from './first/first.component';


const appRoutes: Routes = [
  

];

export function tokenGetter(){
  return sessionStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductComponent,
    ProductdetailComponent,
    ProductlistComponent,
    HomeComponent,
    AddToCartComponent,
    AddedSuccessfullyComponent,
    AddRatingComponent,
    RatingAddedSuccessfullyComponent,
    InvalidCredentialsComponent,
    WishlistComponent,
    HomedemoComponent,
    FirstComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    FlexLayoutModule ,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,

    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config:{
        tokenGetter:tokenGetter,
        allowedDomains:["localhost:37571"],
        disallowedRoutes:[]
      }
    }),
    NgbModule,
  ],
  providers: [AuthGuardService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
