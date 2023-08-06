import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress2',
  templateUrl: './progress2.component.html',
  styleUrls: ['./progress2.component.scss']
})
export class Progress2Component implements OnInit {

  value = 0;
  newValue = 0;

  constructor() { }

  init(data: any): void{
    this.value = data.value;
  }

  ngOnInit(): void {
  }

  decline(): void {
    this.value = this.value - 10;
    if (this.value < 0) {
      this.value = 0;
    }
    this.newValue = this.value;
  }

  increase(): void {
    this.value = this.value + 10;
    if (this.value > 100) {
      this.value = 100;
    }
    this.newValue = this.value;
  }

}
