import classes from "./input.module.css";

interface iInput {
  type?: string;
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: "on" | "off";
  label?: string;
  required?: boolean;
  value?: string | number | undefined;
  invalid?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  icon?: string;
}

export default function Input({
  type,
  id,
  name,
  className,
  placeholder,
  autoComplete,
  label,
  required,
  value,
  invalid,
  onChange,
}: // icon,
iInput) {
  return (
    <>
      <div
        className={`${classes.input_container} ${
          invalid && invalid.length > 0 && "invalid"
        }`}
      >
        {label && <label>{label}</label>}
        <input
          type={type || "text"}
          id={id}
          name={name}
          className={`${classes.input} ${className}`}
          placeholder={placeholder}
          autoComplete={autoComplete || "on"}
          required={!!required}
          value={value}
          onChange={onChange}
        />
        {invalid && invalid.length > 0 && (
          <div className={classes.input_error}>{invalid}</div>
        )}
      </div>
    </>
  );
}
