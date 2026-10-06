import { Directive, computed, input } from '@angular/core';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center cursor-pointer rounded-lg text-base/tight font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-4 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-white',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        border: 'bg-transparent border border-border text-neutral-950 hover:bg-secondary',
      },
      size: {
        default: 'h-11 py-3 px-4',
        // sm: 'h-9 px-3 rounded-md',
        // lg: 'h-11 px-8 rounded-md',
        // icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: 'button[appButton], a[appButton]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class ButtonDirective {
  variant = input<ButtonVariants['variant']>('default');
  size = input<ButtonVariants['size']>('default');

  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() =>
    cn(buttonVariants({ variant: this.variant(), size: this.size() }), this.userClass()),
  );
}
