import type {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
} from "react-hook-form";

import clsx from "clsx";

type TextareaInputProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
};

function TextareaInput<T extends FieldValues>({
  name,
  label,
  register,
  errors,
}: TextareaInputProps<T>) {
  const errorId = `${name}-error`;
  const hasError = !!errors?.[name];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="flex gap-2">
        {label} <span className="text-green-600">*</span>
      </label>
      <textarea
        id={name}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={clsx(
          "resize-none text-lg leading-[150%] border rounded-lg h-60 px-6 py-3 outline-none",
          "md:h-33",
          "lg:h-26.25",
          hasError
            ? "border-error-red focus:border-error-red"
            : "border-gray-500 focus:border-green-600",
        )}
        {...register(name, { required: "This field is required" })}
      ></textarea>
      {hasError && (
        <p id={errorId} className="text-error-red">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default TextareaInput;
