import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { VigilanteGuard } from 'src/app/guards/vigilante.guard';
import { NewUploadComponent } from './upload-product/new-upload/new-upload.component';
import { PersonalCartComponent } from './cart/personal-cart/personal-cart.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'upload',
        component: NewUploadComponent,
      },
      {
        path: 'cart',
        component: PersonalCartComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PrivateRoutingModule {}
