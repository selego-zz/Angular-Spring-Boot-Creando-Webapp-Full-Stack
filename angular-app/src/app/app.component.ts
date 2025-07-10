import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
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
}
