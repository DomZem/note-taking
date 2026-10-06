import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: 'label[appLabel]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class LabelDirective {
  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() => cn('text-label font-medium text-sm capitalize', this.userClass()));
}
