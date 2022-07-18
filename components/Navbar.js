import Link from "next/link";

const Navbar = () => {
    return ( 
        <>
            <div className="w-screen grid grid-cols-8">
                <Link href="/">Home</Link>
                <Link href="/onboarding">Onboarding</Link>
                <Link href="/signin">Signin</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/analytics">Analytics</Link>
                <Link href="/addhabits">New Habits</Link>
                <Link href="/camera">Camera</Link>
                <Link href="/settings">Settings</Link>
            </div>
        </>
     );
}
 
export default Navbar;