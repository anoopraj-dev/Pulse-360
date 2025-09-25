import Headings from "./Headings";
import Inputs from "./Inputs";
import PrimaryButton from "./PrimaryButton";
import Subtext from "./Subtext";

const AuthCard = () => {
    return (
        <div className="my-32">
            
            <div className="flex  flex-col items-center w-[450px] h-auto bg-white rounded-xl shadow-lg p-6 border border-[#75CAFF]">
                <Headings text='SIGN IN' className="flex justify-center"/>
                <Inputs placeholder='Email' type="email" className="w-full"/>
                 <Inputs placeholder='Password' type="password" className="w-full"/>
                 <div className="flex justify-items-end">
                    <input type="checkbox"  className="mr-2"/>
                    <Subtext text='Remember me' />
                 </div>
                 <PrimaryButton text="SIGN IN" className="w-full mt-2"/>
                 <PrimaryButton text='SIGNIN WITH GOOGLE' className="w-full bg-[#BD2F2F] mt-2" />
                 <div>
                    <p>Forgot Password? <span>Reset Password</span></p>
                    <p>Not a member yet? <span>Signup Now</span></p>
                 </div>

            </div>
        </div>
    )
}

export default AuthCard;