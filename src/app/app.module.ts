import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers/index';

import { AlertService, AuthenticationService, UserService } from './services/index';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/index';
import { SignupComponent } from './signup/index';
import { routing }  from './app-routing.module';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
// import { CustomerSignupComponent } from './signup/customer-signup/customer-signup.component';


// import { SellerSignupComponent } from './signup/seller-signup/seller-signup.component';
import { UserComponent } from './user/user.component';
import { SellerComponent } from './user/seller/seller.component';
import { ViewProfileComponent } from './user/seller/view-profile/view-profile.component';
import { EditProfileComponent } from './user/seller/edit-profile/edit-profile.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailsComponent } from './shopping-list/shopping-details/shopping-details.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { HomeComponent } from './home/index';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { OneCategoryComponent } from './categories/category-list/one-category/one-category.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { SubCatgoryListComponent } from './categories/category-detail/sub-catgory-list/sub-catgory-list.component';
import { SubCatgoryDetailComponent } from './categories/category-detail/sub-catgory-detail/sub-catgory-detail.component';
import { ProductListComponent } from './categories/category-detail/sub-catgory-detail/product-list/product-list.component';
import { OneProductComponent } from './categories/category-detail/sub-catgory-detail/product-list/one-product/one-product.component';
import { ProductDetailComponent } from './categories/category-detail/sub-catgory-detail/product-detail/product-detail.component';
import { OneSubCategoryComponent } from './categories/category-detail/sub-catgory-list/one-sub-category/one-sub-category.component';
import { SubCategoryService } from './services/subCategory.service';
import { ProductService } from './services/product.service';
// import { SellerSignupComponent } from './signup/seller-signup/seller-signup.component';
// import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    // SellerSignupComponent,
    UserComponent,
    SellerComponent,
    AlertComponent,
    ViewProfileComponent,
    EditProfileComponent,
    ShoppingListComponent,
    ShoppingDetailsComponent,
    SearchComponent,
    FilterComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryListComponent,
    OneCategoryComponent,
    CategoryDetailComponent,
    SubCatgoryListComponent,
    OneSubCategoryComponent,
    SubCatgoryDetailComponent,
    ProductListComponent,
    OneProductComponent,
    ProductDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [SubCategoryService, ProductService, AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
