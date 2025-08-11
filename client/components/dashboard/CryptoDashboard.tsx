import { ATAAnalysis } from "./ATAAnalysis";
import { SOLRecovery } from "./SOLRecovery";
import { RefreshButton } from "./RefreshButton";
import { useState } from "react";

export const CryptoDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalATAs: 0,
    unusedATAs: 0,
    recoverableSOL: 0.00000,
    atasToClose: 0,
    estimatedRecovery: 0.00000,
    transactionFees: 0.001,
    hasUnusedATAs: false
  });

  const handleRefresh = () => {
    // In a real app, this would fetch fresh data from the blockchain
    console.log("Refreshing ATA analysis...");
  };

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