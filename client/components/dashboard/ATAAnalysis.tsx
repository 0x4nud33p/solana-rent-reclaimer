import { StatCard } from "./StatCard";

interface ATAAnalysisProps {
  totalATAs: number;
  unusedATAs: number;
  recoverableSOL: number;
}

export const ATAAnalysis = ({ 
  totalATAs = 0, 
  unusedATAs = 0, 
  recoverableSOL = 0.00000 
}: ATAAnalysisProps) => {
  return (
    <div className="glass-panel rounded-3xl p-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">ATA Analysis</h2>
        <p className="text-muted-foreground">
          Analyzing your Associated Token Accounts for recovery opportunities
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Total ATAs" 
          value={totalATAs}
        />
        <StatCard 
          title="Unused ATAs" 
          value={unusedATAs}
        />
        <StatCard 
          title="Recoverable SOL" 
          value={recoverableSOL.toFixed(5)}
        />
      </div>
    </div>
  );
};