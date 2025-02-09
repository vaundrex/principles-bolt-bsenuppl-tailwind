import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

function ValuesDetails() {
  const { id } = useParams();
  
  const values = {
    1: {
      title: 'Quality First',
      content: `Quality is not just about writing code that works; it's about crafting solutions that are reliable, maintainable, and scalable. We believe in thorough testing, comprehensive documentation, and following best practices. Every line of code we write reflects our commitment to excellence.`,
      image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=400'
    },
    2: {
      title: 'Continuous Learning',
      content: `In the rapidly evolving field of technology, standing still means falling behind. Continuous learning is not just a value we embrace—it's a necessity for staying at the forefront of innovation. Our commitment to ongoing education and skill development ensures we can tackle tomorrow's challenges with today's best practices.`,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400',
      columns: [
        {
          title: 'Personal Development',
          content: `We encourage every team member to set aside dedicated time for learning and exploration. This includes attending conferences, participating in workshops, and pursuing certifications. Personal growth is celebrated and supported through mentorship programs and learning resources.`
        },
        {
          title: 'Knowledge Sharing',
          content: `Regular tech talks, lunch-and-learn sessions, and collaborative coding workshops create an environment where knowledge flows freely. We believe that teaching others is one of the best ways to deepen our own understanding and create a stronger team.`
        },
        {
          title: 'Experimentation',
          content: `Innovation requires the freedom to experiment and learn from both successes and failures. We maintain dedicated time and resources for exploring new technologies, testing new approaches, and pushing the boundaries of what's possible in our field.`
        }
      ]
    }
    // Add more values here...
  };

  const value = values[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!value) {
    return <div>Value not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
        ← Back to Values
      </Link>
      <h1 className="text-4xl font-bold mb-8">{value.title}</h1>
      <div className="relative mb-12 after:content-[''] after:clear-both after:table">
        <img
          src={value.image}
          alt={value.title}
          className="float-right ml-8 mb-8 rounded-lg shadow-lg w-1/3"
        />
        <p className="text-lg leading-relaxed">{value.content}</p>
      </div>
      {value.columns && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 clear-both w-full">
          {value.columns.map((column, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{column.title}</h2>
              <p className="text-gray-700 leading-relaxed">{column.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ValuesDetails;