
export interface CostItem {
  name: string;
  year1: number;
  year2: number;
  year3: number;
  total: number;
}

export interface CapacityMetric {
  area: string;
  manual: number;
  ai: number;
  impact: string;
}

export interface PhaseData {
  name: string;
  hours: number;
  color: string;
}

export interface MonthlyInfraCost {
  component: string;
  cost: number;
}
