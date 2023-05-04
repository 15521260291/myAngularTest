import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ViewRefDirective} from "../../directives/view-ref.directive";
import {GetDataService} from "../../services/getData.service";
import {componentMap} from "../../componentMap";
import {SelectOptionComponent} from "../../dynamicComponents/select-option/select-option.component";

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.scss']
})
export class ViewModeComponent implements OnInit, OnChanges {
  @Input()
  id = '';

  @ViewChild(ViewRefDirective)
  appViewRef: any;

  itemData: any;

  isEdit = false;


  constructor(
    private getDataService: GetDataService
  ) { }

  ngOnInit(): void {

  }

  getValue(): string{
    const itemData = this.itemData;
    if(itemData?.fieldType === 'text'){
      return itemData?.value;
    }else if(itemData?.fieldType === 'option'){
      return itemData?.value.label;
    }else if(itemData?.fieldType === 'option-multiple'){
      return itemData?.value?.map((item: any) => item?.label)?.join(',');
    }else{
      return itemData?.value;
    }
  }


  submit(): void{
    this.isEdit = false;
    this.appViewRef.viewContainerRef.clear();
  }

  edit(): void{
    this.isEdit = true;
    this.appViewRef.viewContainerRef.clear();
    // @ts-ignore
    const c = componentMap[this.itemData.fieldType];
    // this.appViewRef.viewContainerRef.createComponent(c, {projectableNodes: [[document.createTextNode('Top ng-content - Header')]]})
    const component = this.appViewRef.viewContainerRef.createComponent(c);
    component.instance.init(this.itemData);
  }

  ngOnChanges(changes: SimpleChanges): void{
    const idObj = changes['id'];
    if(idObj.currentValue){
      this.getDataService.getDataById(idObj.currentValue).subscribe(res => {
        console.log(res, '666');
        this.itemData = res;
      });
    }
  }


}
