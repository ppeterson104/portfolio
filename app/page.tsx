'use client';
import { WaterWaveWrapper } from '@/components/browser-component';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { FaHome } from 'react-icons/fa';

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
                <Button>Basic Button</Button>
                <Button>
                  <FaHome /> Home
                </Button>
                <Button>
                  <FaHome />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
