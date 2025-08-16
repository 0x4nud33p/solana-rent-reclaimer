import { ATAAnalysis } from "./ATAAnalysis";
import { SOLRecovery } from "./SOLRecovery";
import { RefreshButton } from "./RefreshButton";
import { useState } from "react";
import { useEffect } from "react";
import { useUnusedATAs } from "@/utils/fetchUnusedTokenAccounts";

export const CryptoDashboard = () => {
  const { getUnusedATAs } = useUnusedATAs();
  const [dashboardData, setDashboardData] = useState({
    totalATAs: 0,
    unusedATAs: 0,
    recoverableSOL: 0,
    atasToClose: 0,
    estimatedRecovery: 0,
    transactionFees: 0.001,
    hasUnusedATAs: false
  });

  const handleRefresh = async () => {
    console.log("Refreshing ATA analysis...");
    const result = await getUnusedATAs();
    console.log("Fetched unused ATAs:", result);
    if (Array.isArray(result)) {
      // Handle the case where result is an array (fallback/default)
      setDashboardData(prev => ({
        ...prev,
        totalATAs: prev.totalATAs,
        unusedATAs: result.length,
        atasToClose: result.length,
        estimatedRecovery: 0,
        recoverableSOL: 0,
        hasUnusedATAs: result.length > 0
      }));
    } else {
      // Handle the case where result is the expected object
      const { unused, estimatedRecovery } = result;
      setDashboardData(prev => ({
        ...prev,
        totalATAs: prev.totalATAs,
        unusedATAs: unused.length,
        atasToClose: unused.length,
        estimatedRecovery,
        recoverableSOL: estimatedRecovery,
        hasUnusedATAs: unused.length > 0
      }));
    }
  };

  useEffect(() => { handleRefresh(); }, []);

 return (
    <div className="min-h-screen bg-background">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            {/* <h1 className="text-4xl md:text-6xl text-center font-medium">
              ATA Recovery Tool
            </h1> */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze and recover SOL from unused Associated Token Accounts
            </p>
          </div>

          {/* Dashboard Sections */}
          <div className="space-y-8">
            <ATAAnalysis 
              totalATAs={dashboardData.totalATAs}
              unusedATAs={dashboardData.unusedATAs}
              recoverableSOL={dashboardData.recoverableSOL}
            />
            
            <SOLRecovery 
              atasToClose={dashboardData.atasToClose}
              estimatedRecovery={dashboardData.estimatedRecovery}
              transactionFees={dashboardData.transactionFees}
              hasUnusedATAs={dashboardData.hasUnusedATAs}
            />
          </div>

          {/* Refresh Button */}
          <div className="pt-8">
            <RefreshButton onRefresh={handleRefresh} />
          </div>
        </div>
      </div>
    </div>
  );
};
