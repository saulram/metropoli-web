import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FormField } from '@/app/contact-us/form';

interface FormInputProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const CustomSelect: React.FC<FormInputProps> = ({
  id,
  placeholder,
  options = [],
  value,
  onChange
}) => {
    const selectedOption = options?.find(opt => opt.value === value);

    const handleChange = (newValue: string) => {
      onChange({
        target: { value: newValue, id },
        currentTarget: { value: newValue, id },
      } as React.ChangeEvent<HTMLSelectElement>);
    };

  return (
    <div className="relative w-full">
      <Listbox value={value} onChange={handleChange}>
        {({ open }) => (
          <div className="relative">
            <div className={`border-gradient ${open ? 'rounded-t-lg' : 'rounded-lg'}`}>
              <Listbox.Button 
                className={`relative w-full h-[60px] cursor-pointer px-4 sm:px-6 py-4 text-left bg-white
                  ${open ? 'rounded-t-lg' : 'rounded-lg'} focus:outline-none`}
              >
                <span className={`block truncate text-sm sm:text-base ${!value ? 'text-strongBlue font-bold' : 'text-strongBlue font-bold'}`}>
                  {selectedOption ? selectedOption.label : placeholder}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4">
                  <ChevronDownIcon
                    className={`h-4 w-4 sm:h-5 sm:w-5 text-strongBlue transition-transform duration-200 
                      ${open ? 'transform rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
            </div>
            
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options 
                className={`absolute z-50 w-full overflow-auto bg-white shadow-lg focus:outline-none
                  border-gradient-nt rounded-b-lg max-h-[240px] scrollbar-thin scrollbar-thumb-gray-300 
                  scrollbar-track-transparent`}
                style={{ 
                  marginTop: '-2px',
                }}
              >
                {options.map((option, idx) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `relative cursor-pointer select-none px-4 sm:px-6 py-3 sm:py-4 
                      ${active ? 'bg-blue-50' : 'bg-white'}
                      ${value === option.value ? 'text-strongBlue font-semibold' : 'text-gray-600'}
                      ${idx === options.length - 1 ? 'rounded-b-lg' : ''}
                      text-sm sm:text-base`
                    }
                  >
                    {({ }) => (
                      <span className="block truncate">
                        {option.label}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default CustomSelect;