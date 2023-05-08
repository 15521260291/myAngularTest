import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../baseComponent/baseComponent";

@Component({
  selector: 'app-progress-component',
  templateUrl: './progress-component.component.html',
  styleUrls: ['./progress-component.component.scss']
})
export class ProgressComponentComponent extends BaseComponent implements OnInit {

  constructor(
  ) {
    super();
  }

  ngOnInit(): void {
  }

  decline(): void {
    this.value = this.value - 10;
    if (this.value < 0) {
      this.value = 0;
    }
    this.submitValue = this.value;
  }

  increase(): void {
    this.value = this.value + 10;
    if (this.value > 100) {
      this.value = 100;
    }
    this.submitValue = this.value;
  }

}
