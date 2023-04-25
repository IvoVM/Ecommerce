import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/public/layout/main/main.component';
import { LoginComponent } from './modules/public/authentication/login/login.component';
import { VigilanteGuard } from './guards/vigilante.guard';

// import { VigilanteGuard } from './guards/vigilante.guard';
// import { DetailProductComponent } from './modules/public/cards/detail-product/detail-product.component';
// import { PersonalCartComponent } from './modules/private/cart/personal-cart/personal-cart.component';
// import { NewUploadComponent } from './modules/private/upload-product/new-upload/new-upload.component';
// import { MainComponent } from './modules/public/layout/main/main.component';
// import { LoginComponent } from './modules/public/authentication/login/login.component';
// import { RegisterComponent } from './modules/public/authentication/register/register.component';
// import { ProfileComponent } from './modules/private/profile/profile/profile.component';
// import {  DetailProductResolverService } from './resolvers/detail-product.resolver';
// import { CategoryComponent } from './modules/public/layout/category/category.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
//   {
//     path: 'register',
//     component: RegisterComponent,
//   },
//   {
//     path: 'main',
//     component: MainComponent,
//   },
//
//   {
//     path: 'detail-product/:id',
//     component: DetailProductComponent,
//     resolve:{
//       product:DetailProductResolverService
//     }
//   },
//   {
//     path: 'category/:category',
//     component: CategoryComponent,

//   },
//   {
//     path: '**',
//     component: MainComponent,
//   },
// {
//     path: 'upload',
//     component: NewUploadComponent,
//     canActivate: [VigilanteGuard],
//   },
//   {
//     path: 'cart',
//     component: PersonalCartComponent,
//     canActivate: [VigilanteGuard],
//   },
//   {
//     path: 'profile',
//     component: ProfileComponent,
//     canActivate: [VigilanteGuard],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

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
    path: 'private',
    loadChildren: () =>
      import('./modules/private/private.module').then((m) => m.PrivateModule),
    canActivate: [VigilanteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
