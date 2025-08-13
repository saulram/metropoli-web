import { FormField } from "@/app/contact-us/form";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";

interface FormInputProps extends FormField {
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  required,
  options,
  value,
  onChange,
  error
}) => {
  const baseInputClasses = `mt-1 h-12 w-full rounded-lg p-4 border-gradient focus:outline-none font-semibold text-strongBlue ${error ? 'border-2 border-red-500' : ''}`;

  if (type === 'multiselect') {
    return (
      <div className="w-full">
        <MultiSelect
          id={id}
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          options={options}
          label={label || ""}
          type={type}
          error={error}
        />
        {error && <div className="text-red-600 text-xs mt-1 animate-fade-in">{error}</div>}
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="w-full">
        <CustomSelect
          id={id}
          value={typeof value === 'string' ? value : ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          options={options}
          label={label || ""}
          type={type}
          error={error}
        />
        {error && <div className="text-red-600 text-xs mt-1 animate-fade-in">{error}</div>}
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className="w-full">
        <textarea
          id={id}
          value={typeof value === 'string' ? value : ''}
          onChange={onChange}
          rows={3}
          className={`${baseInputClasses} !h-auto placeholder-gradient text-strongBlue ${error ? 'border-2 border-red-500' : ''}`}
          placeholder={placeholder}
          required={required}
          style={{ resize: 'none' }}
        />
        {error && <div className="text-red-600 text-xs mt-1 animate-fade-in">{error}</div>}
      </div>
    );
  }

  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        value={typeof value === 'string' ? value : ''}
        onChange={onChange}
        className={`${baseInputClasses} placeholder-gradient text-strongBlue h-[60px] ${error ? 'border-2 border-red-500' : ''}`}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="text-red-600 text-xs mt-1 animate-fade-in">{error}</div>}
    </div>
  );
};

export default FormInput;