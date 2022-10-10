import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ContactComponent } from './contact/contact.component';
import { FieldComponent } from './field/field.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { LeftComponent } from './left/left.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MiddleComponent } from './middle/middle.component';
import { ObservableComponent } from './observable/observable.component';
import { OrderComponent } from './order/order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';

import { RightComponent } from './right/right.component';
import { SearchComponent } from './search/search.component';
import { SubjectComponent } from './subject/subject.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {path: '', redirectTo: 'observable', pathMatch: 'full'},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
  {path: 'left', component: LeftComponent},
  {path: 'middle', component: MiddleComponent},
  {path: 'right', component: RightComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'order/:id1/:id2', component: OrderComponent},
  {path: 'search', component: SearchComponent},

  {path: 'products', children: [
    {path: 'view', component: ProductViewComponent},
    {path: 'edit', component: ProductEditComponent},
    {path: 'view:id', component: ProductIdComponent}
  ]},
  {path: 'product-id', component: ProductIdComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'userform', component: UserformComponent},
  {path: 'field', component: FieldComponent},
  {path: 'subject', component: SubjectComponent},
  {path: 'adminhome', component: AdminHomeComponent},
  {path: 'httpclient', component: HttpClientComponent},
  // {path: 'products', component: ProductsComponent},
  // {path: 'product-view', component: ProductViewComponent},
  // {path: 'product-edit', component: ProductEditComponent}
  {path: '**', component: PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
