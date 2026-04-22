interface CardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
  className?: string;
}

const Card = ({ image, title, description, alt, className }: CardProps) => {
  return (
    <div
      className={`h-full p-1 bg-background border border-border/50 rounded-xl ${className}`}
    >
      <div className="relative size-full flex items-center justify-center rounded-lg">
        <div className="absolute size-full bg-white rounded-lg blur-[2px]" />
        <div className="w-full h-full p-5 flex flex-col gap-8 z-10">
          <img className="object-cover" src={image} alt={alt} />
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-[28px] font-medium text-foreground">{title}</h1>
            <p className="font-medium text-muted-foreground/80">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
