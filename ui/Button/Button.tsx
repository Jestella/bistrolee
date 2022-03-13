import Link from 'next/link';
import buttonStyles from './Button.module.css';

// const Button = ({ children }) => {
//   return <button>{children}</button>;
// };

// export default Button;

export type Props = {
  variant: 'dark' | 'light' | 'transparent';
  size: 'regular' | 'small' | 'large';
  type: 'submit' | 'button';
  children: any;
  link?: string;
  href?: string;
};

const generateClassName = (variant: Props['variant'], size: Props['size']) => {
  return [buttonStyles.btn, buttonStyles[size], buttonStyles[variant]].join(
    ' '
  );
};
export default function Button({
  variant,
  size,
  type,
  link,
  href,
  children,
}: Props) {
  if (link) {
    return (
      <Link href={link}>
        <a className={generateClassName(variant, size)}>{children}</a>
      </Link>
    );
  }
  if (href) {
    return (
      <a className={generateClassName(variant, size)} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={generateClassName(variant, size)} type={type}>
        {children}
      </button>
    );
  }
}
