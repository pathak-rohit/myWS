import React, { useState } from 'react';

const VerticalJourneyMap = () => {
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Achievement data from Excel table
  const achievements = [
    {
      id: 1,
      achievement: "Shipped high-priority features 12 months early, unlocking earlier revenue streams.",
      category: "Revenue Acceleration",
      skillArea: "Product Delivery & Roadmapping",
      year: "2020"
    },
    {
      id: 2,
      achievement: "Shortened sales cycles via 100+ demos/workshops, fast-tracking customer commitment.",
      category: "Revenue Acceleration",
      skillArea: "Go-to-Market Enablement",
      year: "2021"
    },
    {
      id: 3,
      achievement: "Moved flagship functionality to a browser-based cloud UI, opening new market segments.",
      category: "Market Expansion",
      skillArea: "Cloud Migration & Architecture",
      year: "2022"
    },
    {
      id: 4,
      achievement: "Engineered third-party integrations creating a hybrid ecosystem across industries.",
      category: "Market Expansion",
      skillArea: "Integration Architecture",
      year: "2023"
    },
    {
      id: 5,
      achievement: "Cut core workflows 30% with a design-system-driven UX and tech overhaul.",
      category: "Efficiency & Productivity Gain",
      skillArea: "UX Design & Modernization",
      year: "2019"
    },
    {
      id: 6,
      achievement: "Automated complex 3D-design tasks with AI/ML, reducing manual effort 70%.",
      category: "Efficiency & Productivity Gain",
      skillArea: "AI / ML Automation",
      year: "2023"
    },
    {
      id: 7,
      achievement: "Eliminated 80% of repetitive support tasks through SDK-driven automation utilities.",
      category: "Efficiency & Productivity Gain",
      skillArea: "Automation & Scripting",
      year: "2021"
    },
    {
      id: 8,
      achievement: "Boosted on-time releases 25% by scaling SAFe across 10 global teams.",
      category: "Delivery Predictability",
      skillArea: "Agile / SAFe Transformation",
      year: "2020"
    },
    {
      id: 9,
      achievement: "Accelerated onboarding and adoption through 100+ global demos and workshops.",
      category: "Customer Adoption & Satisfaction",
      skillArea: "Go-to-Market Enablement",
      year: "2022"
    },
    {
      id: 10,
      achievement: "Trusted advisor to Fortune 500 clients, resolving mission-critical challenges.",
      category: "Customer Adoption & Satisfaction",
      skillArea: "Enterprise Client Management",
      year: "2022"
    },
    {
      id: 11,
      achievement: "Institutionalized telemetry dashboards, enabling evidence-based prioritization.",
      category: "Data-Driven Decisions",
      skillArea: "Product Analytics",
      year: "2021"
    },
    {
      id: 12,
      achievement: "Formed global customer advisory groups funneling insights directly into the roadmap.",
      category: "Data-Driven Decisions",
      skillArea: "Customer Insights & Engagement",
      year: "2022"
    },
    {
      id: 13,
      achievement: "Accelerated feature delivery 2–3×, saving millions in projected labor/R&D costs.",
      category: "Cost Savings & Operational Efficiency",
      skillArea: "DevOps Operations Optimization",
      year: "2021"
    },
    {
      id: 14,
      achievement: "Incubated reinforcement-learning racewar router and LLM orchestrator pilots.",
      category: "Innovation & Technical Leadership",
      skillArea: "R&D / Emerging Tech",
      year: "2023"
    },
    {
      id: 15,
      achievement: "Directed the global roadmap for 4 teams (~30 engineers) across UX, dev, QA, GTM.",
      category: "Stakeholder & Cross-Functional Leadership",
      skillArea: "Product Leadership",
      year: "2021"
    },
    {
      id: 16,
      achievement: "Formed customer advisory boards on three continents to align priorities.",
      category: "Stakeholder & Cross-Functional Leadership",
      skillArea: "Customer Insights & Engagement",
      year: "2020"
    },
    {
      id: 17,
      achievement: "Served as the go-to fixer for mission-critical, high-risk enterprise deployments.",
      category: "Quality, Reliability & Risk Mitigation",
      skillArea: "Enterprise Client Management",
      year: "2022"
    },
    {
      id: 18,
      achievement: "Authored 150+ technical articles, reducing support ticket volume and preserving knowledge.",
      category: "Knowledge Management & Enablement",
      skillArea: "Knowledge Management",
      year: "2019"
    },
    {
      id: 19,
      achievement: "Used profile analysis and role segmentation to refine backlog grooming and sprint focus.",
      category: "Data-Driven Decisions",
      skillArea: "Product Analytics",
      year: "2020"
    }
  ];

  // Career milestones
  const milestones = [
    {
      id: "edu-1",
      type: "education",
      year: "2009",
      title: "Bachelor's Degree",
      subtitle: "NIT Rourkela",
      description: "Engineering",
    },
    {
      id: "work-1",
      type: "work",
      year: "2009-2011",
      title: "Process Engineer at Nestle",
      description: "Process Control, LEAN, Six Sigma"
    },
    {
      id: "edu-2",
      type: "education",
      year: "2013",
      title: "Master's Degree",
      subtitle: "NC State University",
      description: "Engineering",
    },
    {
      id: "work-2",
      type: "work",
      year: "2013",
      title: "Joined Hexagon AB",
      description: "Top support analyst for Intergraph Smart 3D"
    },
    {
      id: "work-3",
      type: "work",
      year: "2015",
      title: "Offered Role in Product Management",
      description: "Recognized for technical knowledge and leadership potential"
    },
    {
      id: "work-4",
      type: "work",
      year: "2018",
      title: "Product Management in India",
      description: "Relocated to lead core initiatives for the flagship product"
    },
    {
      id: "work-5",
      type: "work",
      year: "2018-2022",
      title: "Product Owner & Leader for Smart 3D",
      description: "Led the modernization of Smart 3D with new technology and UX redesign"
    },
    {
      id: "work-6",
      type: "work",
      year: "2022-2024",
      title: "Cloud Migration & AI Initiatives",
      description: "Leading AI enhancements and cloud migration to MS Azure"
    }
  ];

  // Combine milestones and achievements into a timeline
  const timelineItems = [
    ...milestones,
    ...achievements.map(a => ({
      ...a,
      type: "achievement",
      year: a.year,
      title: a.achievement
    }))
  ].sort((a, b) => {
    // Extract first year if there's a range
    const yearA = parseInt(a.year.split('-')[0]);
    const yearB = parseInt(b.year.split('-')[0]);
    return yearA - yearB;
  });

  // Group timeline items by year
  const timelineByYear = timelineItems.reduce((acc, item) => {
    const year = item.year.split('-')[0]; // Use first year if there's a range
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {});

  // Define skill domains with colors
  const skillDomains = [
    { name: "Product Leadership", color: "#3b82f6" }, // blue
    { name: "Technology Modernization", color: "#10b981" }, // emerald
    { name: "Client Success", color: "#8b5cf6" }, // violet
    { name: "Data & Analytics", color: "#ec4899" } // pink
  ];

  // Map skill areas to domains
  const skillAreaToDomain = {
    "Product Delivery & Roadmapping": "Product Leadership",
    "Go-to-Market Enablement": "Product Leadership",
    "Cloud Migration & Architecture": "Technology Modernization",
    "Integration Architecture": "Technology Modernization",
    "UX Design & Modernization": "Technology Modernization",
    "AI / ML Automation": "Technology Modernization",
    "Automation & Scripting": "Technology Modernization",
    "Agile / SAFe Transformation": "Technology Modernization",
    "Enterprise Client Management": "Client Success",
    "Knowledge Management": "Client Success",
    "Customer Insights & Engagement": "Client Success",
    "Product Analytics": "Data & Analytics",
    "DevOps Operations Optimization": "Technology Modernization",
    "R&D / Emerging Tech": "Technology Modernization",
    "Product Leadership": "Product Leadership"
  };

  // Get color for skill area
  const getColorForSkillArea = (skillArea) => {
    const domain = skillAreaToDomain[skillArea];
    const domainObj = skillDomains.find(d => d.name === domain);
    return domainObj ? domainObj.color : "#6b7280"; // gray fallback
  };

  // Get color for item type
  const getColorForItemType = (item) => {
    if (item.type === "education") return "#6b7280"; // gray
    if (item.type === "work") return "#1f2937"; // dark gray
    if (item.type === "achievement") {
      return getColorForSkillArea(item.skillArea);
    }
    return "#6b7280"; // fallback
  };

  // Reset filters
  const showAll = () => {
    setHighlightedSkill(null);
    setSelectedItem(null);
  };

  // Filter timeline items by skill domain
  const filteredYears = Object.entries(timelineByYear).filter(([year, items]) => {
    if (!highlightedSkill) return true;
    
    return items.some(item => {
      if (item.type !== "achievement") return true;
      const domain = skillAreaToDomain[item.skillArea];
      return domain === highlightedSkill;
    });
  });

  // Show details for an item
  const showItemDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-light mb-2">Professional Journey Map</h2>
      <p className="text-gray-600 mb-4">Explore my career progression across different skill domains</p>
      
      {/* Skill domain filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {skillDomains.map((domain, i) => (
          <button 
            key={i} 
            className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all border"
            style={{ 
              backgroundColor: highlightedSkill === domain.name ? `${domain.color}30` : `${domain.color}10`,
              borderColor: domain.color,
              boxShadow: highlightedSkill === domain.name ? `0 0 0 2px ${domain.color}40` : 'none'
            }}
            onClick={() => setHighlightedSkill(highlightedSkill === domain.name ? null : domain.name)}
          >
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: domain.color }}
            ></span>
            <span className="text-sm font-medium">{domain.name}</span>
          </button>
        ))}
        <button 
          className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all bg-gray-100 border border-gray-300"
          onClick={showAll}
        >
          <span className="text-sm font-medium">Show All</span>
        </button>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <span className="text-xs">Career Milestone</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <span className="text-xs">Education</span>
        </div>
        {skillDomains.map((domain, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: domain.color }}></div>
            <span className="text-xs">{domain.name}</span>
          </div>
        ))}
      </div>
      
      {/* Vertical Timeline */}
      <div className="relative border rounded-lg shadow-sm overflow-hidden p-4">
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          {/* Timeline items by year */}
          {filteredYears.map(([year, items]) => (
            <div key={year} className="mb-8">
              {/* Year marker */}
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center z-10 mr-4">
                  <span className="text-lg font-bold text-gray-700">{year}</span>
                </div>
                <div className="h-0.5 flex-grow bg-gray-200"></div>
              </div>
              
              {/* Items for this year */}
              <div className="space-y-4 ml-20">
                {items.filter(item => {
                  if (!highlightedSkill) return true;
                  if (item.type !== "achievement") return true;
                  
                  const domain = skillAreaToDomain[item.skillArea];
                  return domain === highlightedSkill;
                }).map((item) => {
                  const itemColor = getColorForItemType(item);
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`relative p-4 rounded-lg border-l-4 cursor-pointer transition-all ${
                        selectedItem?.id === item.id 
                          ? 'bg-gray-50 shadow-md' 
                          : 'bg-white hover:bg-gray-50'
                      }`}
                      style={{ borderLeftColor: itemColor }}
                      onClick={() => showItemDetails(item)}
                    >
                      {/* Item connector to timeline */}
                      <div className="absolute -left-16 top-1/2 w-12 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                      <div className="absolute -left-20 top-1/2 w-4 h-4 rounded-full transform -translate-y-1/2 border-2 border-white"
                           style={{ backgroundColor: itemColor }}></div>
                      
                      {/* Item content */}
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                          {item.type === "achievement" && (
                            <span 
                              className="text-xs px-2 py-1 rounded-full"
                              style={{ 
                                backgroundColor: `${itemColor}15`,
                                color: itemColor
                              }}
                            >
                              {item.skillArea}
                            </span>
                          )}
                        </div>
                        
                        {/* Display different content based on item type */}
                        {item.type === "education" && (
                          <div className="mt-1">
                            <p className="text-sm font-medium text-gray-700">{item.subtitle}</p>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                        )}
                        
                        {item.type === "work" && (
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        )}
                        
                        {item.type === "achievement" && (
                          <div className="mt-1">
                            <span className="text-xs inline-block px-2 py-0.5 bg-gray-100 rounded text-gray-800 mr-2">
                              {item.category}
                            </span>
                          </div>
                        )}
                        
                        {/* Expanded details when selected */}
                        {selectedItem?.id === item.id && item.type === "achievement" && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <p className="text-sm text-gray-700">{item.achievement}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
        <h3 className="font-medium text-gray-800 mb-2">How to use this timeline</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Click on skill buttons at the top to filter by domain</li>
          <li>Click on any timeline item to see more details</li>
          <li>Click "Show All" to view your complete journey</li>
        </ul>
      </div>
    </div>
  );
};

export default VerticalJourneyMap;