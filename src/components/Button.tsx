const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`h-10 px-2 gap-1.5 inline-flex items-center justify-center font-inter text-sm text-background font-medium bg-primary rounded-lg outline-none cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
