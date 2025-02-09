import { FaGithub } from 'react-icons/fa';

function Footer() {
  const deployDate = new Date().toLocaleDateString();
  
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>Deployed: {deployDate}</p>
          <a
            href="https://github.com/yourusername/engineering-principles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer