import {ViewChild} from "@angular/core";

export class BaseComponent{
   constructor() {
   }

   private item: any = {};
   public value:any = '';
   public options: Array<{label: string, value: string}> = [];
   public submitValue: any = null;

   setSubmitValue(value: any): void{
     if(!value){
       this.submitValue = null;
     }else{
       if(this.item.fieldType === 'text'){
         this.submitValue = value;
       }else if(this.item.fieldType === 'option'){
         this.submitValue = this.options.find(item => item.value === value);
       }else if(this.item.fieldType === 'option-multiple'){
         this.submitValue = this.options.filter(item => value.includes(item.value));
       }else{
         this.submitValue = value;
       }
     }

   }

   public modelChange(value: any): void{
     this.setSubmitValue(value);
   }

   protected init(item: any): void{
     this.item = item;
     if(item.fieldType === 'text'){
       this.value = item.value;
     }else if(item.fieldType === 'option'){
       this.value = item.value?.value;
     }else if(item.fieldType === 'option-multiple'){
       this.value = item.value.map((item: { value: any; }) => item.value);
     }else{
       this.value = item.value;
     }

     if(item.fieldType === 'option'){
       if(item.dataSet){
         this.options = item.dataSet;
       }else if(item.url){
         this.options = [];
       }
     }else if(item.fieldType === 'option-multiple'){
       if(item.dataSet){
         this.options = item.dataSet;
       }else if(item.url){
         this.options = [];
       }
     }

     this.setSubmitValue(this.value);
   }
}
