import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RefreshButtonProps {
  onRefresh?: () => void;
}

export const RefreshButton = ({ onRefresh }: RefreshButtonProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (onRefresh) {
      onRefresh();
    }
    
    setIsRefreshing(false);
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleRefresh}
        disabled={isRefreshing}
        variant="secondary"
        size="lg"
        className="group px-8 py-3 bg-secondary/10 hover:bg-secondary/20 border border-border/30 hover:border-primary/30 transition-all duration-300"
      >
        <RotateCcw 
          className={`h-5 w-5 mr-3 transition-transform duration-500 ${
            isRefreshing ? 'animate-spin' : 'group-hover:rotate-180'
          }`} 
        />
        <span className="font-medium">
          {isRefreshing ? 'Refreshing...' : 'Refresh Analysis'}
        </span>
      </Button>
    </div>
  );
};