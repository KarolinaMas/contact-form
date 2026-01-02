import { useForm } from "react-hook-form";
import clsx from "clsx";

type ContactFormType = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: boolean;
  message: string;
  agreement: boolean;
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>();

  console.log(errors);

  const onSubmit = (formData: ContactFormType) => console.log(formData);

  return (
    <div className="bg-white flex flex-col gap-8 p-6 rounded-2xl text-[#2A4144]">
      <h1 className="text-[2rem] font-bold leading-[100%] tracking-[-1px]">
        Contact Us
      </h1>
      <form
        className="flex flex-col gap-6 leading-[150%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 outline-0">
          <label className="flex gap-2">
            First Name <span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            {...register("firstName", { required: "This field is required" })}
            className={clsx(
              "border border-[#86A2A5] px-6 py-3 rounded-lg outline-none",
              errors.firstName && "border-error-red"
            )}
          />
          {errors.firstName && (
            <p className="text-error-red">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex gap-2">
            Last Name <span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            {...register("lastName", {
              required: "This field is required",
            })}
            className="border border-[#86A2A5] px-6 py-3 rounded-lg outline-none"
          />
          {errors.lastName && (
            <p className="text-error-red">{errors.lastName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex gap-2">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="border border-[#86A2A5] px-6 py-3 rounded-lg outline-none"
          />
          {errors.email && (
            <p className="text-error-red">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2">
            Query Type <span className="text-green-600">*</span>
          </p>

          <label className="border border-[#86A2A5] px-6 py-3 rounded-lg text-lg flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value="generalEnquiry"
              {...register("queryType", {
                required: "Please select a query type",
              })}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded-full border-2 border-[#86A2A5]"></div>
            <span>General Enquiry</span>
          </label>

          <label className="border border-[#86A2A5] px-6 py-3 rounded-lg text-lg flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value="supportRequest"
              {...register("queryType", {
                required: "Please select a query type",
              })}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded-full border-2 border-[#86A2A5]"></div>
            <span>Support Request</span>
          </label>
          {errors.queryType && (
            <p className="text-error-red">{errors.queryType.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              Message <span className="text-green-600">*</span>
            </label>
            <textarea
              className="resize-none border border-[#86A2A5] rounded-lg h-60 px-6 py-3 outline-none"
              {...register("message", { required: "This field is required" })}
            ></textarea>
            {errors.message && (
              <p className="text-error-red">{errors.message.message}</p>
            )}
          </div>
          <label className="flex items-center gap-4 pr-5 cursor-pointer">
            <input
              type="checkbox"
              {...register("agreement", {
                required:
                  "To submit this form, please consent to being contacted",
              })}
              className="peer hidden"
            />
            <div className="w-4.5 h-4.5 shrink-0 flex items-center justify-center border-2 border-[#86A2A5] rounded-xs"></div>
            <p>
              I consent to being contacted by the team
              <span className="text-green-600 pl-1">*</span>
            </p>
          </label>
          <button
            className="text-white font-bold text-lg bg-green-600 py-4 rounded-lg cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
