import FeaturedCard from '@/components/cards/featured/featured-card';
import ExpandableFeatured from '@/components/expandables/expandable-featured';
import Heading from '@/components/heading/heading';
import { featuredData } from '@/data';
import React from 'react';
import { FaDiaspora } from 'react-icons/fa6';

const FeaturedData = featuredData[0];

export default function Featured() {
  return (
    <div className="pt-24 px-3 lg:px-8 h-auto">
      <Heading
        title_1="Featured"
        title_2="Work"
        number="01"
        icon={FaDiaspora}
      />
      <FeaturedCard
        active
        title={FeaturedData.title}
        tag={FeaturedData.tag}
        video={FeaturedData.video}
      />
      <div className="mt-24">
        <ExpandableFeatured />
      </div>
    </div>
  );
}
