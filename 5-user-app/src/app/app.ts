import { Component, signal } from '@angular/core';
import { UserAppComponent } from './components/user-app';

@Component({
  selector: 'app-root',
  imports: [UserAppComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('5-user-app');
}
