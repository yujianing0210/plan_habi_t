import Image from 'next/image'
import logo from '../public/logo.jpg'

const Signin = () => {
    return (
        <div className="w-[100vw] h-[100vh] grid grid-rows-3 bg-white">
            <div className="justify-self-center place-self-end">
                <Image src={logo} width={200} height={200} />
            </div>
            <div className="justify-self-center pt-90 flex flex-col gap-3 w-80">
                <div className="w-full text-center text-xl font-bold my-10">Login</div>
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered bg-white" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="input-group input-group-vertical">
                        <span>Password</span>
                        <input type="text" className="input input-bordered bg-white" />
                    </label>
                </div>
            </div>
            <div className="justify-self-center place-self-end pb-10">
                <div className="btn bg-red-300 text-black w-full">Login</div>
                <div className="text-center py-10">
                    Forgot password? <br />
                    Don't have an account? Sign up
                </div>
            </div>
        </div>
    );
}

export default Signin;