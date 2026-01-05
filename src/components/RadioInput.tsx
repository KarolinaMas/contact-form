import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import clsx from "clsx";

type RadioInputProps<T extends FieldValues> = {
  name: Path<T>;
  value: string;
  label: string;
  register: UseFormRegister<T>;
};

function RadioInput<T extends FieldValues>({
  name,
  value,
  label,
  register,
}: RadioInputProps<T>) {
  return (
    <label className="cursor-pointer group w-full">
      <input
        type="radio"
        value={value}
        {...register(name, {
          required: "Please select a query type",
        })}
        className="peer hidden"
      />
      <div
        className={clsx(
          "border border-gray-500 px-6 py-3 rounded-lg text-lg flex items-center gap-3",
          "peer-checked:bg-green-200 peer-checked:border-green-600",
          "hover:border-green-600"
        )}
      >
        <div
          className={clsx(
            "relative w-5 h-5 rounded-full border-2 border-gray-500 shrink-0 ",
            "group-has-[input:checked]:border-green-600"
          )}
        >
          <div
            className={clsx(
              "absolute inset-1 rounded-full bg-green-600 scale-0 transition-transform",
              "group-has-[input:checked]:scale-100"
            )}
          />
        </div>
        <span>{label}</span>
      </div>
    </label>
  );
}

export default RadioInput;
