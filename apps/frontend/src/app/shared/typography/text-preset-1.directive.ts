import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: '[appTextPreset1]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class TextPreset1Directive {
  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() => cn('text-heading text-2xl font-bold', this.userClass()));
}
