import {SelectOptionComponent} from "./dynamicComponents/select-option/select-option.component";
import {TextComponent} from "./dynamicComponents/text/text.component";
import {SelectOptionMultipleComponent} from "./dynamicComponents/select-option-multiple/select-option-multiple.component";
import {BooleanComponentComponent} from "./dynamicComponents/boolean-component/boolean-component.component";
import {ProgressComponentComponent} from "./dynamicComponents/progress-component/progress-component.component";

const componentMap = {
  'option': SelectOptionComponent,
  'option-multiple': SelectOptionMultipleComponent,
  'text': TextComponent,
  'boolean': BooleanComponentComponent,
  'progress': ProgressComponentComponent
}

export {componentMap}
