import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean-content',
  templateUrl: './boolean-content.component.html',
  styleUrls: ['./boolean-content.component.scss']
})
export class BooleanContentComponent implements OnInit {

  value = false;

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
