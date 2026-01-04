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
  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-4 pr-5 cursor-pointer">
        <input
          type="checkbox"
          {...register(name, rules)}
          className="peer hidden"
        />
        <div
          className={clsx(
            "w-4.5 h-4.5 shrink-0 flex items-center justify-center border-2 border-[#86A2A5] rounded-xs",
            "peer-checked:bg-green-600 peer-checked:border-none"
          )}
        >
          <FaCheck className="text-white w-3 h-3" />
        </div>
        <p>
          {label}
          <span className="text-green-600 pl-1">*</span>
        </p>
      </label>
      {errors?.[name] && (
        <p className="text-error-red">{errors?.[name]?.message?.toString()}</p>
      )}
    </div>
  );
}

export default CheckboxInput;
