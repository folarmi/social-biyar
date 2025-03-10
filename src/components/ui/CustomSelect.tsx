/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  Control,
  FieldValues,
  Path,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Select, { PropsValue, Props as SelectProps } from "react-select";

type Option = {
  value: string;
  label: string;
};

interface CustomSelectProps<T extends FieldValues> extends SelectProps<Option> {
  name: Path<T>;
  options: Option[];
  label?: string;
  control: Control<T>;
  rules?: UseControllerProps<T>["rules"];
  className?: string;
  customOnChange?: any;
  isMulti?: boolean;
  defaultValue?: PropsValue<Option> | undefined;
}

const CustomSelect = <T extends FieldValues>({
  name,
  control,
  rules,
  options,
  label,
  className,
  customOnChange,
  // defaultValue,
  isMulti,
  ...rest
}: CustomSelectProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController<T>({ name, control, rules });

  return (
    <div className={`mb-4 w-full  ${className}`}>
      {label && (
        <label className="text-sm font-medium text-primary mb-">
          {label}
          {rules?.required && <span className="text-red-600 ml-1">*</span>}
        </label>
      )}
      <Select
        {...field}
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          input: (baseStyles) => ({
            ...baseStyles,
            height: "38px",
            background: "transparent",
            borderRadius: "8px",
          }),
        }}
        options={options}
        {...rest}
        onChange={(val: any) => {
          customOnChange && customOnChange(val, name);
          isMulti
            ? // onchange for react-select multi options
              field.onChange(val.map((val: any) => val.value))
            : field.onChange(val.value);
        }}
        // value={options?.find((c: any) => c?.value === field?.value) || null}
        value={
          isMulti
            ? (options &&
                options?.filter((c: any) =>
                  field?.value?.includes(c?.value)
                )) ||
              []
            : (options &&
                options?.find((c: any) => c?.value === field?.value)) ||
              null
        }
        className=" rounded-2xl outline-none bg-gray-50 text-sm w-full"
        // defaultValue={defaultValue}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default CustomSelect;
