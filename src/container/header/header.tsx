import Image from "next/image";
import NavLink from "../nav-link/nav-link";

export default function Header() {

    return (
        <header className="flex flex-row h-14 p-2.5 gap-2 text-purple-700 bg-amber-300 border-purple-700 border-b-2">
            <Image
                className='object-cover w-auto'
                src='/logo.png'
                alt='Site Logo'
                width={50}
                height={50}
            />
            <span className="text-2xl self-center hidden sm:block">
                Demo NextJS
            </span>
            <NavLink />
        </header> 
    )
}