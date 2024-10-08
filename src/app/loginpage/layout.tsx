import './loginpage.css'
import Link from 'next/link'


export default function layout({  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <>
        <div className='header'>
            <div className='head'><h2>HM Traveler</h2></div>
             <ul>
                <li>
                    <Link href={"/loginpage"}>Login</Link>

                </li>
                <li>
                    <Link href={"/loginpage/about"}>About</Link>

                </li>
                <li>
                    <Link href={"/loginpage/courses"}>Courses</Link>

                </li>

                <li>
                    <Link href={"/loginpage/contact"}>Contact</Link>

                </li>



             </ul>



        </div>
        
        {children}
        </>
    )

}