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

  updateById(id: string, body: any): Observable<boolean>{
    const index = mockData.findIndex(item => item.id === id);
    let result = false;
    if(index != -1){
      mockData[index].value = body.value;
      result = true;
    }
    return of(result);
  }

}
