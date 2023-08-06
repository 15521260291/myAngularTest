import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-option-multiple2',
  templateUrl: './select-option-multiple2.component.html',
  styleUrls: ['./select-option-multiple2.component.scss']
})
export class SelectOptionMultiple2Component implements OnInit {

  data: any = null;
  value = null;
  options: any = [];
  newValue = null;

  constructor() { }

  init(data: any): void{
    if(data.url){
      this.options = data.urlOption;
    }else{
      this.options = data.dataSet;
    }
    this.value = data.value?.map((it: any) => it.value);
  }

  ngOnInit(): void {
  }

  modelChange(event: any): void{
    this.newValue = this.options.filter((item: { value: any; }) => event?.includes(item.value))
  }

}
