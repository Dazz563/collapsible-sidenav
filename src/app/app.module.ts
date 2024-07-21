import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { DashboardComponent } from './sidenav-menu/dashboard/dashboard.component';
import { ProductsComponent } from './sidenav-menu/products/products.component';
import { CategoriesComponent } from './sidenav-menu/categories/categories.component';
import { OrdersComponent } from './sidenav-menu/orders/orders.component';
import { SettingsComponent } from './sidenav-menu/settings/settings.component';
import { AccordionSideNavComponent } from './sidenav-menu/dashboard/accordion-side-nav/accordion-side-nav.component';

@NgModule({
  declarations: [
    AppComponent, //
    SidenavMenuComponent,
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    OrdersComponent,
    SettingsComponent,
    AccordionSideNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
