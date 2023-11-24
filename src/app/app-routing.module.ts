import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './sidenav-menu/dashboard/dashboard.component';
import {ProductsComponent} from './sidenav-menu/products/products.component';
import {CategoriesComponent} from './sidenav-menu/categories/categories.component';
import {OrdersComponent} from './sidenav-menu/orders/orders.component';
import {SettingsComponent} from './sidenav-menu/settings/settings.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
	},
	{
		path: 'products',
		component: ProductsComponent,
	},
	{
		path: 'categories',
		component: CategoriesComponent,
	},
	{
		path: 'orders',
		component: OrdersComponent,
	},
	{
		path: 'settings',
		component: SettingsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
