import classes from "./textarea.module.css";

interface iTextarea {
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
  rows?: number;
  cols?: number;
}

export default function Textarea({
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
  rows,
  cols,
}: // icon,
iTextarea) {
  return (
    <>
      <div
        className={`${classes.input_container} ${
          invalid && invalid.length > 0 && "invalid"
        }`}
      >
        {label && <label>{label}</label>}
        <textarea
          id={id}
          name={name}
          className={`${classes.input} ${className}`}
          placeholder={placeholder}
          autoComplete={autoComplete || "on"}
          required={!!required}
          value={value}
          onChange={onChange}
          rows={rows || 3}
          cols={cols || 30}
        ></textarea>
        {invalid && invalid.length > 0 && (
          <div className={classes.input_error}>{invalid}</div>
        )}
      </div>
    </>
  );
}
