import { Routes } from '@angular/router';
import { ProdutDetailComponent } from './pages/produt-detail/produt-detail.component';
import { HomeComponent } from './pages/home/app.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/:id', component: ProdutDetailComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'product-details', component: ProdutDetailComponent }
];
