import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boolean2',
  templateUrl: './boolean2.component.html',
  styleUrls: ['./boolean2.component.scss']
})
export class Boolean2Component implements OnInit {

  value = false;
  newValue = false;

  constructor() { }

  ngOnInit(): void {
  }

  init(data: any): void{
    this.value = data.value;
  }

  modelChange(event: any): void{
    this.newValue = event;
  }

}
