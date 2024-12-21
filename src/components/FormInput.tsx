import { FormField } from "@/app/contact-us/form";

interface FormInputProps extends FormField {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  required,
  options,
  value,
  onChange
}) => {
    const baseInputClasses = "mt-1 h-12 w-full rounded-lg p-4 border-gradient focus:outline-none font-semibold text-strongBlue";
    const gradientTextClasses = "";

  
  return (
    <div>
      {type === 'textarea' ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={3}
          className={`${baseInputClasses} !h-auto placeholder-gradient ${gradientTextClasses} text-strongBlue`}
          placeholder={placeholder}
          required={required}
          style={{ resize: 'none' }}
        />
      ) : type === 'select' ? (
        <div className="relative">
          <select
            id={id}
            value={value}
            onChange={onChange}
            className={`${baseInputClasses} appearance-none ${gradientTextClasses} text-strongBlue h-[60px]`}
            required={required}
          >
            <option value="" disabled className={gradientTextClasses}>{placeholder}</option>
            {options?.map(({ value, label }) => (
              <option key={value} value={value} className={gradientTextClasses}>
                {label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className={`${baseInputClasses} placeholder-gradient  text-strongBlue h-[60px]`}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormInput;