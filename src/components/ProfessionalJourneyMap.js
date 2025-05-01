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

  // Map years to x-coordinates
  const yearToX = {
    "2009": 100,
    "2013": 160,
    "2015": 260,
    "2017": 360,
    "2019": 460,
    "2020": 520,
    "2021": 580,
    "2022": 640,
    "2023": 700,
    "2024": 760
  };

  // Skill lines configuration with improved spacing
  const skillLines = [
    { 
      name: "Product Leadership", 
      color: "#3b82f6", // blue
      y: 140,
      stations: [
        { x: yearToX["2015"], y: 140, year: "2015", label: "Product Role Offered", achievements: [] },
        { x: yearToX["2017"], y: 140, year: "2017", label: "Product Management", achievements: [] },
        { x: yearToX["2020"], y: 140, year: "2020", label: "Features Delivery", achievements: [1, 15, 16] },
        { x: yearToX["2021"], y: 140, year: "2021", label: "Sales Enablement", achievements: [2] },
        { x: yearToX["2022"], y: 140, year: "2022", label: "Product Leadership", achievements: [12] },
        { x: yearToX["2023"], y: 140, year: "2023", label: "Strategic Direction", achievements: [] }
      ]
    },
    { 
      name: "Technology Modernization", 
      color: "#10b981", // emerald
      y: 260,
      stations: [
        { x: yearToX["2013"], y: 260, year: "2013", label: "Technical Support", achievements: [] },
        { x: yearToX["2017"], y: 260, year: "2017", label: "Technical Expertise", achievements: [] },
        { x: yearToX["2019"], y: 260, year: "2019", label: "UX Modernization", achievements: [5, 18] },
        { x: yearToX["2020"], y: 260, year: "2020", label: "SAFe Implementation", achievements: [8] },
        { x: yearToX["2021"], y: 260, year: "2021", label: "SDK Automation", achievements: [7, 13] },
        { x: yearToX["2022"], y: 260, year: "2022", label: "Cloud Migration", achievements: [3] },
        { x: yearToX["2023"], y: 260, year: "2023", label: "AI/ML Integration", achievements: [4, 6, 14] }
      ]
    },
    { 
      name: "Client Success", 
      color: "#8b5cf6", // violet
      y: 380,
      stations: [
        { x: yearToX["2015"], y: 380, year: "2015", label: "Client Support", achievements: [] },
        { x: yearToX["2019"], y: 380, year: "2019", label: "Knowledge Management", achievements: [18] },
        { x: yearToX["2020"], y: 380, year: "2020", label: "Advisory Boards", achievements: [16] },
        { x: yearToX["2021"], y: 380, year: "2021", label: "Client Workshops", achievements: [2] },
        { x: yearToX["2022"], y: 380, year: "2022", label: "Fortune 500 Advisor", achievements: [9, 10, 17] },
        { x: yearToX["2023"], y: 380, year: "2023", label: "Enterprise Deployments", achievements: [] }
      ]
    },
    { 
      name: "Data & Analytics", 
      color: "#ec4899", // pink
      y: 500,
      stations: [
        { x: yearToX["2018"], y: 500, year: "2018", label: "Process Optimization", achievements: [] },
        { x: yearToX["2020"], y: 500, year: "2020", label: "Profile Analysis", achievements: [19] },
        { x: yearToX["2021"], y: 500, year: "2021", label: "Telemetry Dashboards", achievements: [11, 13] },
        { x: yearToX["2022"], y: 500, year: "2022", label: "Customer Insights", achievements: [12] },
        { x: yearToX["2023"], y: 500, year: "2023", label: "AI/ML Analytics", achievements: [6, 14] }
      ]
    }
  ];

  // Timeline markers (years)
  const timelineYears = [2013, 2015, 2017, 2019, 2020, 2021, 2022, 2023, 2024];

  // Get achievement by ID
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

  // Toggle education degrees
  const [selectedDegree, setSelectedDegree] = useState(null);

  // Reset everything when Show All is clicked
  const showAll = () => {
    setHighlightedSkill(null);
    setSelectedStation(null);
    setSelectedDegree(null);
  };

  // Close achievement details
  const closeDetails = () => {
    setSelectedStation(null);
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-light mb-2">Professional Journey Map</h2>
      <p className="text-gray-600 mb-4">Explore my career progression across different skill domains</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {skillLines.map((line, i) => (
          <button 
            key={i} 
            className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all border"
            style={{ 
              backgroundColor: highlightedSkill === line.name ? `${line.color}30` : `${line.color}10`,
              borderColor: line.color,
              boxShadow: highlightedSkill === line.name ? `0 0 0 2px ${line.color}40` : 'none'
            }}
            onClick={() => setHighlightedSkill(line.name === highlightedSkill ? null : line.name)}
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
          onClick={showAll}
        >
          <span className="text-sm font-medium">Show All</span>
        </button>
      </div>
      
      <div className="relative border rounded-lg shadow-sm overflow-hidden">
        <svg width="100%" height="650" viewBox="0 0 850 650" preserveAspectRatio="xMidYMid meet">
          {/* Background grid */}
          <g className="timeline-grid">
            {timelineYears.map((year, i) => {
              const x = yearToX[year.toString()];
              return (
                <g key={year}>
                  <line 
                    x1={x} 
                    y1="60" 
                    x2={x} 
                    y2="580" 
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
            
            {/* Horizontal guide lines */}
            {[140, 260, 380, 500].map((y, i) => (
              <line 
                key={i} 
                x1="90" 
                y1={y} 
                x2="770" 
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
              return (
                <text 
                  key={i} 
                  x="60" 
                  y={line.y} 
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
            
            // Create path points from stations
            const pathPoints = line.stations.map((station, i) => 
              `${i === 0 ? 'M' : 'L'}${station.x},${station.y}`
            ).join(' ');
            
            return (
              <g 
                key={lineIndex} 
                className="skill-line"
                opacity={isHighlighted ? 1 : 0.3}
                style={{ transition: "opacity 0.3s ease" }}
              >
                {/* Line path */}
                <path 
                  d={pathPoints} 
                  fill="none" 
                  stroke={line.color} 
                  strokeWidth={isHighlighted ? 5 : 3} 
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
                        r={hasAchievements ? 8 : 6}
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
                          r={4}
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
                            {station.achievements.length} {station.achievements.length === 1 ? 'achievement' : 'achievements'}
                          </text>
                        )}
                      </g>
                    </g>
                  );
                })}
              </g>
            );
          })}
          
          {/* Career highlights */}
          <g className="career-highlights">
            {[
              { x: yearToX["2013"], y: 200, label: "Joined Hexagon", year: "2013" },
              { x: yearToX["2017"], y: 100, label: "Product Management", year: "2018" },
              { x: yearToX["2022"], y: 200, label: "Smart 3D Overhaul", year: "2022" },
              { x: yearToX["2023"], y: 200, label: "Cloud & AI Initiatives", year: "2023" }
            ].map((highlight, i) => (
              <g key={i} className="career-highlight">
                <line 
                  x1={highlight.x} 
                  y1={highlight.y - 25} 
                  x2={highlight.x} 
                  y2={highlight.y - 10} 
                  stroke="#6b7280" 
                  strokeWidth="1" 
                />
                <circle 
                  cx={highlight.x} 
                  cy={highlight.y - 30} 
                  r={5}
                  fill="#6b7280" 
                />
                <rect 
                  x={highlight.x - 60} 
                  y={highlight.y - 60} 
                  width="120" 
                  height="25" 
                  rx="4"
                  fill="#f3f4f6"
                  stroke="#d1d5db"
                />
                <text 
                  x={highlight.x} 
                  y={highlight.y - 45} 
                  textAnchor="middle" 
                  className="text-xs font-medium" 
                  fill="#374151"
                >
                  {highlight.label}
                </text>
              </g>
            ))}
          </g>
          
          {/* Education section */}
          <g className="education-section">
            <text 
              x="60" 
              y="600" 
              textAnchor="end" 
              className="text-xs font-semibold" 
              fill="#6b7280"
            >
              Education
            </text>
            
            {/* Bachelor's degree */}
            <circle 
              cx={yearToX["2009"]} 
              cy="600" 
              r={selectedDegree === "bachelor" ? 11 : 8}
              fill={selectedDegree === "bachelor" ? "#f3f4f6" : "white"} 
              stroke="#9ca3af"
              strokeWidth={selectedDegree === "bachelor" ? 2 : 1}
              onClick={() => setSelectedDegree(selectedDegree === "bachelor" ? null : "bachelor")}
              className="cursor-pointer"
            />
            <text 
              x={yearToX["2009"]} 
              y="630" 
              textAnchor="middle" 
              className="text-xs" 
              fill="#4b5563"
            >
              Bachelor's Degree
            </text>
            <text 
              x={yearToX["2009"]} 
              y="645" 
              textAnchor="middle" 
              className="text-xs" 
              fill="#6b7280"
            >
              2009
            </text>
            
            {/* Master's degree */}
            <circle 
              cx={yearToX["2013"]} 
              cy="600" 
              r={selectedDegree === "master" ? 11 : 8}
              fill={selectedDegree === "master" ? "#f3f4f6" : "white"} 
              stroke="#9ca3af"
              strokeWidth={selectedDegree === "master" ? 2 : 1}
              onClick={() => setSelectedDegree(selectedDegree === "master" ? null : "master")}
              className="cursor-pointer"
            />
            <text 
              x={yearToX["2013"]} 
              y="630" 
              textAnchor="middle" 
              className="text-xs" 
              fill="#4b5563"
            >
              Master's Degree
            </text>
            <text 
              x={yearToX["2013"]} 
              y="645" 
              textAnchor="middle" 
              className="text-xs" 
              fill="#6b7280"
            >
              2013
            </text>
            
            {/* Education details */}
            {selectedDegree === "bachelor" && (
              <g>
                <rect 
                  x={yearToX["2009"] - 80} 
                  y="550" 
                  width="160" 
                  height="40" 
                  rx="4"
                  fill="white"
                  stroke="#d1d5db"
                />
                <text 
                  x={yearToX["2009"]} 
                  y="570" 
                  textAnchor="middle" 
                  className="text-xs font-medium" 
                  fill="#374151"
                >
                  NIT Rourkela
                </text>
                <text 
                  x={yearToX["2009"]} 
                  y="585" 
                  textAnchor="middle" 
                  className="text-xs" 
                  fill="#6b7280"
                >
                  Engineering
                </text>
              </g>
            )}
            
            {selectedDegree === "master" && (
              <g>
                <rect 
                  x={yearToX["2013"] - 80} 
                  y="550" 
                  width="160" 
                  height="40" 
                  rx="4"
                  fill="white"
                  stroke="#d1d5db"
                />
                <text 
                  x={yearToX["2013"]} 
                  y="570" 
                  textAnchor="middle" 
                  className="text-xs font-medium" 
                  fill="#374151"
                >
                  NC State University
                </text>
                <text 
                  x={yearToX["2013"]} 
                  y="585" 
                  textAnchor="middle" 
                  className="text-xs" 
                  fill="#6b7280"
                >
                  Engineering
                </text>
              </g>
            )}
          </g>
        </svg>
        
        {/* Achievement details overlay */}
        {selectedStation && (
          <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full">
              <div 
                className="w-full h-2 rounded-full mb-4" 
                style={{ backgroundColor: selectedStation.line.color }}
              ></div>
              
              <h3 className="text-xl font-medium mb-1">{selectedStation.station.label}</h3>
              <p className="text-gray-500 mb-4">{selectedStation.station.year} • {selectedStation.line.name}</p>
              
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
                {selectedStation.station.achievements.map(achievementId => {
                  const achievement = getAchievementById(achievementId);
                  if (!achievement) return null;
                  
                  return (
                    <div 
                      key={achievement.id} 
                      className="border-l-4 pl-4 py-2" 
                      style={{ borderColor: selectedStation.line.color }}
                    >
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
      
      <div className="mt-4 bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
        <h3 className="font-medium text-gray-800 mb-2">How to use this map</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Click on skill buttons at the top to highlight specific career paths</li>
          <li>Click on stations with solid centers to view achievement details</li>
          <li>Click on the education circles to see degree details</li>
          <li>Click "Show All" to reset the view</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalJourneyMap;