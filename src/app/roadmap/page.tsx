import React from 'react';

const experiencedQuery = {
  userType: 'experienced',
  applyingJobDomain: 'frontend development',
  availableTimeWeeks: 8,
  availableCourses: [
    {
      id: 'adv_react_next',
      domain: 'frontend development',
      title: 'Advanced React and Next.js Masterclass',
      duration: 40,
      difficulty: 'advanced',
      url: 'https://example.com/advanced-react-course'
    }
  ],
  skillTestScore: 8
};

const experiencedLearningMap = {
  AdvancedComponentArchitecture: {
    subtopics: [
      'Compound Component Pattern',
      'Render Props',
      'Higher-Order Components',
      'Context API Advanced Usage'
    ],
    recommendedResources: [
      'React Design Patterns by Carlos Santana',
      'Advanced React Component Patterns course on Udemy'
    ],
    practicalProjects: [
      'Build a complex form library',
      'Create a reusable component system'
    ]
  },
  StateManagementOptimization: {
    subtopics: [
      'Redux Toolkit',
      'Zustand',
      'Recoil',
      'Immutable State Techniques'
    ],
    recommendedResources: [
      'State Management in React by Kent C. Dodds',
      'Redux Official Documentation'
    ],
    practicalProjects: [
      'Implement complex state management in e-commerce app',
      'Build real-time collaborative editing tool'
    ]
  }
};

const RoadmapPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Experienced Frontend Developer Roadmap</h1>
      
      {Object.entries(experiencedLearningMap).map(([key, value]) => (
        <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</h2>
          
          <h3 className="text-lg font-medium">Subtopics</h3>
          <ul className="list-disc list-inside mb-3">
            {value.subtopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-medium">Recommended Resources</h3>
          <ul className="list-disc list-inside mb-3">
            {value.recommendedResources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
          
          <h3 className="text-lg font-medium">Practical Projects</h3>
          <ul className="list-disc list-inside">
            {value.practicalProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoadmapPage;
