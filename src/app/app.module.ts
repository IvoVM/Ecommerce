import { NgModule, Renderer2, ElementRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpBackend,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { RegisterComponent } from './views/register/register.component';
import { MainComponent } from './views/main/main.component';
import { PersonalCartComponent } from './views/personal-cart/personal-cart.component';
import { CategoriesListComponent } from './views/categories-list/categories-list.component';
import { InterceptorService } from './services/interceptor.service';
import { LoadingScreenComponent } from './views/loading-screen/loading-screen.component';
import { FooterComponent } from './views/footer/footer.component';
import { CardsGridComponent } from './views/cards-grid/cards-grid.component';
import { DetailProductComponent } from './views/detail-product/detail-product.component';
import { NavComponent } from './views/nav/nav.component';
import { CardComponent } from './views/card/card.component';
import { NewUploadComponent } from './views/new-upload/new-upload.component';
import { ProfileComponent } from './views/profile/profile.component';

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
    ProfileComponent
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
