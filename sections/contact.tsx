import ContactCard from '@/components/cards/contact';
import Heading from '@/components/heading/heading';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import Input from '@/components/ui/input';
import SelectInput from '@/components/ui/select-input';
import TextArea from '@/components/ui/textarea';
import { budgetOptions, serviceOptions } from '@/data';
import React, { FormEvent, useRef, useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaDiaspora, FaEnvelope, FaPhoneVolume, FaUser } from 'react-icons/fa6';
import { MdEmail, MdSubject } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import InfoMessage from '@/components/ui/info-message';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null!);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [services, setServices] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    emailjs
      .send('service_sr8d918', 'template_agaazj8', data, 'u8rtFLpZzsOGBP-O_')
      .then(
        (response) => {
          console.log(response.text);
          console.log('Email sent successfully!');
        },
        (error) => {
          console.log('An error occurred:');
          console.log(error);
        }
      );
  };
  return (
    <div id="contact" className="pt-24 p-3 lg:p-8">
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
              text="help@peterpeterson.org"
              btnText="Email me"
              link="mailto:help@peterpeterson.org"
            />
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-primary-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px]"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<FaEnvelope />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  What services are you in need of?
                </h1>
                <div className="flex flex-wrap items-center justify-between xl:justify-normal max-sm:justify-normal mb-4 gap-8">
                  {serviceOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      type="checkbox"
                      id={service.id}
                      text={service.text}
                      selectedOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">What is your budget?</h1>
                <div className="flex flex-wrap items-center justify-between xl:justify-normal max-sm:justify-normal mb-4 gap-8">
                  {budgetOptions.map((budget) => (
                    <SelectInput
                      key={budget.id}
                      type="radio"
                      id={budget.id}
                      text={budget.text}
                      selectedOptions={budgets}
                      setSelectedOptions={setBudgets}
                    />
                  ))}
                </div>
              </div>
            </div>
            <TextArea
              name="message"
              placeholder="Tell me about your project"
              icon={<FaProjectDiagram />}
            />
            <div className="flex justify-end">
              <div onClick={() => btnRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-lg">
                  Send <SiMinutemailer />
                </Button>
              </div>
            </div>
            <div id="info-div">
              <InfoMessage
                show={false}
                type="warning"
                text="We've been sent, to issue all you people here a warning."
              />
            </div>
            <div className="hidden">
              <input
                type="text"
                readOnly
                value={services.join(', ')}
                name="services"
              />
              <input
                type="text"
                readOnly
                value={budgets.join(', ')}
                name="budget"
              />
            </div>
            <button type="submit" hidden ref={btnRef}></button>
          </form>
        </div>
      </Card>
    </div>
  );
}
