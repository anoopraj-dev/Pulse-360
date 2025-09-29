export default function OtpVerification() {
  return (
    <div className=" grid grid-cols-2 p-48">
      {/* Left Side - Image */}

        <img
          src="/banner.webp" // replace with your image
          alt="OTP Illustration"
          className="w-3/4 h-auto"
        />


      {/* Right Side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
          <p className="mb-6">Enter the OTP sent to your email.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 mr-2 w-16 p-4"
            />
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 mr-2 w-16 p-4"
            />
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 w-16 p-4"
            />
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 w-16 p-4"
            />
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 w-16 p-4"
            />
            <input
              type="text"
              placeholder=""
              className="border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md my-1 w-16 p-4"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Verify OTP
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Didn’t receive the OTP? <a href="#" className="text-blue-500">Resend</a>
          </p>
        </div>
      </div>
    </div>
  );
}
