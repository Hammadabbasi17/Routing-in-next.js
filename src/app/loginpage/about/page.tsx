"use client"


import { useRouter } from "next/navigation";




function Aboutpage1(){
    const router = useRouter()
    return(
        <>
        
        <h1>Welcome to the About Page</h1>
        <button onClick={()=>router.push("/loginpage")}>Return login PAGE</button>
        </>
    )
}
export default Aboutpage1;