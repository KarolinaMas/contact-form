import type {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldErrors,
} from "react-hook-form";
import clsx from "clsx";

type TextInputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  type?: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  rules?: RegisterOptions<T>;
};

function TextInput<T extends FieldValues>({
  name,
  label,
  type = "text",
  register,
  errors,
  rules,
}: TextInputProps<T>) {
  const errorId = `${name}-error`;
  const hasError = !!errors?.[name];

  return (
    <div className="flex flex-col gap-2 outline-0 w-full">
      <label htmlFor={name} className="flex gap-2">
        {label} <span className="text-green-600">*</span>
      </label>
      <input
        id={name}
        type={type}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        {...register(name, rules)}
        className={clsx(
          "border px-6 py-3 rounded-lg outline-none cursor-pointer",
          "hover:border-green-600",
          hasError
            ? "border-error-red focus:border-error-red"
            : "border-gray-500 focus:border-green-600",
        )}
      />
      {hasError && (
        <p id={errorId} className="text-error-red">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default TextInput;
