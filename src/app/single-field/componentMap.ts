import {SelectOption2Component} from "./dynamicComponent2/select-option2/select-option2.component";
import {SelectOptionMultiple2Component} from "./dynamicComponent2/select-option-multiple2/select-option-multiple2.component";
import {InputTextComponent} from "./dynamicComponent2/input-text/input-text.component";
import {Boolean2Component} from "./dynamicComponent2/boolean2/boolean2.component";
import {Progress2Component} from "./dynamicComponent2/progress2/progress2.component";

export const componentMap = {
  'option': SelectOption2Component,
  'option-multiple': SelectOptionMultiple2Component,
  'text': InputTextComponent,
  'boolean': Boolean2Component,
  'progress': Progress2Component
}
