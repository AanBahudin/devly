interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'default' | 'lg';
}

const Button = ({
  children,
  className,
  size = 'default',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'gap-1.5 inline-flex items-center justify-center text-background bg-accent font-medium rounded-lg outline-none cursor-pointer';
  const sizes = {
    default: 'h-10 px-2 text-sm',
    lg: 'h-12 px-5',
  };
  return (
    <button className={`${baseStyles} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
