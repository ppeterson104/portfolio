import { cn } from '@/lib/utils';
import { FC } from 'react';
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
} from 'react-icons/fa';

interface InfoMessageProps {
  type: 'error' | 'info' | 'warning' | 'success';
  text: string;
  show: boolean;
}

const InfoMessage: FC<InfoMessageProps> = ({ type, text, show }) => {
  let icon;
  let color;
  let borderColor;
  let textColor;

  switch (type) {
    case 'error':
      icon = <FaExclamationTriangle />;
      color = 'bg-red-200';
      borderColor = 'border-red-400';
      textColor = 'text-red-800';

    case 'info':
      icon = <FaInfoCircle />;
      color = 'bg-blue-200';
      borderColor = 'border-blue-400';
      textColor = 'text-blue-800';

    case 'success':
      icon = <FaCheckCircle />;
      color = 'bg-green-200';
      borderColor = 'border-green-400';
      textColor = 'text-green-800';

    default:
      icon = <FaExclamationTriangle />;
      color = 'bg-yellow-200';
      borderColor = 'border-yellow-400';
      textColor = 'text-yellow-800';
  }

  return (
    <div
      className={cn(
        'flex items-center w-full border rounded-xl p-4 gap-x-3',
        borderColor,
        color,
        textColor,
        !show ? 'hidden' : ''
      )}
    >
      <span>{icon}</span>
      <span className="w-full">{text}</span>
    </div>
  );
};

export default InfoMessage;
