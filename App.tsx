
import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { 
  TrendingUp, Users, Clock, Zap, DollarSign, 
  Activity, ShieldCheck, Cpu, ArrowUpRight, Scale
} from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { COST_COMPARISON, CAPACITY_DATA, PHASE_BREAKDOWN, INFRA_MONTHLY, COLORS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'financials' | 'tech'>('overview');

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-12 antialiased">
      {/* Sidebar / Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-900 text-white p-2.5 rounded-lg shadow-lg shadow-blue-900/20">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h1 className="text-xl font-black text-blue-900 leading-tight">ARCIS</h1>
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Strategic AI Dashboard</p>
              </div>
            </div>
            <nav className="flex space-x-1 bg-slate-100 p-1 rounded-xl">
              {(['overview', 'financials', 'tech'] as const).map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                    activeTab === tab 
                      ? 'bg-blue-900 text-white shadow-lg' 
                      : 'text-slate-500 hover:text-blue-900 hover:bg-white'
                  }`}
                >
                  {tab === 'overview' ? 'CAPACITY GROWTH' : tab === 'financials' ? 'FINANCIAL ROI' : 'TECH STACK'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Metric Overview Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <MetricCard 
            label="Monthly Throughput" 
            value="44,000 Resumes" 
            subtext="+300% Operational Lift" 
            icon={<Users size={20} />} 
          />
          <MetricCard 
            label="Cost Per Resume" 
            value="₹7.00" 
            subtext="On scale: >5k/mo volume" 
            icon={<Scale size={20} />} 
          />
          <MetricCard 
            label="Launch Window" 
            value="Q1 - 2026" 
            subtext="12-Week Implementation" 
            icon={<Clock size={20} />} 
          />
          <MetricCard 
            label="Net Efficiency" 
            value="₹23.93 L Savings" 
            subtext="3-Year ROI (Scenario 2)" 
            icon={<TrendingUp size={20} />} 
          />
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
            {/* Capacity Growth Chart - Using Area Chart for Volume Perception */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">Processing Capacity Expansion</h3>
                  <p className="text-xs font-bold text-slate-400 mt-1">AI-DRIVEN SCALABILITY VS MANUAL LIMITS</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg text-blue-900">
                  <Activity size={24} />
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={CAPACITY_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="area" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', fontSize: '12px'}}
                    />
                    <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: '20px'}} />
                    <Area type="monotone" name="Manual Limit" dataKey="manual" stroke="#94a3b8" fillOpacity={1} fill="url(#colorManual)" />
                    <Area type="monotone" name="AI Growth Potential" dataKey="ai" stroke={COLORS.primary} fillOpacity={1} fill="url(#colorAI)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[11px] text-slate-500 font-bold text-center italic uppercase">Area represents total operational bandwidth. AI removes the human ceiling.</p>
              </div>
            </div>

            {/* Qualitative Benefits */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-black text-blue-900 mb-6 uppercase tracking-tight">Scale-Enabled Strategic Advantages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Non-Linear Growth", desc: "Scale resume processing by 400% without adding headcount.", color: "bg-blue-900" },
                  { title: "24/7 Screening", desc: "Candidates processed instantly, even outside business hours.", color: "bg-blue-600" },
                  { title: "Bias-Free Evaluation", desc: "Algorithmic consistency across 1,000s of profiles.", color: "bg-black" },
                  { title: "Elastic Resources", desc: "Auto-scaling infrastructure adjusts to hiring spikes.", color: "bg-blue-400" }
                ].map((item, idx) => (
                  <div key={idx} className="group p-5 rounded-xl border border-slate-100 hover:border-blue-900 transition-all duration-300 bg-white shadow-sm hover:shadow-md">
                    <div className={`w-8 h-1 mb-4 ${item.color} rounded-full`} />
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 bg-blue-900 rounded-xl flex items-center justify-between text-white shadow-lg shadow-blue-900/20">
                <div className="flex items-center gap-3">
                  <Zap size={20} className="text-blue-300" />
                  <div>
                    <span className="text-[10px] block font-black text-blue-300 uppercase tracking-widest">Efficiency Multiplier</span>
                    <span className="text-sm font-bold">ARCIS Core Intelligence</span>
                  </div>
                </div>
                <span className="text-3xl font-black">7.4x</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financials' && (
          <div className="space-y-8 animate-fadeIn">
            {/* TCO Optimization Trend - Area Chart for "Trajectory" perception */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">Operational Cost Optimization (3-Year Trend)</h3>
                  <p className="text-xs font-bold text-slate-400 mt-1">SHOWING DOWNWARD COST TRAJECTORY FOR AI MODELS</p>
                </div>
                <div className="bg-blue-50 p-2 rounded-lg text-blue-900">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={COST_COMPARISON} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorY1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.1}/>
                        <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} label={{ value: 'Lakhs (₹)', angle: -90, position: 'insideLeft', offset: 10, fontSize: 10, fontWeight: 800 }} />
                    <Tooltip 
                       contentStyle={{borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', fontSize: '12px'}}
                    />
                    <Area type="monotone" name="Launch Phase (Y1)" dataKey="year1" stroke={COLORS.primary} strokeWidth={4} fill="url(#colorY1)" />
                    <Area type="monotone" name="Steady State (Y2+)" dataKey="year2" stroke={COLORS.secondary} strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex justify-center gap-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-900 rounded" />
                  <span className="text-[10px] font-black text-slate-500 uppercase">Immediate Deployment Cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-500 rounded bg-dashed" style={{borderTop: '2px dashed #3b82f6'}} />
                  <span className="text-[10px] font-black text-slate-500 uppercase">Projected Operational Leanliness</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ROI Highlights */}
              <div className="bg-black text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter italic">FINANCIAL ROI: SCENARIO 2</h3>
                  <p className="text-blue-400 mb-8 font-bold text-xs uppercase tracking-widest">Optimized Hybrid Infrastructure</p>
                  <div className="space-y-6">
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-slate-400 font-bold uppercase tracking-tighter text-[10px]">Current Status Quo (3Y)</span>
                      <span className="text-2xl font-black">₹198.54 L</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                      <span className="text-blue-400 font-bold uppercase tracking-tighter text-[10px]">Optimized AI Hybrid (3Y)</span>
                      <div className="flex items-center gap-2">
                         <span className="text-2xl font-black text-white">₹174.61 L</span>
                      </div>
                    </div>
                    <div className="bg-blue-900 p-6 rounded-2xl border border-blue-800 mt-4 shadow-xl">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white rounded-lg text-blue-900">
                            <TrendingUp size={24} />
                          </div>
                          <div>
                            <span className="font-black text-lg block leading-none">Net Savings</span>
                            <span className="text-[9px] uppercase font-black text-blue-300 tracking-widest">Direct TCO Reduction</span>
                          </div>
                        </div>
                        <span className="text-4xl font-black text-white tracking-tighter italic">₹23.93 L</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-16 -top-16 opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                  <Scale size={320} />
                </div>
              </div>

              {/* Redesigned High-Readability Table */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-black text-blue-900 uppercase tracking-tight">Detailed Comparison</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Audited Year-on-Year Projections</p>
                  </div>
                  <div className="bg-slate-900 text-white text-[9px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase">Lakhs (INR)</div>
                </div>
                <div className="flex-grow overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="py-4 px-5 font-black uppercase text-slate-500 tracking-widest border-r border-slate-200">Model</th>
                        <th className="py-4 px-5 text-right font-black uppercase text-slate-500 tracking-widest border-r border-slate-200">Year 1</th>
                        <th className="py-4 px-5 text-right font-black uppercase text-slate-500 tracking-widest border-r border-slate-200">Year 2+</th>
                        <th className="py-4 px-5 text-right font-black uppercase text-slate-500 tracking-widest">Efficiency</th>
                      </tr>
                    </thead>
                    <tbody className="font-bold">
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-5 px-5 text-slate-900 border-r border-slate-100">Manual Baseline</td>
                        <td className="py-5 px-5 text-right text-slate-600 border-r border-slate-100">66.18</td>
                        <td className="py-5 px-5 text-right text-slate-600 border-r border-slate-100">66.18</td>
                        <td className="py-5 px-5 text-right"><span className="text-slate-400 font-black text-[9px]">LINEAR</span></td>
                      </tr>
                      <tr className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-5 px-5 text-slate-900 border-r border-slate-100">AI + 7 Recruiters</td>
                        <td className="py-5 px-5 text-right text-slate-600 border-r border-slate-100">104.17</td>
                        <td className="py-5 px-5 text-right text-slate-600 border-r border-slate-100">80.22</td>
                        <td className="py-5 px-5 text-right"><span className="text-blue-600 font-black text-[9px]">AUGMENTED</span></td>
                      </tr>
                      <tr className="bg-blue-900 text-white shadow-lg">
                        <td className="py-6 px-5 flex items-center gap-2 border-r border-blue-800">
                           Scenario 2 Hybrid <ArrowUpRight size={14} className="text-blue-300" />
                        </td>
                        <td className="py-6 px-5 text-right border-r border-blue-800 font-black">80.17</td>
                        <td className="py-6 px-5 text-right border-r border-blue-800 font-black">56.22</td>
                        <td className="py-6 px-5 text-right"><span className="text-white font-black px-2 py-1 bg-black/40 rounded text-[9px] tracking-widest uppercase">Leanest</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase italic text-center">Scenario 2 represents the optimal blend of AI automation and human touch.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Development Timeline Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-blue-900 mb-6 flex items-center gap-2 uppercase tracking-tight"><Clock size={20} className="text-blue-900" /> Phase Resource Allocation</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={PHASE_BREAKDOWN}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={5}
                        dataKey="hours"
                      >
                        {PHASE_BREAKDOWN.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip 
                         contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px'}}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                   {PHASE_BREAKDOWN.map((p, i) => (
                     <div key={i} className="flex items-center gap-2 border-l-2 pl-3" style={{borderColor: p.color}}>
                       <div>
                         <span className="text-[9px] font-black text-slate-400 uppercase block leading-none">{p.name}</span>
                         <span className="text-xs font-bold text-slate-800 uppercase tracking-tighter">{p.hours} Engineering Hours</span>
                       </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Infrastructure Costs */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-black text-blue-900 mb-6 flex items-center gap-2 uppercase tracking-tight"><Cpu size={20} className="text-blue-900" /> Tech Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={INFRA_MONTHLY} margin={{ left: 20, right: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="component" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 9, fontWeight: 800 }} />
                      <YAxis hide />
                      <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                      <Line type="stepAfter" name="Monthly OpEx" dataKey="cost" stroke={COLORS.primary} strokeWidth={4} dot={{r: 6, fill: COLORS.primary, strokeWidth: 2, stroke: '#fff'}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl mt-4 border border-slate-100">
                   <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">Cloud expenditure scales elastically with recruitment load.</p>
                </div>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="bg-black text-white p-10 rounded-2xl relative overflow-hidden border border-slate-800">
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 blur-[150px] rounded-full" />
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="bg-blue-900 p-2.5 rounded-xl border border-blue-800"><Activity size={24} /></div>
                    <div>
                      <h2 className="text-2xl font-black tracking-tighter uppercase italic">The ARCIS Engine Architecture</h2>
                      <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">Robust • Scalable • Secure</p>
                    </div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { title: "Core AI Logic", items: ["Custom-tuned Llama 3 8B", "Vector Embedding Database", "Contextual Scoring Engine"] },
                      { title: "Scale-Out Infra", items: ["AWS Multi-Region Edge", "Elastic Load Balancing", "High-Availability RDS"] },
                      { title: "Data Security", items: ["Isolated VPC Environment", "PII Redaction Layer", "End-to-End Encryption"] }
                    ].map((section, idx) => (
                      <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                        <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4 border-b border-white/10 pb-2">{section.title}</h4>
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-slate-300 text-xs flex items-center gap-2 font-bold uppercase tracking-tight">
                              <div className="w-1 h-1 bg-blue-500 rounded-full" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                 </div>
               </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-12 bg-white border-t border-slate-200 shadow-2xl shadow-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 opacity-80">
            <ShieldCheck size={24} className="text-blue-900" />
            <div>
              <span className="font-black text-blue-900 text-sm tracking-tight block leading-none uppercase italic">ARCIS STAFFING SOLUTION</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">A PROPOSAL FOR STRATEGIC TRANSFORMATION</span>
            </div>
          </div>
          <p className="text-slate-400 text-[9px] font-black tracking-[0.2em] uppercase max-w-xs text-center md:text-right leading-relaxed">
            PROPRIETARY INFORMATION • PREPARED FOR EXECUTIVE REVIEW • © 2025 ARCIS built by Mechevo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
