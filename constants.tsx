
import { CostItem, CapacityMetric, PhaseData, MonthlyInfraCost } from './types';

export const COLORS = {
  primary: '#1e3a8a', // Deep Blue
  secondary: '#3b82f6', // Bright Blue
  accent: '#000000', // Black
  background: '#ffffff', // White
  muted: '#64748b',
  chart: ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']
};

// Assuming 22 working days for monthly calculations
const MULTIPLIER = 22;

export const COST_COMPARISON: CostItem[] = [
  { name: 'Current (Manual)', year1: 66.18, year2: 66.18, year3: 66.18, total: 198.54 },
  { name: 'Scenario 1 (AI + 7R)', year1: 104.17, year2: 80.22, year3: 80.22, total: 264.61 },
  { name: 'Scenario 2 (AI + 3R)', year1: 80.17, year2: 56.22, year3: 56.22, total: 192.61 }
];

export const CAPACITY_DATA: CapacityMetric[] = [
  { area: 'Monthly Resumes', manual: 500 * MULTIPLIER, ai: 2000 * MULTIPLIER, impact: '4x' },
  { area: 'Monthly Interviews', manual: 35 * MULTIPLIER, ai: 150 * MULTIPLIER, impact: '4x' },
  { area: 'Recruiter Load (Hrs)', manual: 160, ai: 24, impact: '85% Reduc.' }
];

export const PHASE_BREAKDOWN: PhaseData[] = [
  { name: 'Phase 1: AI/ML', hours: 650, color: '#1e3a8a' },
  { name: 'Phase 2: Platform', hours: 1350, color: '#3b82f6' },
  { name: 'Phase 3A: AI Deploy', hours: 500, color: '#60a5fa' },
  { name: 'Phase 3B: Infra Deploy', hours: 250, color: '#93c5fd' },
  { name: 'Retainer', hours: 150, color: '#000000' }
];

export const INFRA_MONTHLY: MonthlyInfraCost[] = [
  { component: 'Compute (EC2)', cost: 8000 },
  { component: 'Database (RDS)', cost: 4000 },
  { component: 'Additional Tools', cost: 4500 },
  { component: 'Load Balancer', cost: 1600 },
  { component: 'API Keys', cost: 2000 },
  { component: 'Other Infra', cost: 8400 }
];
