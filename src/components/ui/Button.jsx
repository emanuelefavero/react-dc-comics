import { cx } from '@/lib/utils';
import './Button.css';

// oxlint-disable-next-line react/only-export-components
export const buttonVariants = Object.freeze({
  variant: {
    primary: 'primary',
  },
  size: {
    sm: 'sm text-xs',
  },
});

export const Button = ({
  children,
  variant = buttonVariants.variant.primary,
  size = buttonVariants.size.sm,
  className,
  ...props
}) => (
  <button
    type='button'
    className={cx('button uppercase font-bold', variant, size, className)}
    {...props}
  >
    {children}
  </button>
);
