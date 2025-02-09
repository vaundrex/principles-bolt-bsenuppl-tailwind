import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

function PrinciplesDetails() {
  const { id } = useParams();
  
  const principles = {
    1: {
      title: 'Keep It Simple',
      subtitle: 'Simplicity is the ultimate sophistication',
      mainContent: `In software engineering, simplicity is not just a preference—it's a fundamental principle that drives the creation of maintainable, reliable, and scalable systems. When we embrace simplicity, we create solutions that are easier to understand, debug, and enhance over time.`,
      leftColumnPoints: [
        'Reduce complexity by breaking down problems into smaller, manageable parts',
        'Choose straightforward solutions over clever but complicated ones',
        'Minimize dependencies and avoid unnecessary abstractions',
        'Write clear, self-documenting code that others can easily understand',
        'Regular refactoring to maintain simplicity as systems evolve'
      ],
      rightColumnPoints: [
        'Improved maintainability',
        'Reduced bug potential',
        'Easier onboarding for new team members',
        'Lower technical debt',
        'Better scalability',
        'Faster development cycles'
      ]
    },
    // Add more principles here...
  };

  const principle = principles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!principle) {
    return <div>Principle not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Principles
      </Link>
      
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold">{principle.title}</h1>
        <LightBulbIcon className="h-12 w-12 text-blue-500" />
      </div>
      
      <h2 className="text-xl text-gray-600 mb-8 italic">
        {principle.subtitle}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <p className="text-lg leading-relaxed mb-6">
            {principle.mainContent}
          </p>
          <h3 className="text-xl font-semibold mb-4">Key Aspects:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {principle.leftColumnPoints.map((point, index) => (
              <li key={index} className="text-gray-700">{point}</li>
            ))}
          </ul>
        </div>
        
        {/* Right Column */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {principle.rightColumnPoints.map((point, index) => (
              <li key={index} className="text-gray-700">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrinciplesDetails;