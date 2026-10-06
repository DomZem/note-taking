import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: 'span[appSeparator]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class SeparatorDirective {
  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() => cn('h-px w-full bg-border', this.userClass()));
}
