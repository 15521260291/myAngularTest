import {SelectOptionComponent} from "./dynamicComponents/select-option/select-option.component";
import {TextComponent} from "./dynamicComponents/text/text.component";
import {SelectOptionMultipleComponent} from "./dynamicComponents/select-option-multiple/select-option-multiple.component";

const componentMap = {
  'option': SelectOptionComponent,
  'option-multiple': SelectOptionMultipleComponent,
  'text': TextComponent
}

export {componentMap}
