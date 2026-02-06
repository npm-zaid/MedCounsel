
import Hero from './components/Hero'
import Navbar from './components/Navbar'    
import FeatureSection from './components/FeatureSection'
import StatsSection from './components/StatsSection'
import DashboardPreview from './components/DashboardPreview'
import PricingSection from './components/PricingSection'
import ChaosSection from './components/ChaosSection'
import ContactSupport from './components/ContactSupport'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import PricingPackages from './components/PricingPackages'
import TestimonialSection from './components/TestimonialSection'

export default function Home() {
  return (
   <div className="relative">
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#155DFC_1px,transparent_1px),linear-gradient(to_bottom,#155DFC_1px,transparent_1px)] bg-[size:40px_40px]" />
   
    <Hero />
     <StatsSection />
     <ChaosSection />
 

    <DashboardPreview />
   
    <PricingSection />
  
    <TestimonialSection />
    <ContactSupport />
    <FAQ />
  
   </div>
  );
}
