import React from 'react';
import { Timeline, TimeLineItem } from '../ui/timeline';
import Card from '../ui/card';

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        <TimeLineItem
          date="2005"
          title="BA - Political Science"
          tag="Pete Peterson"
          subtitle="Western Michigan University"
        />
      </Timeline>
      <TimeLineItem
        date="2018"
        title="MBA - Information Systems"
        tag="Pete Peterson"
        subtitle="Ashford University"
      />
    </Card>
  );
}
