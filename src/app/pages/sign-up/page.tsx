'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
    const router = useRouter();
    const handleSignup = () => {
        //logic
        router.push("/pages/homepage")
    };
    return(
        <div className="tw-flex tw-h-screen ">
        <div className=' tw-h-screen'>
            <img
            src='/signup-signin.jpg'
            alt='chair'
            className='tw-h-screen'
            /> 
        </div>
        <div className='tw-flex tw-items-center tw-justify-center tw-flex-grow'>
            <div className='tw-w-[456] tw-flex tw-justify-start tw-flex-col'>
                <h1 
                    className='tw-text-neutral-n7 tw-font-semibold tw-ml-0 tw-text-4xl tw-mb-8'>
                    Sign up
                    </h1>
                <p className='tw-text-neutral-n4 tw-mb-7'>Already have an account? <Link 
                        href="/pages/sign-in" 
                        className="tw-text-secondary-green">
                        Sign in
                        </Link>
                </p>
                <input type='text' placeholder='Your name' className='tw-text-neutral-n4 tw-h-[32px] tw-mb-5 '></input>
                <input type='text' placeholder='Username' className='tw-text-neutral-n4 tw-h-[32px] tw-mb-5'></input>
                <input type='email' placeholder='Email address' className='tw-text-neutral-n4 tw-h-[32px] tw-mb-5'></input>
                <input type='password' placeholder='Password' className='tw-text-neutral-n4 tw-h-[32px] tw-mb-5'></input>
                

                <div className='tw-flex tw-items-center tw-justify-start  '>
                    <input type='checkbox' className='tw-w-4 tw-h-[26px] tw-mr-5 tw-cursor-pointer '></input> 
                    <label  className='tw-text-neutral-n4 ' > 
                        I agree with <b className='tw-text-primary-pm1 tw-cursor-pointer'>Privacy Policy</b> and <b className='tw-text-primary-pm1 tw-cursor-pointer'>Terms of Use</b>
                    </label>
                </div>

                <div className="tw-flex tw-justify-start">
                            <button  onClick={handleSignup} className="tw-w-full tw-text-neutral-n1 tw-bg-primary-pm1 tw-h-[48px] tw-rounded-xl tw-mt-8">
                                Sign Up
                            </button>
                </div>
            </div>
        </div>

        </div>
    );
}