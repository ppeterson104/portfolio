import ContactCard from '@/components/cards/contact';
import Heading from '@/components/heading/heading';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/textarea';
import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaDiaspora, FaEnvelope, FaPhoneVolume, FaUser } from 'react-icons/fa6';
import { MdEmail, MdSubject } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

export default function ContactSection() {
  return (
    <div className="pt-24 p-3 lg:p-8">
      <Heading title_1="Contact" title_2="Me" number="03" icon={FaDiaspora} />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call me directly at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="770-363-9390"
              btnText="Call me"
              link="tel:7703639390"
            />
            <ContactCard
              title="Email me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="pete.peterson@peterpeterson.org"
              btnText="Email me"
              link="mailto:pete.peterson@peterpeterson.org"
            />
          </div>
          <div className="lg:col-span-2 bg-secondary-background border border-primary-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px]">
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <Input
                type="email"
                placeholder="Email Address"
                icon={<FaEnvelope />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input type="text" placeholder="Subject" icon={<MdSubject />} />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">
                  What services are you in need of?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="font-bold text-lg">What is your budget?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8"></div>
              </div>
            </div>
            <TextArea
              placeholder="Tell me about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="w-full flex justify-end">
              <Button className="!w-44 !py-3 !text-lg">
                Send <SiMinutemailer />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
