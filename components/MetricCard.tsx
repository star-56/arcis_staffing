
import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, subtext, icon }) => {
  return (
    <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
      
      <div className="relative z-10 flex w-full items-start justify-between">
        <div className="text-blue-900 bg-blue-50 p-2.5 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div className="bg-slate-100 text-slate-400 text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">Verified</div>
      </div>
      
      <div className="relative z-10 mt-1">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className="text-2xl font-black text-blue-900 tracking-tight">{value}</p>
        {subtext && (
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1 h-1 bg-blue-500 rounded-full" />
            <p className="text-[11px] text-slate-500 font-bold leading-none">{subtext}</p>
          </div>
        )}
      </div>
    </div>
  );
};
