import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  value = null;
  newValue = null;

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
