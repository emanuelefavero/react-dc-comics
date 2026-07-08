import { cx } from '@/lib/utils';
import './ButtonLink.css';

// oxlint-disable-next-line react/only-export-components
export const buttonLinkVariants = Object.freeze({
  variant: {
    outline: 'outline',
  },
  size: {
    md: 'md text-lg',
  },
});

export const ButtonLink = ({
  children,
  href = '#',
  variant = buttonLinkVariants.variant.outline,
  size = buttonLinkVariants.size.md,
  className,
  ...props
}) => (
  <a
    href={href}
    className={cx(
      'button-link uppercase font-bold', // base styles
      variant,
      size,
      className,
    )}
    {...props}
  >
    {children}
  </a>
);
