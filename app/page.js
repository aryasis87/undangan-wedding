'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Cover from '@/components/Cover';
import Hero from '@/components/Hero';
import Opening from '@/components/Opening';
import CoupleSection from '@/components/CoupleSection';
import CountdownTimer from '@/components/CountdownTimer';
import EventDetails from '@/components/EventDetails';
import LoveStory from '@/components/LoveStory';
import Gallery from '@/components/Gallery';
import MapEmbed from '@/components/MapEmbed';
import GiftSection from '@/components/GiftSection';
import RSVPForm from '@/components/RSVPForm';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <AnimatePresence>
        {!opened && <Cover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <>
          <Hero />
          <Opening />
          <CoupleSection />
          <CountdownTimer />
          <EventDetails />
          <LoveStory />
          <Gallery />
          <MapEmbed />
          <GiftSection />
          <RSVPForm />
          <WishesForm />
          <Footer />
          <MusicPlayer playing={opened} />
        </>
      )}
    </main>
  );
}
