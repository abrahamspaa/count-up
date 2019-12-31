import Component from '@glimmer/component';
import { CountUp as C} from 'countup.js';

export default class CountUp extends Component {
  public didInsertElement() {
    const { firstNode } = this.bounds;
    this._count(firstNode);
  }

  public didUpdate() {
    const { firstNode } = this.bounds;
    this._count(firstNode);
  }

  private _options() {
    return {
      decimal: this.args.decimal || '.',
      decimalPlaces: this.args.decimalPlaces || 0,
      duration: this.args.duration || 2,
      easingFn: this.args.easingFn || '',
      formattingFn: this.args.formattingFn || '',
      numerals: this.args.numerals || '',
      prefix: this.args.prefix || '',
      separator: this.args.separator || ',',
      smartEasingAmount: this.args.smartEasingAmount || 333,
      smartEasingThreshold: this.args.smartEasingThreshold || 999,
      startVal: this.args.startVal || 0,
      suffix: this.args.suffix || '',
      useEasing: this.args.useEasing || true,
      useGrouping: this.args.useGrouping || true
    };
  }

  private _count(target) {
    const count = new C(target, this.args.endVal || 0, this._options());

    if (!count.error) {
      count.start();
    } else {
      alert(count.error);
    }
  }
}
