import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { LightBulbIcon } from '@heroicons/react/24/outline';

function PrinciplesDetails() {
  const { id } = useParams();
  
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '64px 16px'
    },
    backLink: {
      color: '#2563eb',
      display: 'inline-block',
      marginBottom: '32px',
      textDecoration: 'none'
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    title: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      margin: 0
    },
    icon: {
      height: '48px',
      width: '48px',
      color: '#3b82f6'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '32px',
      fontStyle: 'italic'
    },
    columnsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '32px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr'
      }
    },
    leftColumn: {
      flex: 1
    },
    mainContent: {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '24px'
    },
    columnTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '16px'
    },
    rightColumn: {
      flex: 1,
      backgroundColor: '#f9fafb',
      padding: '32px',
      borderRadius: '8px'
    },
    list: {
      listStyle: 'disc',
      paddingLeft: '24px'
    },
    listItem: {
      color: '#374151',
      marginBottom: '8px'
    }
  };

  // Add media query for mobile
  if (window.matchMedia('(max-width: 768px)').matches) {
    styles.columnsContainer.gridTemplateColumns = '1fr';
  }
  
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
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>
        ← Back to Principles
      </Link>
      
      <div style={styles.headerContainer}>
        <h1 style={styles.title}>{principle.title}</h1>
        <LightBulbIcon style={styles.icon} />
      </div>
      
      <h2 style={styles.subtitle}>
        {principle.subtitle}
      </h2>
      
      <div style={styles.columnsContainer}>
        {/* Left Column */}
        <div style={styles.leftColumn}>
          <p style={styles.mainContent}>
            {principle.mainContent}
          </p>
          <h3 style={styles.columnTitle}>Key Aspects:</h3>
          <ul style={styles.list}>
            {principle.leftColumnPoints.map((point, index) => (
              <li key={index} style={styles.listItem}>{point}</li>
            ))}
          </ul>
        </div>
        
        {/* Right Column */}
        <div style={styles.rightColumn}>
          <h3 style={styles.columnTitle}>Benefits:</h3>
          <ul style={styles.list}>
            {principle.rightColumnPoints.map((point, index) => (
              <li key={index} style={styles.listItem}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PrinciplesDetails;