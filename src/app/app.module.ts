import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { TestfileComponent } from './testfile/testfile.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    TestfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductListComponent},
      {
        path:'products/:id',
        canActivate:[ProductDetailGuard],
        component:ProductDetailsComponent
      },
      {path:'welcome',component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**',redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
