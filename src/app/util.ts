class BaseItem{
  constructor(label: string, value: string, fieldName: string, fieldType: string) {
    this.label = label;
    this.value = value;
    this.fieldName = fieldName;
    this.fieldType = fieldType;
  }
  protected label: string | undefined;
  protected value: any;
  protected fieldName: string | undefined;
  protected fieldType: string | undefined;
}

class OptionItem extends BaseItem{
  constructor(label: string, value: string, fieldName: string, fieldType: string) {
    super(label, value, fieldName, fieldType);
  }
  private options: Array<{label: string, value: any}> | undefined;
  private _dataSet: Array<{ label: string; value: any; }> | undefined;
  private _url: string | undefined;


  get dataSet(): Array<{ label: string; value: any }> | undefined {
    return this._dataSet;
  }

  set dataSet(value: Array<{ label: string; value: any }> | undefined) {
    this._dataSet = value;
  }

  get url(): string | undefined {
    return this._url;
  }

  set url(value: string | undefined) {
    this._url = value;
  }
}
