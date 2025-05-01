import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import emailjs from 'emailjs-com';
import ProfessionalJourneyMap from './ProfessionalJourneyMap';
import './ContactForm.css';
import './AchievementsTable.css';
import { 
  Mail,
  Linkedin,
  Boxes,
  Cloud,
  Brain,
  GraduationCap,
  Building2,
  Briefcase,
  Award,
  Search
} from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs.send(
      'service_zgi37dr', // Replace with your EmailJS service ID
      'template_0jpoxc5', // Replace with your EmailJS template ID
      {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message
      },
      'tzAECZGPu-mQ2uEXr' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log('Form submitted:', result.text);
      setIsSubmitted(true);
    }, (error) => {
      console.error('Error:', error.text);
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank you for reaching out!</h2>
          <p>I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Contact Me</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
      )}
    </div>
  );
};

const AchievementsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  
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
  );
};

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2022-2024",
      title: "Driving Cloud Migration & AI Initiatives",
      description: "Driving AI enhancements and cloud migration to multi-tenant PaaS on MS Azure",
      icon: Brain
    },
    {
      year: "2018-2022",
      title: "Product Owner & Leader for Major Overhaul of Smart 3D",
      description: "Led the end-to-end modernization of Smart 3D, including a complete migration to new technology and a major UX redesign. Achieved aggressive milestones and timelines while maintaining high quality standards. Voice of the Customer Award.",
      icon: Briefcase
    },
	{
      year: "2018",
      title: "Product Management Role Offered Again — Requested Transfer to India",
      description: "Relocated to India to lead core initiatives for the flagship product.",
      icon: Briefcase
    },
	{
      year: "2015",
      title: "Offered Role in Product Management",
      description: "Recognized for strong technical knowledge and leadership potential but chose to continue building technical expertise.",
      icon: Briefcase
    },
    {
      year: "2013",
      title: "Joined Hexagon AB",
      description: "Top support analyst for one of the world's most complex software products - Intergraph Smart 3D.",
      icon: Building2
    },
    {
      year: "2013",
      title: "Master's Degree",
      description: "Graduated from from one of America's top engineering schools (NC State)",
      icon: GraduationCap
    },
    {
      year: "2009-2011",
      title: "Process Engineer at Nestle",
      description: "Process Control, LEAN, Six Sigma",
      icon: Building2
    },
    {
      year: "2009",
      title: "Bachelor's Degree",
      description: "Graduated from one of India's top engineering colleges (NIT Rourkela)",
      icon: GraduationCap
    }
  ];

  return (
    <div className="space-y-8">
      {timelineEvents.map((event, index) => {
        const EventIcon = event.icon;
        return (
          <div key={index} className="relative flex items-start gap-4">
            <div className="flex-none">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                <EventIcon className="w-5 h-5 text-gray-600" />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-500">{event.year}</div>
              <h3 className="mt-1 text-lg font-medium">{event.title}</h3>
              <p className="mt-1 text-gray-600">{event.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const MinimalWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Enterprise Software Modernization",
      description: "Modernizing the world's #1 enterprise level design software. Creating new user interaction paradigms, improving productivity by leaps and bounds.",
      icon: Boxes
    },
    {
      title: "Cloud Migration",
      description: "Moving applications to the cloud hosted on an in-house PaaS on top of MS Azure.",
      icon: Cloud
    },
    {
      title: "AI/ML Integration",
      description: "Using Artificial Intelligence and Machine Learning to automate complex workflows and speed up design.",
      icon: Brain
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4">
      <nav className="flex justify-center space-x-8 py-6">
        {['about', 'work', 'contact'].map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`text-sm uppercase tracking-wider ${
              activeSection === section 
                ? 'text-black border-b border-black' 
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      <div className="px-4">
  {activeSection === 'about' && (
    <div className="space-y-12">
      <div className="space-y-6">
        <h1 className="text-3xl font-light">Hello, I am Rohit Pathak.</h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            I am a PM building software that drives heavyweight engineering and large-scale infrastructure projects worldwide.
          </p>
          <p>
            Here is a link to <a href="https://hexagon.com/products/intergraph-smart-3d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">the product</a>
          </p>
          <p>
            If you are a recruiter, you can find my linkedin at the bottom of the page.
          </p>
        </div>
      </div>

      <div className="space-y-12">
  {/* Your existing content */}
  
  <VerticalJourneyMap />
</div>

         
          </div>
        )}

        {activeSection === 'work' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-light">Current Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => {
                const ProjectIcon = project.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <ProjectIcon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {activeSection === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-light">Get in Touch</h2>
            <p className="text-gray-600 leading-relaxed">
              Feel free to reach out if you'd like to talk or just a friendly hello.
            </p>
			<div className="inline-flex items-center space-x-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>write@rohitpathak.com</span>
            </div>
			<p>Or you could also fill up the form below and I will get back to you.</p>
            <ContactForm />
          </div>
        )}
      </div>

      <footer className="py-8 flex justify-center">
        <a 
          href="https://www.linkedin.com/in/pathakrohit/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-black transition-colors flex items-center space-x-2"
        >
          <Linkedin size={20} />
          <span className="text-sm">LinkedIn</span>
        </a>
      </footer>
    </div>
  );
};

export default MinimalWebsite;