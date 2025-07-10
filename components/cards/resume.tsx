import React from 'react';
import Card from '../ui/card';
import SvgSignature from '../image/sigsvg';
import Button from '../ui/button';
import { FaDownload } from 'react-icons/fa6';
import Socials from '../ui/socials';

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground text-balance">
        I am a former Sr. Application Engineer with several years of experience
        in IT Service Management and custom application development. Expertise
        in ServiceNow administration, JavaScript programming, and process
        automation. Proven track record in enhancing operational efficiency
        through innovative solutions and cross-functional collaboration.
        Certified System Administrator seeking to leverage technical skills and
        leadership experience to drive ServiceNow platform optimization and
        integration.
      </p>
      <div className="p-2 mb-5">
        <SvgSignature fill="#FFF" height={120} width={240} />
      </div>
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        <Socials />
        <Button link="https://api.resumefromspace.com/resume/view-resume/6831235afefe16f83ae969a0?resumeOnly=true">
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
}
