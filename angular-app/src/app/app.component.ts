import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hola Mundo angular';
  users = ['Pepe', 'Maria', 'Juan', 'Andres'];
  visible: boolean = false;
  buttonTitle = 'Mostrar';

  setVisible(): void {
    this.visible = !this.visible;
    if (this.visible) {
      this.buttonTitle = 'Ocultar';
    } else {
      this.buttonTitle = 'Mostrar';
    }
  }
  ponerDatos(): void {
    this.users = ['Pepe', 'Maria', 'Juan', 'Andres'];
  }
  quitarDatos(): void {
    this.users = [];
  }
}
