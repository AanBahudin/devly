import { ArrowUpRight, type LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title?: string;
  subTitle?: string;
}

const ContactCard = ({ icon: Icon, title, subTitle }: ContactCardProps) => {
  return (
    <div className="group p-4 flex items-center justify-between border border-border/50 rounded-xl bg-white">
      <div className="flex items-center gap-3">
        <div className="size-12 flex justify-center items-center border border-border/50 rounded-lg bg-accent/5">
          <Icon className="text-accent" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-foreground">{title}</h3>
          <h4 className="text-sm font-medium text-muted-foreground">
            {subTitle}
          </h4>
        </div>
      </div>
      {/* <div className="size-8 flex justify-center items-center border border-border/50 rounded-full bg-accent transition-all duration-300 ease-in-out group-hover:rotate-45">
        <ArrowUpRight size={18} className="text-background" />
      </div> */}
    </div>
  );
};

export default ContactCard;
