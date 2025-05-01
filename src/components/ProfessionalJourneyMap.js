import React, { useState } from 'react';

const ProfessionalJourneyMap = () => {
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  
  // Timeline data (from existing website)
  const timelineEvents = [
    {
      year: "2022-2024",
      title: "Driving Cloud Migration & AI Initiatives",
      description: "Driving AI enhancements and cloud migration to multi-tenant PaaS on MS Azure"
    },
    {
      year: "2018-2022",
      title: "Product Owner & Leader for Major Overhaul of Smart 3D",
      description: "Led the end-to-end modernization of Smart 3D, including a complete migration to new technology and a major UX redesign."
    },
    {
      year: "2018",
      title: "Product Management Role Offered Again — Requested Transfer to India",
      description: "Relocated to India to lead core initiatives for the flagship product."
    },
    {
      year: "2015",
      title: "Offered Role in Product Management",
      description: "Recognized for strong technical knowledge and leadership potential but chose to continue building technical expertise."
    },
    {
      year: "2013",
      title: "Joined Hexagon AB",
      description: "Top support analyst for one of the world's most complex software products - Intergraph Smart 3D."
    },
    {
      year: "2013",
      title: "Master's Degree",
      description: "Graduated from from one of America's top engineering schools (NC State)"
    },
    {
      year: "2009-2011",
      title: "Process Engineer at Nestle",
      description: "Process Control, LEAN, Six Sigma"
    },
    {
      year: "2009",
      title: "Bachelor's Degree",
      description: "Graduated from one of India's top engineering colleges (NIT Rourkela)"
    }
  ];

  // Achievement data (from Excel table)
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

  // Skill lines configuration - fully mapped to all achievements
  const skillLines = [
    { 
      name: "Product Leadership", 
      color: "#3b82f6", // blue
      pathPoints: "M100,150 L200,150 L300,150 L450,150 L650,150 L750,150",
      stations: [
        { x: 175, y: 150, year: "2015", label: "Product Role Offered", achievements: [] },
        { x: 300, y: 150, year: "2018", label: "Product Management", achievements: [] },
        { x: 400, y: 150, year: "2020", label: "Features Delivery", achievements: [1, 15, 16] },
        { x: 500, y: 150, year: "2021", label: "Sales Enablement", achievements: [2] },
        { x: 600, y: 150, year: "2022", label: "Product Leadership", achievements: [12] },
        { x: 700, y: 150, year: "2023", label: "Strategic Direction", achievements: [] }
      ]
    },
    { 
      name: "Technology Modernization", 
      color: "#10b981", // emerald
      pathPoints: "M100,250 L200,250 L350,250 L500,250 L650,250 L750,250",
      stations: [
        { x: 150, y: 250, year: "2013", label: "Technical Support", achievements: [] },
        { x: 250, y: 250, year: "2017", label: "Technical Expertise", achievements: [] },
        { x: 350, y: 250, year: "2019", label: "UX Modernization", achievements: [5, 18] },
        { x: 450, y: 250, year: "2020", label: "SAFe Implementation", achievements: [8] },
        { x: 550, y: 250, year: "2021", label: "SDK Automation", achievements: [7, 13] },
        { x: 650, y: 250, year: "2022", label: "Cloud Migration", achievements: [3] },
        { x: 730, y: 250, year: "2023", label: "AI/ML Integration", achievements: [4, 6, 14] }
      ]
    },
    { 
      name: "Client Success", 
      color: "#8b5cf6", // violet
      pathPoints: "M100,350 L250,350 L400,350 L550,350 L650,350 L750,350",
      stations: [
        { x: 175, y: 350, year: "2015", label: "Client Support", achievements: [] },
        { x: 325, y: 350, year: "2019", label: "Knowledge Management", achievements: [18] },
        { x: 400, y: 350, year: "2020", label: "Advisory Boards", achievements: [16] },
        { x: 500, y: 350, year: "2021", label: "Client Workshops", achievements: [2] },
        { x: 600, y: 350, year: "2022", label: "Fortune 500 Advisor", achievements: [9, 10, 17] },
        { x: 700, y: 350, year: "2023", label: "Enterprise Deployments", achievements: [] }
      ]
    },
    { 
      name: "Data & Analytics", 
      color: "#ec4899", // pink
      pathPoints: "M250,450 L375,450 L475,450 L575,450 L675,450 L750,450",
      stations: [
        { x: 300, y: 450, year: "2018", label: "Process Optimization", achievements: [] },
        { x: 400, y: 450, year: "2020", label: "Profile Analysis", achievements: [19] },
        { x: 500, y: 450, year: "2021", label: "Telemetry Dashboards", achievements: [11, 13] },
        { x: 600, y: 450, year: "2022", label: "Customer Insights", achievements: [12] },
        { x: 700, y: 450, year: "2023", label: "AI/ML Analytics", achievements: [6, 14] }
      ]
    }
  ];

  // Timeline markers (years)
  const timelineYears = [2013, 2015, 2017, 2019, 2020, 2021, 2022, 2023, 2024];

  // Get X coordinate for a given year
  const getXForYear = (year) => {
    const startYear = 2013;
    const endYear = 2024;
    const startX = 100;
    const endX = 750;
    const yearRange = endYear - startYear;
    const pixelsPerYear = (endX - startX) / yearRange;
    
    return startX + (parseInt(year) - startYear) * pixelsPerYear;
  };

  // Find achievement by ID
  const getAchievementById = (id) => {
    return achievements.find(a => a.id === id);
  };

  // Handle station click
  const handleStationClick = (lineIndex, stationIndex) => {
    setSelectedStation({
      lineIndex,
      stationIndex,
      line: skillLines[lineIndex],
      station: skillLines[lineIndex].stations[stationIndex]
    });
  };

  // Close achievement details
  const closeDetails = () => {
    setSelectedStation(null);
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-light mb-2">Professional Journey Map</h2>
      <p className="text-gray-600 mb-4">Explore my career progression across different skill domains</p>
      
      <div className="flex flex-wrap gap-4 mb-6">
        {skillLines.map((line, i) => (
          <button 
            key={i} 
            className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all"
            style={{ 
              backgroundColor: `${line.color}20`,
              borderColor: line.color,
              borderWidth: 1,
              boxShadow: highlightedSkill === line.name ? `0 0 0 2px ${line.color}40` : 'none'
            }}
            onMouseEnter={() => setHighlightedSkill(line.name)}
            onMouseLeave={() => setHighlightedSkill(null)}
          >
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: line.color }}
            ></span>
            <span className="text-sm font-medium">{line.name}</span>
          </button>
        ))}
        <button 
          className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all bg-gray-100 border border-gray-300"
          onClick={() => setHighlightedSkill(null)}
        >
          <span className="text-sm font-medium">Show All</span>
        </button>
      </div>
      
      <div className="relative border rounded-lg shadow-sm overflow-hidden">
        <svg width="100%" height="580" viewBox="0 0 850 580" preserveAspectRatio="xMidYMid meet">
          {/* Background grid */}
          <g className="timeline-grid">
            {timelineYears.map((year, i) => {
              const x = getXForYear(year);
              return (
                <g key={year}>
                  <line 
                    x1={x} 
                    y1="60" 
                    x2={x} 
                    y2="520" 
                    stroke="#e5e7eb" 
                    strokeWidth="1" 
                    strokeDasharray={year % 2 === 0 ? "none" : "4,4"} 
                  />
                  <text 
                    x={x} 
                    y="40" 
                    textAnchor="middle" 
                    className="text-xs font-medium" 
                    fill="#6b7280"
                  >
                    {year}
                  </text>
                </g>
              );
            })}
            
            {/* Horizontal section separators */}
            {[200, 300, 400].map((y, i) => (
              <line 
                key={i} 
                x1="90" 
                y1={y} 
                x2="760" 
                y2={y} 
                stroke="#e5e7eb" 
                strokeWidth="1" 
                strokeDasharray="2,2" 
              />
            ))}
          </g>
          
          {/* Section labels */}
          <g className="section-labels">
            {skillLines.map((line, i) => {
              const y = 150 + i * 100;
              return (
                <text 
                  key={i} 
                  x="60" 
                  y={y} 
                  textAnchor="end" 
                  alignmentBaseline="middle" 
                  className="text-xs font-semibold" 
                  fill={line.color}
                  opacity={highlightedSkill === line.name || highlightedSkill === null ? 1 : 0.3}
                >
                  {line.name}
                </text>
              );
            })}
          </g>
          
          {/* Skill lines */}
          {skillLines.map((line, lineIndex) => {
            const isHighlighted = highlightedSkill === line.name || highlightedSkill === null;
            return (
              <g 
                key={lineIndex} 
                className="skill-line"
                opacity={isHighlighted ? 1 : 0.3}
                style={{ transition: "opacity 0.3s ease" }}
              >
                {/* Line path */}
                <path 
                  d={line.pathPoints} 
                  fill="none" 
                  stroke={line.color} 
                  strokeWidth={isHighlighted ? 6 : 4} 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: "stroke-width 0.2s ease" }}
                />
                
                {/* Stations */}
                {line.stations.map((station, stationIndex) => {
                  const hasAchievements = station.achievements.length > 0;
                  
                  return (
                    <g 
                      key={`${lineIndex}-${stationIndex}`} 
                      className={`station ${hasAchievements ? 'cursor-pointer' : ''}`}
                      onClick={hasAchievements ? () => handleStationClick(lineIndex, stationIndex) : undefined}
                      style={{ opacity: isHighlighted ? 1 : 0.4, transition: "opacity 0.3s ease" }}
                    >
                      {/* Station circle */}
                      <circle 
                        cx={station.x} 
                        cy={station.y} 
                        r={hasAchievements ? 10 : 6}
                        fill="white" 
                        stroke={line.color} 
                        strokeWidth={hasAchievements ? 3 : 2}
                        style={{ transition: "r 0.2s ease, stroke-width 0.2s ease" }}
                      />
                      
                      {/* Achievement indicator */}
                      {hasAchievements && (
                        <circle 
                          cx={station.x} 
                          cy={station.y} 
                          r={5}
                          fill={line.color}
                        />
                      )}
                      
                      {/* Station label */}
                      <g transform={`translate(${station.x}, ${station.y + 20})`}>
                        <text 
                          textAnchor="middle"
                          className="text-xs font-medium"
                          fill="#374151"
                        >
                          {station.label}
                        </text>
                        
                        {/* Achievement count */}
                        {hasAchievements && (
                          <text 
                            y="16" 
                            textAnchor="middle"
                            className="text-xs"
                            fill="#6b7280"
                          >
                            {station.achievements.length} achievement{station.achievements.length > 1 ? 's' : ''}
                          </text>
                        )}
                      </g>
                      
                      {/* Achievement dots */}
                      {hasAchievements && station.achievements.map((achievementId, i) => {
                        const angle = (i * (360 / station.achievements.length) - 90) * (Math.PI / 180);
                        const radius = 18;
                        const dotX = station.x + Math.cos(angle) * radius;
                        const dotY = station.y + Math.sin(angle) * radius;
                        
                        return (
                          <circle 
                            key={i}
                            cx={dotX}
                            cy={dotY}
                            r={4}
                            fill={line.color}
                            fillOpacity={0.7}
                          />
                        );
                      })}
                    </g>
                  );
                })}
              </g>
            );
          })}
          
          {/* Connections between related stations (transfer points) */}
          <g className="transfer-connections">
            {[
              { x1: 350, y1: 250, x2: 400, y2: 350 }, // UX Modernization to Advisory Boards
              { x1: 400, y1: 150, x2: 400, y2: 350 }, // Features Delivery to Advisory Boards
              { x1: 400, y1: 350, x2: 400, y2: 450 }, // Advisory Boards to Profile Analysis
              { x1: 500, y1: 150, x2: 500, y2: 250 }, // Sales Enablement to SDK Automation
              { x1: 500, y1: 250, x2: 500, y2: 350 }, // SDK Automation to Client Workshops
              { x1: 500, y1: 350, x2: 500, y2: 450 }, // Client Workshops to Telemetry Dashboards
              { x1: 600, y1: 150, x2: 600, y2: 250 }, // Product Leadership to Cloud Migration
              { x1: 600, y1: 250, x2: 600, y2: 350 }, // Cloud Migration to Fortune 500 Advisor
              { x1: 600, y1: 350, x2: 600, y2: 450 }, // Fortune 500 Advisor to Customer Insights
              { x1: 700, y1: 250, x2: 700, y2: 350 }, // AI/ML Integration to Enterprise Deployments
              { x1: 700, y1: 350, x2: 700, y2: 450 }, // Enterprise Deployments to AI/ML Analytics
            ].map((conn, i) => (
              <line 
                key={i}
                x1={conn.x1}
                y1={conn.y1}
                x2={conn.x2}
                y2={conn.y2}
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
            ))}
          </g>
          
          {/* Career highlights from timeline */}
          <g className="career-highlights">
            {[
              { x: 150, y: 250, label: "Joined Hexagon", year: "2013" },
              { x: 300, y: 150, label: "Product Management", year: "2018" },
              { x: 650, y: 250, label: "Smart 3D Overhaul", year: "2022" },
              { x: 730, y: 250, label: "Cloud & AI Initiatives", year: "2023" }
            ].map((highlight, i) => (
              <g key={i} className="career-highlight">
                <line 
                  x1={highlight.x} 
                  y1={highlight.y - 35} 
                  x2={highlight.x} 
                  y2={highlight.y - 15} 
                  stroke="#6b7280" 
                  strokeWidth="1" 
                />
                <circle 
                  cx={highlight.x} 
                  cy={highlight.y - 40} 
                  r={6}
                  fill="#6b7280" 
                />
                <rect 
                  x={highlight.x - 50} 
                  y={highlight.y - 70} 
                  width="100" 
                  height="25" 
                  rx="4"
                  fill="#f3f4f6"
                  stroke="#d1d5db"
                />
                <text 
                  x={highlight.x} 
                  y={highlight.y - 55} 
                  textAnchor="middle" 
                  className="text-xs font-medium" 
                  fill="#374151"
                >
                  {highlight.label}
                </text>
              </g>
            ))}
          </g>
          
          {/* Education markers */}
          <g className="education-markers">
            {[
              { x: 100, y: 530, label: "Bachelor's Degree", year: "2009" },
              { x: 150, y: 530, label: "Master's Degree", year: "2013" }
            ].map((edu, i) => (
              <g key={i} className="education-marker">
                <circle 
                  cx={edu.x} 
                  cy={edu.y} 
                  r={8}
                  fill="#f3f4f6"
                  stroke="#9ca3af"
                  strokeWidth="1"
                />
                <text 
                  x={edu.x} 
                  y={edu.y + 25} 
                  textAnchor="middle" 
                  className="text-xs" 
                  fill="#4b5563"
                >
                  {edu.label}
                </text>
                <text 
                  x={edu.x} 
                  y={edu.y + 40} 
                  textAnchor="middle" 
                  className="text-xs" 
                  fill="#6b7280"
                >
                  {edu.year}
                </text>
              </g>
            ))}
          </g>
        </svg>
        
        {/* Achievement details overlay */}
        {selectedStation && (
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <div 
                className="w-full h-2 rounded-full mb-4" 
                style={{ backgroundColor: selectedStation.line.color }}
              ></div>
              
              <h3 className="text-xl font-medium mb-1">{selectedStation.station.label}</h3>
              <p className="text-gray-500 mb-4">{selectedStation.station.year} • {selectedStation.line.name}</p>
              
              <div className="space-y-4 mb-4">
                {selectedStation.station.achievements.map(achievementId => {
                  const achievement = getAchievementById(achievementId);
                  if (!achievement) return null;
                  
                  return (
                    <div key={achievement.id} className="border-l-4 pl-4 py-1" style={{ borderColor: selectedStation.line.color }}>
                      <p className="text-gray-800">{achievement.achievement}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <button 
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition-colors"
                onClick={closeDetails}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
        <h3 className="font-medium text-gray-800 mb-2">How to use this map</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Hover over skill lines to highlight specific career paths</li>
          <li>Click on stations with solid centers to view achievement details</li>
          <li>Follow the connections between stations to see how skills are related</li>
          <li>Use the buttons at the top to filter by skill domain</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalJourneyMap;