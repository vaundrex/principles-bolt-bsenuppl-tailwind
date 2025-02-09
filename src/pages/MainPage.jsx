import { Element } from 'react-scroll';
import HeroSection from '../sections/HeroSection';
import WhySection from '../sections/WhySection';
import ValuesSection from '../sections/ValuesSection';
import PrinciplesSection from '../sections/PrinciplesSection';

function MainPage() {
  return (
    <div className="snap-y snap-mandatory">
      <Element name="hero" className="scroll-section">
        <HeroSection />
      </Element>
      
      <Element name="why" className="scroll-section">
        <WhySection />
      </Element>
      
      <Element name="values" className="scroll-section">
        <ValuesSection />
      </Element>
      
      <Element name="principles" className="scroll-section">
        <PrinciplesSection />
      </Element>
    </div>
  );
}

export default MainPage