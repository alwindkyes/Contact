import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';
import { ObservableComponent } from './observable/observable.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoggingInterceptor } from './logging.interceptor';
import { HighlightPipe } from './highlight.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FieldComponent } from './field/field.component';
import { UserformComponent } from './userform/userform.component';
import { SubjectComponent } from './subject/subject.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClientComponent } from './http-client/http-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent,
    ObservableComponent,
    ContactComponent,
    HighlightPipe,
    OrderComponent,
    SearchComponent,
    PageNotFoundComponent,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    AdminHomeComponent,
    LifecycleComponent,
    FieldComponent,
    UserformComponent,
    SubjectComponent,
    NavigationComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
