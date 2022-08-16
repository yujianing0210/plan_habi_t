import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.jpg'

const Forget_password = () => {
    return (
        <div className="w-[100vw] h-[100vh] grid grid-rows-2 bg-white ">
            {/* Part 1 of grid - logo + description */}
            <div className="justify-self-center place-self-end ">
                {/* mx-auto = margin of the x-axis to set to auto - meaning the item is implied to be at the middle */}
                {/* w-fit = the width is equal to the width of the asset */}
                <div className='mx-auto w-fit '>
                    <Image src={logo} width={200} height={200} />
                </div>
                <div className="justify-self-center pt-90 flex flex-col gap-3 w-80">
                    <div className="w-full text-center text-xl font-bold my-10">FORGOT YOUR PASSWORD?</div>
                </div>
            </div>

            {/* Part 2 of grid - form */}
            <div className="justify-self-center pb-10 ">
                <div className="text-center py-6 w-80 mx-auto ">
                    Enter your registered email below to receive verification code
                </div>
                {/* create a div to wrap around your target - a nice little trick to use if your CSS doesn't show any effect */}
                <div className='w-fit mx-auto'>
                    <input type="text" placeholder="info@site.com" className="input input-bordered bg-white w-80" />
                </div>
                <div className="text-center btn bg-red-300 text-black gap-3 w-80">Send Verification Code</div>
                <div className="text-center py-10">
                    Remember password? <Link href='/signin'><p>Sign in</p></Link>
                </div>
            </div>
        </div>
    );
}

export default Forget_password;