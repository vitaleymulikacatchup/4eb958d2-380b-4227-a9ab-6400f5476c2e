"use client";
import { TokenBillboardHero } from '@/components/sections/layouts/hero/TokenBillboardHero';
import { SplitAbout } from '@/components/sections/layouts/about/SplitAbout';
import { CtaAbout } from '@/components/sections/layouts/about/CtaAbout';
import { NavbarBase } from '@/components/navigation/NavbarBase';
import { YearRoadmapTimeline } from '@/components/sections/layouts/roadmap/YearRoadmapTimeline';

const NavbarLinks = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Book', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' },
];

export default function Home() {
  const heroProps = {
    title: 'Join the luminous journey.',
    subtitle: 'Explore stunning photography that captures the essence of life.',
    contractAddress: '0x123abc...',
    copyButtonText: 'Copy Address',
    copiedText: 'Address copied!',
  };

  const aboutProps = {
    heading: 'About the Artist',
    body: 'Passionate about capturing life’s fleeting moments through the lens of a camera. My work is driven by the belief that every image tells a story, and I strive to tell yours.',
  };

  return (
    <>
      <NavbarBase
        brand="PhotonFrame"
        navItems={NavbarLinks}
        leftActionLabel="Menu"
        rightActionLabel="Book a Shoot"
        onLeftAction={() => console.log('Menu clicked')}
        onRightAction={() => console.log('Booking clicked')}
      />
      <TokenBillboardHero {...heroProps} />
      <SplitAbout {...aboutProps} />
      <YearRoadmapTimeline items={[]} title="Booking Process" />
      <CtaAbout title="Ready to Capture Your Moments?" descriptions={["Book your shoot today!"]} />
    </>
  );
}