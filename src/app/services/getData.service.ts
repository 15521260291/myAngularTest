import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

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

}
