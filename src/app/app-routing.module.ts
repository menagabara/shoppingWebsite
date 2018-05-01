import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";
import { ProductListComponent } from "./categories/category-detail/sub-catgory-detail/product-list/product-list.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoryListComponent } from "./categories/category-list/category-list.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OneCategoryComponent } from "./categories/category-list/one-category/one-category.component";
import { CategoryDetailComponent } from "./categories/category-detail/category-detail.component";
import { SubCatgoryDetailComponent } from "./categories/category-detail/sub-catgory-detail/sub-catgory-detail.component";
import { ProductDetailComponent } from "./categories/category-detail/sub-catgory-detail/product-detail/product-detail.component";
import { UserComponent } from "./user/user.component"
import { EditProfileComponent } from "./user/seller/edit-profile/edit-profile.component"
import { ViewProfileComponent } from "./user/seller/view-profile/view-profile.component"

//add all the routers/pages here.
const appRoutes: Routes =[
    { 
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }, 
    { 
        path: 'home', 
        component: HomeComponent 
    },
    { 
        path: 'signup', 
        component: SignupComponent 
    }, 
    { 
        path: 'login', 
        component: LoginComponent 
    }, 
    { 
        path: 'categories', 
        component: CategoriesComponent,
        children: [
            {
                path: ':id', 
                component: CategoryDetailComponent,
                children:[
                    {
                        path: ':id', 
                        component: SubCatgoryDetailComponent,
                        children:[
                            {
                                path: ':id', 
                                component: ProductDetailComponent
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        path: 'profile',
        children: [
            {
                path: 'edit', 
                component: EditProfileComponent
            },
            {
                path: 'view', 
                component: ViewProfileComponent
            }
        ]
    }
]

@NgModule({
    //configure the routers of the project.
    imports:[RouterModule.forRoot(appRoutes)],
    //exporting configured routers.
    exports:[RouterModule]
})

export class AppRoutingModule{

}