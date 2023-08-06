import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-option2',
  templateUrl: './select-option2.component.html',
  styleUrls: ['./select-option2.component.scss']
})
export class SelectOption2Component implements OnInit {

  data: any = null;
  value = null;
  options: any = [];
  newValue = null;

  constructor(
  ) { }

  ngOnInit(): void {

  }

  init(data: any): void{
    if(data.url){
      this.options = data.urlOption;
    }else{
      this.options = data.dataSet;
    }
    this.value = data.value?.value;
  }

  modelChange(event: any): void{
    this.newValue = this.options.find((item: { value: any; }) => item.value === event);
  }

}
