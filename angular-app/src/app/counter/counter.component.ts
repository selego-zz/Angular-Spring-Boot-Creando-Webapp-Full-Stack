import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  @Input() title!: string;
  @Output() counterEmitter: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter') || '0');
    this.counterEmitter.emit(this.counter);
  }

  setCounter(): void {
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counterEmitter.emit(this.counter);
  }
}
