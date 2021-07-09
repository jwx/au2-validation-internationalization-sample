import './toggle-switch.scss';
import { bindable } from 'aurelia';

export class ToggleSwitch {
  @bindable() public checked = false;
  @bindable() public label: string;
  @bindable() public onChange: (val: boolean) => void;

  public triggerChange() {
    this.onChange(!this.checked);
  }
}
