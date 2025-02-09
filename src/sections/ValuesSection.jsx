import { Link } from 'react-router-dom';

function ValuesSection() {
  const values = [
    {
      id: 1,
      title: 'Quality First',
      description: 'Excellence in every line of code we write.'
    },
    {
      id: 2,
      title: 'Continuous Learning',
      description: 'Embrace growth and stay current with technology.'
    },
    {
      id: 3,
      title: 'Collaboration',
      description: 'Work together to achieve greater outcomes.'
    },
    {
      id: 4,
      title: 'Innovation',
      description: 'Push boundaries and explore new solutions.'
    },
    {
      id: 5,
      title: 'User-Centric',
      description: 'Put users at the heart of every decision.'
    },
    {
      id: 6,
      title: 'Integrity',
      description: 'Maintain highest ethical standards in our work.'
    },
    {
      id: 7,
      title: 'Efficiency',
      description: 'Optimize resources and processes.'
    },
    {
      id: 8,
      title: 'Accountability',
      description: 'Take ownership of our actions and decisions.'
    },
    {
      id: 9,
      title: 'Adaptability',
      description: 'Embrace change and remain flexible.'
    },
    {
      id: 10,
      title: 'Sustainability',
      description: 'Build solutions that stand the test of time.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value) => (
          <Link
            key={value.id}
            to={`/values/${value.id}`}
            className="value-card"
          >
            <h3 className="text-xl font-semibold mb-2">
              {toRoman(value.id)}. {value.title}
            </h3>
            <p className="text-gray-600">{value.description}</p>
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

export default ValuesSection;