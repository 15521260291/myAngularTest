import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ViewAddDirective} from "../directives/view-add.directive";
import {showContentMap} from "./show-content/showContentMap";
import {componentMap} from "./componentMap";
import {EditAddDirective} from "../directives/edit-add.directive";
import {GetDataService} from "../services/getData.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-single-field',
  templateUrl: './single-field.component.html',
  styleUrls: ['./single-field.component.scss']
})
export class SingleFieldComponent implements OnInit, AfterViewInit {

  @Input()
  data: any;

  @ViewChild(ViewAddDirective)
  appViewAddRef: any;

  @ViewChild(EditAddDirective)
  appEditAddRef: any;

  showEditFlag = false;

  constructor(
    private getDataService: GetDataService,
    private message: NzMessageService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  labelComponentRef = null;

  ngAfterViewInit(): void{
    // @ts-ignore
    const showContent = showContentMap[this.data.fieldType];
    if(showContent){
      setTimeout(() => {
        const viewContainerRef = this.appViewAddRef.viewContainerRef;
        viewContainerRef.clear();
        // console.log(viewContainerRef, showContent, '66666');
        this.labelComponentRef = viewContainerRef.createComponent(showContent);
        // @ts-ignore
        this.labelComponentRef.instance.init(this.data);
      })
    }
  }

  editComponentRef = null;

  submit(): void{
    // @ts-ignore
    this.getDataService.updateById(this.data.id, {value: this.editComponentRef.instance.value}, true).subscribe(res => {
      if(res){
        console.log('提交成功');
        // @ts-ignore
        const newValue = this.editComponentRef.instance.newValue;
        this.appEditAddRef.viewContainerRef.clear();
        document.removeEventListener('click', this.clickCB);
        this.data.value = newValue;
        // @ts-ignore
        this.labelComponentRef.instance.init(this.data);
        // this.getData(this.data.id);
        this.showEditFlag = false;
      }else{
        this.message.error('更新失败！');
      }
    })
  }

  getData(id: string){
    this.getDataService.getDataById(id).subscribe(res => {
      this.data = res;
      // @ts-ignore
      this.labelComponentRef.instance.init(this.data);
    });
  }

  clickCB = (e: any) => {
    // @ts-ignore  ant-select-item-option-content ant-select-item
    console.log(this.elementRef.nativeElement.contains(e.target), e.target);
    if(this.data.fieldType === 'boolean'){
      this.submit();
    }else{
      // @ts-ignore
      if((!this.elementRef.nativeElement.contains(e.target) && !e.target.classList.contains('ant-select-item-option-content') && !e.target.classList.contains('ant-select-item'))&& this.editComponentRef){
        this.submit();
      }
    }

  };

  showEdit(): void{
    this.showEditFlag = true;
    // @ts-ignore
    const component = componentMap[this.data.fieldType];
    const viewContainerRef = this.appEditAddRef.viewContainerRef;
    viewContainerRef.clear();
    this.editComponentRef = viewContainerRef.createComponent(component);
    // @ts-ignore
    this.editComponentRef.instance.init(this.data);
    setTimeout(() => {
      document.addEventListener('click', this.clickCB)
    })
  }

}
