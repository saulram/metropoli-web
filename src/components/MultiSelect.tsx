import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { FormField } from '@/app/contact-us/form';

interface MultiSelectProps extends FormField {
  value: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  id,
  placeholder,
  options = [],
  value = [],
  onChange,
}) => {
  const selectedOptions = options.filter((opt) => value.includes(opt.value));

  const handleChange = (newValue: string[]) => {
    onChange({
      target: { value: newValue, id },
      currentTarget: { value: newValue, id },
    } as unknown as React.ChangeEvent<HTMLSelectElement>);
  };

  const removeValue = (valueToRemove: string) => {
    handleChange(value.filter((v) => v !== valueToRemove));
  };

  const CustomCheckbox = ({ checked }: { checked: boolean }) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_547_887)">
        <rect
          width="15"
          height="15"
          rx="4"
          fill={checked ? "url(#paint0_linear_547_887)" : "#FFFFFF"}
        />
      </g>
      <rect
        x="1"
        y="1"
        width="13"
        height="13"
        rx="3"
        stroke="url(#paint1_linear_547_887)"
        strokeWidth="2"
      />
      <defs>
        <filter
          id="filter0_i_547_887"
          x="0"
          y="0"
          width="15"
          height="19"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_547_887" />
        </filter>
        <linearGradient
          id="paint0_linear_547_887"
          x1="0"
          y1="7.5"
          x2="15"
          y2="7.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#091934" />
          <stop offset="1" stopColor="#1C6EF6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_547_887"
          x1="0"
          y1="7.5"
          x2="15"
          y2="7.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99C0FF" />
          <stop offset="1" stopColor="#1C6EF6" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="relative w-full">
      <Listbox value={value} onChange={handleChange} multiple>
        {({ open }) => (
          <div className="relative">
            <div className={`border-gradient ${open ? 'rounded-t-lg' : 'rounded-lg'} border-gray-300`}> {/* Updated border */}
              <Listbox.Button
                className={`relative w-full min-h-[50px] cursor-pointer p-4 text-left bg-white border-gray-300 
                  ${open ? 'rounded-t-lg' : 'rounded-lg'} focus:outline-none`}
              >
                <div className="flex flex-wrap gap-2">
                  {selectedOptions.length > 0 ? (
                    selectedOptions.map((option) => (
                      <span
                        key={option.value}
                        className="inline-flex items-center bg-gray-200 px-2 py-1 rounded-md text-sm text-gray-800"
                      >
                        {option.label}
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            removeValue(option.value);
                          }}
                          className="ml-1 text-gray-600 hover:text-gray-800 cursor-pointer"
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </span>
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400">{placeholder}</span>
                  )}
                </div>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-800 transition-transform duration-200 
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
                  rounded-b-lg max-h-[240px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent border-gradient-nt`}
                style={{ marginTop: '-2px' }}
              >
                {options.map((option, idx) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `relative cursor-pointer select-none px-4 py-2 flex items-center gap-2
                      ${active ? 'bg-blue-100 text-blue-700' : 'bg-white text-gray-800'}
                      ${value.includes(option.value) ? 'font-semibold' : ''}`
                    }
                  >
                    <div
                      className="w-5 h-5"
                      onClick={() => {
                        if (value.includes(option.value)) {
                          removeValue(option.value);
                        } else {
                          handleChange([...value, option.value]);
                        }
                      }}
                    >
                      <CustomCheckbox checked={value.includes(option.value)} />
                    </div>
                    <span>{option.label}</span>
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

export default MultiSelect;
