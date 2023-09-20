import React, { Fragment, ReactNode } from 'react';
import Link from 'next/link';

interface IProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  title?: string;
  isLoading?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  variant?: 'outline' | 'contained' | 'text';
  size?: 'sm' | 'lg';
  color?: 'dark' | 'green' | 'blue' | 'red';
  children?: ReactNode;
}

export default function SubmitButton(props: IProps) {
  const {
    title,
    className,
    isLoading,
    href,
    onClick,
    variant = 'contained',
    size = 'lg',
    children,
    color,
    ...restProps
  } = props;

  if (href) {
    return (
      <Link
        href={href}
        className={`btn btn-success w-100 voting__app__submit__btn ${variant} ${size} ${color} ${className}`}
      >
        {title || children}
      </Link>
    );
  }

  const spinner = (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <button
        disabled={isLoading}
        type="submit"
        className={`btn btn-success w-100 voting__app__submit__btn ${variant} ${size} ${color} ${className}`}
        {...restProps}
      >
        {spinner}
      </button>
    );
  }

  return (
    <Fragment>
      <button
        type={onClick ? 'button' : 'submit'}
        onClick={onClick}
        className={`btn btn-success w-100 voting__app__submit__btn ${variant} ${size} ${color} ${className}`}
        {...restProps}
      >
        {title || children}
      </button>

      <span />
    </Fragment>
  );
}
