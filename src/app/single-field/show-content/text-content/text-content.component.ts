import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {
  showValue: any = null;
  data: any = null;
  options = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  init(data: any): void{
    this.data = data;
    if(data.fieldType === 'text'){
      this.showValue = data.value;
    }else if(data.fieldType === 'option'){
      this.showValue = data.value?.label;
    }else if(data.fieldType === 'option-multiple'){
      this.showValue = data.value?.map((item: any) => item.label).join(',');
    }
  }


}
