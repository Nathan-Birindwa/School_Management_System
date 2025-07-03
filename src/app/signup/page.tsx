export default function Signup() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="flex flex-col  p-10 rounded-[8px] border-gray-400 sm:shadow-xl  shadow-none shadow-black/20">
          <div className="flex flex-col ">
            <h1 className="sm:text-4xl text-3xl text-[#03045e] font-semibold">
              Create an Acount
            </h1>
            <p className="text-gray-700">
              Register your school with us to use our service
            </p>
          </div>
          <div className="flex flex-col mt-5 gap-2">
            {/* Organinsation name */}
            <label className=" font-semibold text-[14px]" htmlFor="name">
              <span className="text-red-600">*</span> Organization name
            </label>
            <input
              type="text"
              id="name"
              className="border-1 border-gray-400 focus:outline-[#03045e] py-1.5 px-1.5 rounded-[6px]"
            />
            {/* Email */}
            <label className=" font-semibold text-[14px]" htmlFor="name">
              <span className="text-red-600">*</span> Email
            </label>
            <input
              type="text"
              id="name"
              className="border-1 border-gray-400 focus:outline-[#03045e] py-1.5 px-1.5 rounded-[6px]"
            />
            {/* Password */}
            <label className=" font-semibold text-[14px]" htmlFor="name">
              <span className="text-red-600">*</span> Password
            </label>
            <input
              type="text"
              id="name"
              className="border-1 border-gray-400 focus:outline-[#03045e] py-1.5 px-1.5 rounded-[6px]"
            />
            {/* Comfirm Password */}
            <label className=" font-semibold text-[14px]" htmlFor="name">
              <span className="text-red-600">*</span> Comfirm Password
            </label>
            <input
              type="text"
              id="name"
              className="border-1 border-gray-400 focus:outline-[#03045e] py-1.5 px-1.5 rounded-[6px]"
            />
            {/* Create account button  */}
            <button className="bg-[#03045e] text-white font-semibold rounded-[6px] cursor-pointer hover:bg-blue-900 mt-2 py-2 text-[17px]">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// sign up features
// Organization name
// Email
// Password
// Repeat password
