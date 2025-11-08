import { useForm } from "react-hook-form";

const App = () => {
  const { register } = useForm();

  return (
    <div className="bg-white flex flex-col gap-8 p-6 rounded-2xl text-[#2A4144]">
      <h1 className="text-[2rem] font-bold leading-[100%] tracking-[-1px]">
        Contact Us
      </h1>
      <form className="flex flex-col gap-6 leading-[150%]">
        <div className="flex flex-col gap-2">
          <label className="flex gap-2">
            First Name <span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="border border-[#86A2A5] px-6 py-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex gap-2">
            Last Name <span className="text-green-600">*</span>
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="border border-[#86A2A5] px-6 py-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex gap-2">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input
            type="email"
            {...register("email")}
            className="border border-[#86A2A5] px-6 py-3 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="flex gap-2">
            Query Type <span className="text-green-600">*</span>
          </label>

          <label className="border border-[#86A2A5] px-6 py-3 rounded-lg text-lg flex items-center gap-3 cursor-pointer">
            <input type="radio" className="peer hidden" />
            <div className="w-5 h-5 rounded-full border-2 border-[#86A2A5]"></div>
            <span>General Enquiry</span>
          </label>

          <label className="border border-[#86A2A5] px-6 py-3 rounded-lg text-lg flex items-center gap-3 cursor-pointer">
            <input type="radio" className="peer hidden" />
            <div className="w-5 h-5 rounded-full border-2 border-[#86A2A5]"></div>
            <span>Support Request</span>
          </label>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label className="flex gap-2">
              Message <span className="text-green-600">*</span>
            </label>
            <textarea
              className="resize-none border border-[#86A2A5] rounded-lg h-60 px-6 py-3"
              {...register("message")}
            ></textarea>
          </div>
          <label className="flex items-center gap-4 pr-5 cursor-pointer">
            <input type="checkbox" className="peer hidden" />
            <div className="w-4.5 h-4.5 shrink-0 flex items-center justify-center border-2 border-[#86A2A5] rounded-xs"></div>
            <p>
              I consent to being contacted by the team
              <span className="text-green-600 pl-1">*</span>
            </p>
          </label>
          <button
            className="text-white font-bold text-lg bg-green-600 py-4 rounded-lg"
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
