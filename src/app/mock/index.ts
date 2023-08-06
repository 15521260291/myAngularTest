
export const mockData = [
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
    value: {label: 'test2', value: '1'},
    fieldName: 'test2',
    fieldType: 'option',
    dataSet: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}]
  },
  {
    id: '22',
    label: 'test22',
    value: {label: 'test22', value: '12'},
    fieldName: 'test22',
    fieldType: 'option',
    url: 'tttt',
    urlOption: [{label: 'test22', value: '12'}, {label: 'test222', value: '22'}]
  },
  {
    id: '3',
    label: 'test3',
    value: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}],
    fieldName: 'test3',
    fieldType: 'option-multiple',
    dataSet: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}]
  },
  {
    id: '33',
    label: 'test33',
    value: [{label: 'test13', value: '13'}, {label: 'test23', value: '23'}],
    fieldName: 'test33',
    fieldType: 'option-multiple',
    url: 'tttt',
    urlOption: [{label: 'test13', value: '13'}, {label: 'test23', value: '23'}]
  },
  {
    id: '4',
    label: 'test4',
    value: false,
    fieldName: 'test4',
    fieldType: 'boolean'
  },
  {
    id: '5',
    label: 'test5',
    value: 10,
    fieldName: 'test5',
    fieldType: 'progress'
  }
]

export const data = {
  'GET /api/getData':  mockData
}






