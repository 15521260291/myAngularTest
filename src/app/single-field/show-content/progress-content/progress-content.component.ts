import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-content',
  templateUrl: './progress-content.component.html',
  styleUrls: ['./progress-content.component.scss']
})
export class ProgressContentComponent implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  init(data: any): void{
    this.value = data.value;
  }

  update(value: any): number{
    this.value = value;
    return value;
  }

}
