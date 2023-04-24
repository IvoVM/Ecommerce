import { NgModule, Renderer2, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './modules/public/authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpBackend,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { RegisterComponent } from './modules/public/authentication/register/register.component';
import { MainComponent } from './modules/public/layout/main/main.component';
import { PersonalCartComponent } from './modules/private/cart/personal-cart/personal-cart.component';
import { CategoriesListComponent } from './modules/public/layout/categories-list/categories-list.component';
import { InterceptorService } from './services/interceptor.service';
import { LoadingScreenComponent } from './views/loading-screen/loading-screen.component';
import { FooterComponent } from './modules/public/layout/footer/footer.component';
import { CardsGridComponent } from './modules/public/cards/cards-grid/cards-grid.component';
import { DetailProductComponent } from './modules/public/cards/detail-product/detail-product.component';
import { NavComponent } from './modules/public/layout/nav/nav.component';
import { CardComponent } from './modules/public/cards/card/card.component';
import { NewUploadComponent } from './modules/private/upload-product/new-upload/new-upload.component';
import { ProfileComponent } from './modules/private/profile/profile/profile.component';
import { CategoryComponent } from './modules/public/layout/category/category.component';
import { EditProfileComponent } from './modules/private/profile/edit-profile/edit-profile.component';
import { CardProfileComponent } from './modules/private/profile/card-profile/card-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    PersonalCartComponent,
    CategoriesListComponent,
    LoadingScreenComponent,
    FooterComponent,
    CardsGridComponent,
    DetailProductComponent,
    NavComponent,
    CardComponent,
    NewUploadComponent,
    ProfileComponent,
    CategoryComponent,
    EditProfileComponent,
    CardProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
