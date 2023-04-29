export class BaseComponet{
   constructor() {
   }
   public value = '';
   public options: Array<{label: string, value: string}> = [];
   protected init(item: any): void{
     this.value = item.value;
     if(item.fieldType === 'option'){
       if(item.dataSet){
         this.options = item.dataSet;
       }else if(item.url){
         this.options = [];
       }
     }
   }
}
