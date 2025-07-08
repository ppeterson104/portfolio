import MeCard from '@/components/cards/me';
import Heading from '@/components/heading/heading';
import Card from '@/components/ui/card';
import React from 'react';
import { FaDiaspora } from 'react-icons/fa6';

export default function AboutSection() {
  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading title_1="About" title_2="Me" number="02" icon={FaDiaspora} />
      <div className="space-y-4 py-8">
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <MeCard />
          <Card title="Resume">Resume</Card>
          <Card title="Background">Background</Card>
          <Card title="Gallery" className="2xl:hidden">
            Gallery
          </Card>
        </div>
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
          <div className="space-y-4">
            <Card title="Developer">Developer</Card>
            <Card title="Certifications">Certifications</Card>
          </div>
          <div className="space-y-4">
            <Card title="Stack">Stack</Card>
            <Card title="Experience">Experience</Card>
            <Card title="Education">Education</Card>
          </div>
          <div className="2xl:hidden">
            <Card title="Gallery" className="2xl:hidden">
              Gallery
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
