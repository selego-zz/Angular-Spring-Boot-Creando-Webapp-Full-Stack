import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.html',
})
export class ClientViewComponent {
  @Input() client!: Client;
}
