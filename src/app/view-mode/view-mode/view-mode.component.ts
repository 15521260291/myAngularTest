import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ViewRefDirective} from "../../directives/view-ref.directive";
import {GetDataService} from "../../services/getData.service";
import {componentMap} from "../../componentMap";
import {SelectOptionComponent} from "../../dynamicComponents/select-option/select-option.component";
import {NzMessageService} from "ng-zorro-antd/message";
import {NumberInput} from "ng-zorro-antd/core/types";

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

  @ViewChild('container')
  containerRef: any;

  itemData: any;

  isEdit = false;

  component: any = null;

  baseView = ['text', 'option', 'option-multiple'];

  isHover = false;

  loading = false;


  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private getDataService: GetDataService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    // console.log('elemenRef', this.elementRef);
  }

  getValue(): string |  number  {
    const itemData = this.itemData;
    if(itemData?.fieldType === 'text'){
      return itemData?.value;
    }else if(itemData?.fieldType === 'option'){
      return itemData?.value?.label;
    }else if(itemData?.fieldType === 'option-multiple'){
      return itemData?.value?.map((item: any) => item?.label)?.join(',');
    }else{
      return itemData?.value;
    }
  }


  submit(): void{
    this.isHover = false;
    this.loading = true;
    console.log('submit');
    this.getDataService.updateById(this.itemData.id, {value: this.component.instance.submitValue}).subscribe(res => {
      if(res){
        this.loading = false;
        this.getData(this.itemData.id);
        this.isEdit = false;
        this.appViewRef.viewContainerRef.clear();
      }else{
        this.message.error('更新失败！');
      }
    })

  }

  onMouseEnter(): void{
    this.isHover = true;
  }

  onMouseLeave(): void{
    this.isHover = false;
  }

  edit(): void{
    this.isEdit = true;
    this.appViewRef.viewContainerRef.clear();
    // @ts-ignore
    const c = componentMap[this.itemData.fieldType];
    // this.appViewRef.viewContainerRef.createComponent(c, {projectableNodes: [[document.createTextNode('Top ng-content - Header')]]})
    this.component = this.appViewRef.viewContainerRef.createComponent(c);
    this.component.instance.init(this.itemData);

    const callBack = (e:any) => {
      console.log(document.activeElement, e.target, e.target.classList, e.target.tagName, '0000')
      if(this.itemData.fieldType !== 'boolean'){
        // 非boolean类型需要判断失去焦点后才提交
        if(!this.containerRef.nativeElement.contains(document.activeElement) && !e.target.classList.contains('ant-select-item-option-content')){
          document.removeEventListener('click', callBack);
          this.submit();
        }
      }else{
        document.removeEventListener('click', callBack);
        this.submit();
      }
    };

    setTimeout(() => {
      document.addEventListener('click', callBack)
    })

    // document.addEventListener('click', callBack)

  }

  getData(id: string){
    this.getDataService.getDataById(id).subscribe(res => {
      this.itemData = res;
    });
  }

  ngOnChanges(changes: SimpleChanges): void{
    const idObj = changes['id'];
    if(idObj.currentValue){
      this.getData(idObj.currentValue)
    }
  }


}
