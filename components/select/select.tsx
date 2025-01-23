import classes from "./select.module.css";

interface iSelect {
  id?: string;
  name?: string;
  className?: string;
  label?: string;
  selectedValue?: string;
  items: { label: string; value: string; flag?: string }[];
  required?: boolean;
  invalid?: string;
}

export default function Select({
  id,
  name,
  className,
  label,
  selectedValue,
  items,
  required,
  invalid,
}: iSelect) {
  return (
    <>
    <div
        className={`${classes.input_container} ${
          invalid && invalid.length > 0 && "invalid"
        }`}
      >
        {label && (
          <label htmlFor={id}>
            {required && <span className="text-red-500">*</span>} {label}
          </label>
        )}
        <select
          id={id}
          name={name}
          className={`${classes.select} ${className}`}
          required={!!required}
            >
              <option value="">Select</option>
              {items &&
                items.length > 0 &&
                items.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                    selected={!!selectedValue && !!(selectedValue === item.value)}
                  >
                    {item.flag && <span className="mr-2">{item.flag}</span>}
                    {item.label}
                  </option>
                ))}
            </select>
        {invalid && invalid.length > 0 && (
          <div className={classes.input_error}>{invalid}</div>
        )}
      </div>
    </>
  );
}
