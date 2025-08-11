import { Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form';
import { UsersComponent } from './components/users/users';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/create',
    component: UserFormComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserFormComponent,
  },
];
