import {TextContentComponent} from "./text-content/text-content.component";
import {BooleanContentComponent} from "./boolean-content/boolean-content.component";
import {ProgressContentComponent} from "./progress-content/progress-content.component";

export const showContentMap = {
  'text': TextContentComponent,
  'option': TextContentComponent,
  'option-multiple': TextContentComponent,
  'boolean': BooleanContentComponent,
  'progress': ProgressContentComponent
}
