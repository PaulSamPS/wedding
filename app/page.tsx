import HeroSection from '@/components/hero-v2';
import MarqueeTicker from '@/components/marquee-ticker';
import StorySection from '@/components/story-section';
import ProgramSection from '@/components/program-section';
import VenueSection from '@/components/venue-section';
import DressCodeSection from '@/components/dresscode-section';
import RSVPSection from '@/components/rsvp-section';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <MarqueeTicker />
      <StorySection />
      <ProgramSection />
      <VenueSection />
      <DressCodeSection />
      <RSVPSection />
      <Footer />
    </main>
  );
}
