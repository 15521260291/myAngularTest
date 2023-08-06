import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {mockData} from "../mock";

@Injectable({
  providedIn: 'root'
})
export class GetDataService{
  constructor(private http: HttpClient) {
  }
  getDataById(id: string): Observable<any>{
    return this.http.get('/api/getData').pipe(map((item: any) => {
      return item.find((it: { id: string; }) => it.id === id);
    }))
  }

  getData(id: string): Observable<any>{
    return this.http.get('/api/getData').pipe(map((item: any) => {
     return item;
    }))
  }

  updateById(id: string, body: any, newFlag = false): Observable<boolean>{
    let result = false;
    if(!newFlag){
      const index = mockData.findIndex(item => item.id === id);
      if(index != -1){
        mockData[index].value = body.value;
        result = true;
      }
    }else{
      const index = mockData.findIndex(item => item.id === id);
      if(index != -1){
        const data = mockData[index];
        let newValue = null;

        if(['option'].includes(data.fieldType)){
          if(data.url){
            // @ts-ignore
            newValue = data.urlOption.find(item => item.value === body.value)
          }else{
            // @ts-ignore
            newValue = data.dataSet.find(item => item.value === body.value)
          }

        }else if(['option-multiple'].includes(data.fieldType)){
          if(data.url){
            // @ts-ignore
            newValue = data.urlOption.filter(item => body.value?.includes(item.value))
          }else{
            // @ts-ignore
            newValue = data.dataSet.filter(item => body.value?.includes(item.value))
          }
        }else{
          newValue = body.value;
        }
        data.value = newValue;
        result = true;
      }
    }

    return of(result);
  }

}
