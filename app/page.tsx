'use client';
import { WaterWaveWrapper } from '@/components/browser-component';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import Input from '@/components/ui/input';
import TextArea from '@/components/ui/textarea';
import Profile from '@/components/ui/profile';
import MyImage from '@/public/assets/images/Pete.png';
import FancyButton from '@/components/ui/fancybutton';
import LiveClock from '@/components/ui/liveclock';

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resoultion="2048"
    >
      {() => (
        <div className="w-full p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="UI Components">
              <div className="grid grid-cols-4">
                <Button className="link">Basic Button</Button>
                <Button className="link">
                  <FaHome /> Home
                </Button>
                <Button>
                  <FaHome />
                </Button>
              </div>
              <Input type="text" placeholder="Full Name" />
              <TextArea placeholder="Some Text" />
              <Profile
                name="Pete Peterson"
                src={MyImage}
                altText="Pete Peterson image"
              />
              <div className="w-[350px]">
                <FancyButton text="Click Me" icon={<FaArrowRight />} />
              </div>
              <LiveClock city="Atlanta" timeZone="America/New_York" />
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
