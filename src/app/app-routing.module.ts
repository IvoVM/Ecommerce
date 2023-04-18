import { VigilanteGuard } from './guards/vigilante.guard';
import { DetailProductComponent } from './views/detail-product/detail-product.component';
import { PersonalCartComponent } from './views/personal-cart/personal-cart.component';
import { NewUploadComponent } from './views/new-upload/new-upload.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './views/profile/profile.component';
import {  DetailProductResolverService } from './resolvers/detail-product.resolver';
import { CategoryComponent } from './views/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'upload',
    component: NewUploadComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'cart',
    component: PersonalCartComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [VigilanteGuard],
  },
  {
    path: 'detail-product/:id',
    component: DetailProductComponent,
    resolve:{
      product:DetailProductResolverService 
    }
  },
  {
    path: 'category/:category',
    component: CategoryComponent,

  },
  {
    path: '**',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
