import {SelectOptionComponent} from "./dynamicComponents/select-option/select-option.component";
import {TextComponent} from "./dynamicComponents/text/text.component";

const componentMap = {
  'option': SelectOptionComponent,
  'text': TextComponent
}

export {componentMap}
