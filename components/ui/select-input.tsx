import { cn } from '@/lib/utils';
import { FC } from 'react';

interface SelectInputProps {
  type: 'checkbox' | 'radio';
  id: string;
  text: string;
  selectedOptions: string[];
  setSelectedOptions: (newValue: string[]) => void;
  allowMultiple?: boolean;
}

const SelectInput: FC<SelectInputProps> = ({
  type,
  id,
  text,
  selectedOptions,
  setSelectedOptions,
  allowMultiple = false,
}) => {
  const handleOptionChange = (option: string) => {
    if (allowMultiple) {
      const currentIndex = selectedOptions.indexOf(option);
      const newSelectedOptions = [...selectedOptions];
      if (currentIndex === -1) {
        newSelectedOptions.push(option);
      } else {
        newSelectedOptions.splice(currentIndex);
      }
      setSelectedOptions(newSelectedOptions);
    } else {
      const newSelectedOptions = [option];
      setSelectedOptions(newSelectedOptions);
    }
  };
  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={id}
        checked={selectedOptions.includes(id)}
        onChange={() => handleOptionChange(id)}
        className={cn(
          'w-[15px] h-[15px] !rounded-xl !bg-transparent text-primary-background',
          type === 'checkbox' ? 'accent-blue-joust' : 'accent-green-benzol'
        )}
        multiple={allowMultiple}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default SelectInput;
