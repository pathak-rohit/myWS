import React, { useState } from 'react';
import './AchievementsTable.css';
import { 
  Search,
  Award
} from 'lucide-react';

const FullAchievementsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
  // All 19 achievements from your Excel sheet
  const achievements = [
    {
      achievement: "Shipped high-priority features 12 months early, unlocking earlier revenue streams.",
      category: "Revenue Acceleration",
      skillArea: "Product Delivery & Roadmapping"
    },
    {
      achievement: "Shortened sales cycles via 100+ demos/workshops, fast-tracking customer commitment.",
      category: "Revenue Acceleration",
      skillArea: "Go-to-Market Enablement"
    },
    {
      achievement: "Moved flagship functionality to a browser-based cloud UI, opening new market segments.",
      category: "Market Expansion",
      skillArea: "Cloud Migration & Architecture"
    },
    {
      achievement: "Engineered third-party integrations creating a hybrid ecosystem across industries.",
      category: "Market Expansion",
      skillArea: "Integration Architecture"
    },
    {
      achievement: "Cut core workflows 30% with a design-system-driven UX and tech overhaul.",
      category: "Efficiency & Productivity Gain",
      skillArea: "UX Design & Modernization"
    },
    {
      achievement: "Automated complex 3D-design tasks with AI/ML, reducing manual effort 70%.",
      category: "Efficiency & Productivity Gain",
      skillArea: "AI / ML Automation"
    },
    {
      achievement: "Eliminated 80% of repetitive support tasks through SDK-driven automation utilities.",
      category: "Efficiency & Productivity Gain",
      skillArea: "Automation & Scripting"
    },
    {
      achievement: "Boosted on-time releases 25% by scaling SAFe across 10 global teams.",
      category: "Delivery Predictability",
      skillArea: "Agile / SAFe Transformation"
    },
    {
      achievement: "Accelerated onboarding and adoption through 100+ global demos and workshops.",
      category: "Customer Adoption & Satisfaction",
      skillArea: "Go-to-Market Enablement"
    },
    {
      achievement: "Trusted advisor to Fortune 500 clients, resolving mission-critical challenges.",
      category: "Customer Adoption & Satisfaction",
      skillArea: "Enterprise Client Management"
    },
    {
      achievement: "Institutionalized telemetry dashboards, enabling evidence-based prioritization.",
      category: "Data-Driven Decisions",
      skillArea: "Product Analytics"
    },
    {
      achievement: "Formed global customer advisory groups funneling insights directly into the roadmap.",
      category: "Data-Driven Decisions",
      skillArea: "Customer Insights & Engagement"
    },
    {
      achievement: "Accelerated feature delivery 2–3×, saving millions in projected labor/R&D costs.",
      category: "Cost Savings & Operational Efficiency",
      skillArea: "DevOps Operations Optimization"
    },
    {
      achievement: "Incubated reinforcement-learning racewar router and LLM orchestrator pilots.",
      category: "Innovation & Technical Leadership",
      skillArea: "R&D / Emerging Tech"
    },
    {
      achievement: "Directed the global roadmap for 4 teams (~30 engineers) across UX, dev, QA, GTM.",
      category: "Stakeholder & Cross-Functional Leadership",
      skillArea: "Product Leadership"
    },
    {
      achievement: "Formed customer advisory boards on three continents to align priorities.",
      category: "Stakeholder & Cross-Functional Leadership",
      skillArea: "Customer Insights & Engagement"
    },
    {
      achievement: "Served as the go-to fixer for mission-critical, high-risk enterprise deployments.",
      category: "Quality, Reliability & Risk Mitigation",
      skillArea: "Enterprise Client Management"
    },
    {
      achievement: "Authored 150+ technical articles, reducing support ticket volume and preserving knowledge.",
      category: "Knowledge Management & Enablement",
      skillArea: "Knowledge Management"
    },
    {
      achievement: "Used profile analysis and role segmentation to refine backlog grooming and sprint focus.",
      category: "Data-Driven Decisions",
      skillArea: "Product Analytics"
    }
  ];
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(achievements.map(item => item.category))];
  
  // Filter achievements based on search and category
  const filteredAchievements = achievements.filter(item => {
    const matchesSearch = item.achievement.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.skillArea.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-2xl font-light flex items-center">
            <Award className="w-6 h-6 mr-2 text-gray-500" />
            Key Achievements
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search achievements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
              />
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border rounded-md text-sm focus:ring-1 focus:ring-gray-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Achievement
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impact Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skill Area
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAchievements.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-normal text-sm text-gray-800">
                    {item.achievement}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.skillArea}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullAchievementsTable;