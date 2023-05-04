import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {Interface} from "readline";
import {ViewRefDirective} from "./directives/view-ref.directive";
import {componentMap}  from "./componentMap";
import {SelectOptionComponent} from "./dynamicComponents/select-option/select-option.component";
import {HttpClient} from "@angular/common/http";


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
    this.http.get('/api/getData').subscribe(resp => {
       this.data = resp;
       console.log(this.data, '123');
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
