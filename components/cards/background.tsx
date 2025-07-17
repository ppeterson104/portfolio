import React from 'react';
import Card from '../ui/card';

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <p className="text-white/[0.7] font-semibold leading-[160%]">
        Originating from the city of Flint, MI,&nbsp;
        <span className="underline text-white">
          I forged a path outside of the automotive industry
        </span>
        &nbsp;that was once dominant in the area, but faced a sharp decline
        during my childhood.{' '}
        <span className="text-white underline">
          I wrote my first program at the age of 12 in BASIC.
        </span>
        &nbsp;It was but a simple &apos;choose your own adventure&apos; style
        game, however; it set me on a path and a great interest in all things
        computer-y.
        <br />
        <br />
        For the last 16 years, I worked for a great company that allowed many
        growth opportunities, including receiving my{' '}
        <span className="text-white">
          Master&apos;s in Business Administration
        </span>
        , with a focus on Information Systems. I didn&apos;t stop there, though.
        I continued my learning through{' '}
        <span className="text-white">ServiceNow</span>, as well as courses on
        Udemy and Stackskills in subjects such as{' '}
        <span className="text-white">Full Stack Web Development</span>,{' '}
        <span className="text-white">Data Structures and Algorithms</span>,{' '}
        <span className="text-white">.NET Framework</span>, and soon I will be
        diving into <span className="text-white">Ethical Hacking</span> to
        better understand how to harden my applications! <br />
        <br />I also have a keen interest in{' '}
        <span className="text-white">Blockchain</span> and all things Crypto,
        and have spent the last several years understanding just how much
        potential growth there is in that space. I plan on taking a deeper dive
        into AI as well. The sky is the limit!
        <br />
        <br />I am currently seeking new opportunities, so if you have need for
        someone with a keen eye for automation and scripting, or a ServiceNow
        aficionado, let me know!
        <br /> <br />
        <span className="text-white italic">
          &quot;The most important step a man can take is not the first one,
          it&apos;s always the next one.&quot; ~ Brandon Sanderson
        </span>
      </p>
    </Card>
  );
}
