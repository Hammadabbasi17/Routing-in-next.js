"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main >

             <h1 className="text">HOME PAGE</h1>
             
             <br/>
             <br/>
             <h2>Click the link below and go to the login page</h2>
             <Link href={"./loginpage"}>Go to Login Page</Link>
             <br/>
             <br/>
             <button onClick={()=>router.push("/aboutpage")}>Go to About Page</button>

             <br/>
             <br/>
             <Link href={"./studentlist"}>STUDENT   LIST</Link>
             <br/>
             <br/>
             <Link href={"./productlist"}>Product list</Link>
      </main>
      
    </div>
  );
}