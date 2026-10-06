import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: 'div[appFormField]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class FormFieldDirective {
  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() => cn('flex flex-col gap-1.5', this.userClass()));
}
