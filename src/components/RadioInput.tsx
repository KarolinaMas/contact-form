import type {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import clsx from "clsx";

type RadioInputProps<T extends FieldValues> = {
  name: Path<T>;
  value: string;
  label: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T>;
};

function RadioInput<T extends FieldValues>({
  name,
  value,
  label,
  register,
  rules,
}: RadioInputProps<T>) {
  return (
    <label className="cursor-pointer group w-full">
      <input
        type="radio"
        value={value}
        aria-describedby="queryType-error"
        {...register(name, rules)}
        className="peer sr-only"
      />
      <div
        className={clsx(
          "border border-gray-500 px-6 py-3 rounded-lg text-lg flex items-center gap-3",
          "peer-checked:bg-green-200 peer-checked:border-green-600",
          "hover:border-green-600",
          "peer-focus:ring-2 peer-focus:ring-green-600",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-green-600",
        )}
      >
        <div
          className={clsx(
            "relative w-5 h-5 rounded-full border-2 border-gray-500 shrink-0 ",
            "group-has-[input:checked]:border-green-600",
          )}
        >
          <div
            className={clsx(
              "absolute inset-1 rounded-full bg-green-600 scale-0 transition-transform",
              "group-has-[input:checked]:scale-100",
            )}
          />
        </div>
        <span>{label}</span>
      </div>
    </label>
  );
}

export default RadioInput;
