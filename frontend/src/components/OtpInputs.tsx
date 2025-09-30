import { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function OtpVerification() {
  const [secondsLeft, setSecondsLeft] = useState(120)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft])

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const time = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  p-48 place-items-center">

      <img
        src="/banner.webp"
        alt="OTP Illustration"
        className="w-3/4 h-auto"
      />

      <div className="flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
          <p className="mb-6">Enter the OTP sent to your email.</p>

          <form className="space-y-4">
            <div className="flex gap-2 justify-center mb-4">
              {[...Array(6)].map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength={1}
                  placeholder=""
                  className="bg-white border border-opacity-20 border-[rgba(117,202,255,0.5)] rounded-md w-12 h-12 text-center text-xl focus:border-blue-500 focus:outline-none"
                />
              ))}
            </div>
            <div className="flex items-center justify-between">
              <PrimaryButton text="Submit OTP" className="w-full" />
            </div>


          </form>
          <div className="flex justify-evenly">
            <p className="mt-4 text-sm text-gray-600 text-center">
              Didn’t receive the OTP?{" "}
              <a
                href="#"
                className="text-blue-500"
              >
                {secondsLeft === 0 ? "Resend" : time}
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
