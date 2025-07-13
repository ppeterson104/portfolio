import React from 'react';
import Card from '../ui/card';
import { Timeline, TimeLineItem } from '../ui/timeline';

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        <TimeLineItem
          date="2022-2025"
          title="Sr. Application Engineer"
          subtitle="Cox Automotive, Inc."
        />
        <TimeLineItem
          date="2018-2022"
          title="Sr. Tech Service Manager"
          subtitle="Cox Automotive, Inc."
        />
        <TimeLineItem
          date="2014-2018"
          title="Sr. Client Support Analyst"
          subtitle="Cox Automotive, Inc."
        />
      </Timeline>
    </Card>
  );
}
