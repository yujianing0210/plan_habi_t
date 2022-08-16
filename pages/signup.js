import Image from 'next/image'
import logo from '../public/logo.jpg'
import Link from 'next/link'
import { LockClosedIcon } from '@heroicons/react/outline'
import { UserIcon } from '@heroicons/react/outline'
import { MailIcon } from '@heroicons/react/outline'

const Signup = () => {
    return (
        <div className="w-[100vw] h-[100vh] grid grid-rows-3 bg-white">

            {/* Part 1 of grid - Logo */}
            <div className="justify-self-center place-self-end">
                <Image src={logo} width={150} height={150} />
            </div>

            {/* Part 2 of grid - forms */}
            <div className="justify-self-center pt-90 flex flex-col gap-3 w-80">
                <div className="w-full text-center text-xl font-bold my-10">CREATE A NEW ACCOUNT</div>
                <div className="form-control flex flex-row w-full">
                    <UserIcon className='w-6 h-6 my-3 mr-5' />
                    <input type="text" placeholder="info@site.com" className="input input-bordered bg-white w-full" />
                </div>
                <div className="form-control flex flex-row w-full">
                    <MailIcon className='w-6 h-6 my-3 mr-5' />
                    <input type="text" placeholder="info@site.com" className="input input-bordered bg-white w-full" />
                </div>
                <div className="form-control flex flex-row w-full">
                    <LockClosedIcon className='w-6 h-6 my-3 mr-5' />
                    <input type="text" className="input input-bordered bg-white w-full" />
                </div>    
            </div>
            
            {/* Part 3 of grid - confirmation */}
            <div className="justify-self-center place-self-end pb-3 ">
                <div class="form-control">
                    <label class="cursor-pointer label w-full">
                        <input type="checkbox"class="checkbox checkbox-accent" />
                        <p class="label-text w-full mx-1">Keep me signed in</p>
                    </label>
                </div>
                <div class="form-control">
                    <label class="cursor-pointer label w-full">
                        <input type="checkbox" class="checkbox checkbox-accent" />
                        <span class="label-text w-full mx-1">Email me updates information</span>
                    </label>
                </div>
                <div className="btn bg-red-300 text-black w-full">Create Account</div>
                <div className="text-center py-10">
                    Already have an account? <br />
                    <Link href='/signin'><p>Sign in</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;