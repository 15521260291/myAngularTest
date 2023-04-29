import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {Interface} from "readline";
import {ViewRefDirective} from "./directives/view-ref.directive";
import {componentMap}  from "./componentMap";
import {SelectOptionComponent} from "./dynamicComponents/select-option/select-option.component";
import {HttpClient} from "@angular/common/http";

const data = [
  {
    id: '1',
    label: 'test',
    value: 'test',
    fieldName: 'test',
    fieldType: 'text'
  },
  {
    id: '2',
    label: 'test2',
    value: 'test2',
    fieldName: 'test2',
    fieldType: 'option',
    dataSet: [{label: 'test2', value: 'test2'}, {label: 'test3', value: 'test3'}]
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'my-test-app';

  constructor(private http: HttpClient) {
  }

  @ViewChild('ref', {static: true})
  template: any;

  @ViewChild(ViewRefDirective)
  appViewRef: any

  data: any = [];

  ngOnInit(): void{
    this.data = data;
    this.http.get('/api/getData').subscribe(resp => {
      console.log('11', resp);
    })
  }

  ngAfterViewInit(): void{
    // console.log(componentMap['option'] === SelectOptionComponent);
    //
    // data.forEach(item => {
    //   const type: string = item.fieldType;
    //   if(type === 'option'){
    //     const c = componentMap[type];
    //     this.appViewRef.viewContainerRef.createComponent(c)
    //   }else if(type === 'text'){
    //     const c = componentMap[type];
    //     this.appViewRef.viewContainerRef.createComponent(c)
    //   }
    // })
  }

}
