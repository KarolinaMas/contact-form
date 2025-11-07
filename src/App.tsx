import { useForm } from "react-hook-form";

const App = () => {
  const { register } = useForm();

  return (
    <div className="bg-white flex flex-col gap-8 p-6 rounded-2xl text-[#2A4144]">
      <h1 className="text-[2rem] font-bold leading-[100%] tracking-[-1px]">
        Contact Us
      </h1>
      <form>
        <div className="flex flex-col">
          <label>
            First Name <span>*</span>
          </label>
          <input type="text" {...register("firstName")} />
        </div>
        <div>
          <label>
            Last Name <span>*</span>
          </label>
          <input type="text" {...register("lastName")} />
        </div>
        <div>
          <label>
            Email Address <span>*</span>
          </label>
          <input type="email" {...register("email")} />
        </div>
        <input type="text" />
        <label>
          Query Type <span>*</span>
        </label>
        <input type="radio" />
        <input type="radio" />
        <textarea name="" id=""></textarea>
        <input type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
