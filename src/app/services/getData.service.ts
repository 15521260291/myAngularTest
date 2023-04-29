import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GetDataService{
  data = [
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
  constructor() {
  }

  getData(id: string): any{
    return this.data.find(item => item.id === id);
  }

}
