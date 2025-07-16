import React from 'react';
import Card from '../ui/card';
import { Timeline, TimeLineItem } from '../ui/timeline';

export default function CertificationsCard() {
  return (
    <Card title="Certifications">
      <Timeline>
        <TimeLineItem
          date="2025"
          title="Certified Application Developer"
          subtitle="ServiceNow"
          link="https://learning.servicenow.com/lxp/en/pages/nl-public-resume?id=nl_public&user=pthomaspet045604"
          tag=""
        />
        <TimeLineItem
          date="2024"
          title="Certified System Administrator"
          subtitle="ServiceNow"
          link="https://learning.servicenow.com/lxp/en/pages/nl-public-resume?id=nl_public&user=pthomaspet045604"
          tag=""
        />
        <TimeLineItem
          date="2020"
          title="ITILv4 ITSM Foundations"
          subtitle="PeopleCert"
          tag="Pete Peterson"
        />
      </Timeline>
    </Card>
  );
}
