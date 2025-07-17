import { Component, Input } from '@angular/core';

@Component({
  selector: 'total',
  standalone: true,
  imports: [],
  templateUrl: './total.html',
})
export class TotalComponent {
  @Input() total!: number;
}
