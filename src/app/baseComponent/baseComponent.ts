export class BaseComponent{
   constructor() {
   }
   public value:any = '';
   public options: Array<{label: string, value: string}> = [];

   protected init(item: any): void{
     if(item.fieldType === 'option'){
       this.value = item.value?.value;
     }else if(item.fieldType === 'option-multiple'){
       this.value = item.value.map((item: { value: any; }) => item.value);
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
   }
}
