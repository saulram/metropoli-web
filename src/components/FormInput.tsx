import { FormField } from "@/app/contact-us/form";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";

interface FormInputProps extends FormField {
  value: string | string[];
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

  if (type === 'multiselect') {
    return (
        <MultiSelect
          id={id}
          value={Array.isArray(value) ? value : []}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          options={options}
          label={label || ""}
          type={type}
        />
    );
  }

  if (type === 'select') {
    return (
        <CustomSelect
          id={id}
          value={typeof value === 'string' ? value : ''}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          options={options}
          label={label || ""}
          type={type}
        />
    );
  }

  if (type === 'textarea') {
    return (
        <textarea
          id={id}
          value={typeof value === 'string' ? value : ''}
          onChange={onChange}
          rows={3}
          className={`${baseInputClasses} !h-auto placeholder-gradient text-strongBlue`}
          placeholder={placeholder}
          required={required}
          style={{ resize: 'none' }}
        />
    );
  }

  return (
    <div className="w-full">
      <input
        type={type}
        id={id}
        value={typeof value === 'string' ? value : ''}
        onChange={onChange}
        className={`${baseInputClasses} placeholder-gradient text-strongBlue h-[60px]`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;