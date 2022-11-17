import { VigilanteGuard } from './guards/vigilante.guard';
import { DetailProductComponent } from './views/detail-product/detail-product.component';
import { PersonalCartComponent } from './views/personal-cart/personal-cart.component';
import { NewUploadComponent } from './views/new-upload/new-upload.component';
import { MainComponent } from './views/main/main.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
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
    path: ':variable',
    component: DetailProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
