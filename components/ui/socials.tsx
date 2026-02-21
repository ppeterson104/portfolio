import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import SvgSN from '../image/snsvg';
import Button from './button';
import SvgCredly from '../image/credlysvg';

export default function Socials() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      {socials.map((social, i) => (
        <Button key={i} link={social.link}>
          <span className="w-auto h-7 grid place-items-center">
            {social.icon}
          </span>
        </Button>
      ))}
    </div>
  );
}

const socials = [
  {
    icon: <FaLinkedin className="w-4 h-4" />,
    link: 'https://www.linkedin.com/in/ppeterson82/',
    username: 'Pete Peterson',
  },

  {
    icon: <SvgSN height={15} width={60} fill="#FFF" />,
    link: 'https://learning.servicenow.com/lxp?id=nl_public&user=pthomaspet045604',
    username: 'Pete Peterson',
  },
  {
    icon: <FaGithub className="w-4 h-4" />,
    link: 'https://github.com/ppeterson104',
    username: 'Pete Peterson',
  },
  {
    icon: <SvgCredly height={30} width={60} fill="#FF6A00" />,
    link: 'https://www.credly.com/users/pete-peterson.d44b56fa/badges',
    username: 'Pete Peterson',
  },
];
