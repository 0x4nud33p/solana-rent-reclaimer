interface StatCardProps {
  title: string;
  value: string | number;
  className?: string;
}

export const StatCard = ({ title, value, className = "" }: StatCardProps) => {
  return (
    <div className={`stat-card group cursor-pointer ${className}`}>
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
          {title}
        </p>
        <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );
};