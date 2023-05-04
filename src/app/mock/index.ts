export const data = {
  'GET /api/getData':  [
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
      id: '3',
      label: 'test3',
      value: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}],
      fieldName: 'test3',
      fieldType: 'option-multiple',
      dataSet: [{label: 'test1', value: '1'}, {label: 'test2', value: '2'}]
    }
  ]
}


