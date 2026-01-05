import { useForm } from "react-hook-form";
import RadioInput from "./components/RadioInput";
import TextInput from "./components/TextInput";
import TextareaInput from "./components/TextareaInput";
import CheckboxInput from "./components/CheckboxInput";
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
    <div className="flex justify-center">
      <div
        className={clsx(
          "bg-white w-full shrink-0 flex flex-col gap-8 p-6 rounded-2xl text-gray-900",
          "md:p-10 md:max-w-[690px]"
        )}
      >
        <h1 className="text-[2rem] font-bold leading-[100%] tracking-[-1px]">
          Contact Us
        </h1>
        <form
          className="flex flex-col gap-6 leading-[150%]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            <TextInput<ContactFormType>
              name="firstName"
              label="First Name"
              register={register}
              errors={errors}
              rules={{ required: "This field is required" }}
            />

            <TextInput<ContactFormType>
              name="lastName"
              label="Last Name"
              register={register}
              errors={errors}
              rules={{ required: "This field is required" }}
            />
          </div>

          <TextInput<ContactFormType>
            name="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            }}
          />

          <div className="flex flex-col gap-4">
            <p className="flex gap-2">
              Query Type <span className="text-green-600">*</span>
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <RadioInput<ContactFormType>
                name="queryType"
                value="generalEnquiry"
                label="General Enquiry"
                register={register}
              />

              <RadioInput<ContactFormType>
                name="queryType"
                value="supportRequest"
                label="Support Request"
                register={register}
              />
            </div>

            {errors.queryType && (
              <p className="text-error-red">{errors.queryType.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-10">
            <TextareaInput
              name="message"
              label="Message"
              register={register}
              errors={errors}
            />

            <CheckboxInput
              name="agreement"
              label="I consent to being contacted by the team"
              register={register}
              errors={errors}
              rules={{
                required:
                  "To submit this form, please consent to being contacted",
              }}
            />

            <button
              className={clsx(
                "text-white font-bold text-lg bg-green-600 py-4 rounded-lg cursor-pointer",
                "transition-colors duration-500 ease-in-out",
                "hover:bg-green-900"
              )}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
