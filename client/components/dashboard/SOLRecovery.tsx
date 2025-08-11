import { AlertTriangle } from "lucide-react";

interface SOLRecoveryProps {
  atasToClose: number;
  estimatedRecovery: number;
  transactionFees: number;
  hasUnusedATAs: boolean;
}

export const SOLRecovery = ({ 
  atasToClose = 0, 
  estimatedRecovery = 0.00000,
  transactionFees = 0.001,
  hasUnusedATAs = false 
}: SOLRecoveryProps) => {
  return (
    <div className="glass-panel rounded-3xl p-8 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">SOL Recovery</h2>
        <p className="text-muted-foreground">
          Close unused ATAs and recover your locked SOL
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Recovery Details */}
        <div className="grid grid-cols-1 gap-4 p-6 rounded-2xl bg-stat-card/40 border border-glass-border/20">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">ATAs to close:</span>
            <span className="text-xl font-semibold text-foreground">{atasToClose}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Estimated recovery:</span>
            <span className="text-xl font-semibold text-success-text">
              {estimatedRecovery.toFixed(5)} SOL
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Transaction fees (we pay!):</span>
            <span className="text-lg text-muted-foreground">
              ~{transactionFees.toFixed(3)} SOL
            </span>
          </div>
        </div>

        {/* Important Notice */}
        <div className="warning-panel">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning-text mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h4 className="font-semibold text-warning-text">Important Notice</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This action will permanently close the selected ATAs. Make sure you don't need 
                these token accounts before proceeding.
              </p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {!hasUnusedATAs && (
          <div className="p-6 rounded-2xl bg-secondary/20 border border-border/30 text-center">
            <p className="text-muted-foreground text-lg">
              No unused ATAs found to recover
            </p>
          </div>
        )}
      </div>
    </div>
  );
};