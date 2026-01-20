import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
  RegisterOptions,
} from "react-hook-form";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";

type CheckboxInput<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  rules?: RegisterOptions<T>;
};

function CheckboxInput<T extends FieldValues>({
  name,
  label,
  register,
  errors,
  rules,
}: CheckboxInput<T>) {
  const errorId = `${name}-error`;
  const hasError = !!errors?.[name];

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="flex items-center gap-4 pr-5 cursor-pointer"
      >
        <input
          id={name}
          type="checkbox"
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          {...register(name, rules)}
          className="peer sr-only"
        />

        <div
          className={clsx(
            "w-4.5 h-4.5 flex items-center justify-center border-2 rounded-xs",
            "border-gray-500",
            "peer-checked:bg-green-600 peer-checked:border-none",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-green-600",
          )}
        >
          <FaCheck className="text-white w-3 h-3" />
        </div>

        <span>
          {label}
          <span className="text-green-600 pl-1">*</span>
        </span>
      </label>

      {hasError && (
        <p id={errorId} className="text-error-red">
          {errors?.[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default CheckboxInput;
