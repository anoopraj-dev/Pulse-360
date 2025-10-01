import { useState} from "react";
import Headings from "./Headings";
import Inputs from "./Inputs";
import PrimaryButton from "./PrimaryButton";
import SliderToggle from "./SliderToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useModal } from "../contexts/ModalContext";


const AuthCard = () => {
    const [isDoctor, setIsDoctor] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfrimPassword] = useState('');
    const isSignup = location.pathname==='/signup';
    const {openModal} = useModal();

    const handleSignup = async () => {
        try{
            const role = isDoctor ? 'doctor' : 'patient';
            const {data} = await api.post('/api/auth/signup',{
                name,
                email,
                password,
                confirmPassword,
                role
            });

            if(!data.success){
                openModal(data.message)
                console.log('first error')
                
            }else{
                openModal(data.message)
                console.log('succes')
                navigate('/verify-email',{state:{email:email}})
            }
        }catch(error:any){
            const message = 
            error?.response?.data?.message || error?.message || 'Something went wrong';
            openModal(message)
        }
    }

    const handleSignin = async() => {
        try {
            const role = isDoctor? 'doctor' : 'patient';
            const {data} = await api.post('/api/auth/signin',{
                email,
                password,
                role
            });

            if(!data.success) {
                console.log(data.message);
                openModal(data.message);
            }else{
                console.log(data.message);
                openModal(data.message);
                navigate('/patient/profile');
            }


        } catch (error:any) {
            const message = 
            error?.response?.data?.message || error?.message || 'Something went wrong';
            openModal(message)
        }
    }


    return (
        <div className="my-32">

            <div className="flex  flex-col items-center w-[550px] h-auto bg-white rounded-xl shadow-2xl p-6 px-16 border border-[rgba(117,202,255,0.5)]">
                <div className="flex items-center ml-16">
                    <Headings
                        text={
                            `${isDoctor ? "Doctor" : "Patient"} ${isSignup ? "Signup" : "Login"}`
                        }
                        className="flex justify-center "
                    />

                    <SliderToggle isChecked={isDoctor} onToggle={setIsDoctor} />
                </div>
                {
                    isSignup && (
                        <Inputs placeholder="Name" className="w-full" value={name} onChange={(e)=>setName(e.target.value)}/>
                    )
                }
                <Inputs placeholder='Email' type="email" className="w-full" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <Inputs placeholder='Password' type="password" className="w-full" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {
                    isSignup && (
                        <Inputs placeholder="Confirm Password" type='password' className="w-full" value={confirmPassword} onChange={(e)=>setConfrimPassword(e.target.value)} />
                    )
                }

                {
                    isSignup ? <></> : (
                        <div className="flex items-center mt-5">
                            <input type="checkbox" className="mr-2" />

                            <p className="">Remember me</p>
                        </div>
                    )
                }


                <PrimaryButton text={isSignup ? 'SIGN UP' : 'SIGN IN'} className="w-full mt-2" onClick={isSignup? handleSignup : handleSignin} />
                {
                    isSignup ? <></> : <PrimaryButton text='SIGNIN WITH GOOGLE' className="w-full bg-[#BD2F2F] mt-2" />
                }

                <div className="my-5">
                    
                    {
                        isSignup ? (<p>Already a member? <Link to='/signin'><span className="text-blue-600 underline">SignIn Now</span> </Link></p>) : (<>
                        <p>Forgot Password? <span className="text-blue-600 underline">Reset Password</span></p>
                        <p>Not a member yet? <Link to='/signup'><span className="text-blue-600 underline">Signup Now</span></Link> </p></>)
                    }

                </div>

            </div>
        </div>
    )
}

export default AuthCard;