import checkIcon from "../assets/check-icon.svg";

function MessageBox() {
  return (
    <div className="absolute bg-gray-900 p-6 rounded-xl max-w-81.75 sm:max-w-112.5">
      <p className="text-white flex gap-2 font-semibold text-lg mb-2">
        <img src={checkIcon} alt="circle icon with checked symbol inside." />
        <span>Message Sent!</span>
      </p>
      <p className="text-green-200 font-light">
        Thanks for completing the form. We’ll be in touch soon!
      </p>
    </div>
  );
}

export default MessageBox;
