import { Link } from 'react-router-dom';

function PrinciplesSection() {
  const principles = [
    {
      id: 1,
      title: 'Keep It Simple',
      description: 'Simple solutions are easier to maintain and understand.'
    },
    {
      id: 2,
      title: 'DRY (Don\'t Repeat Yourself)',
      description: 'Avoid duplication by abstracting common patterns.'
    },
    {
      id: 3,
      title: 'Single Responsibility',
      description: 'Each component should do one thing well.'
    },
    {
      id: 4,
      title: 'Test-Driven Development',
      description: 'Write tests before implementing features.'
    },
    {
      id: 5,
      title: 'Continuous Integration',
      description: 'Integrate code changes frequently and early.'
    },
    {
      id: 6,
      title: 'Code Review',
      description: 'Review code to ensure quality and share knowledge.'
    },
    {
      id: 7,
      title: 'Documentation',
      description: 'Document code and decisions for future reference.'
    },
    {
      id: 8,
      title: 'Performance First',
      description: 'Consider performance implications from the start.'
    },
    {
      id: 9,
      title: 'Security by Design',
      description: 'Build security into every aspect of the system.'
    },
    {
      id: 10,
      title: 'Modularity',
      description: 'Build systems that are modular and loosely coupled.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Principles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle) => (
          <Link
            key={principle.id}
            to={`/principles/${principle.id}`}
            className="value-card"
          >
            <h3 className="text-xl font-semibold mb-2">
              {toRoman(principle.id)}. {principle.title}
            </h3>
            <p className="text-gray-600">{principle.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Helper function to convert numbers to Roman numerals
function toRoman(num) {
  const romanNumerals = [
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].numeral;
      num -= romanNumerals[i].value;
    }
  }
  return result;
}

export default PrinciplesSection;