import Link from "next/link";
function Loginpage(){
    return(
     <>
     <h1>This is the LOGIN PAGE</h1>
     <br/>
     <br/>
     <Link href={"/"}>Return Home Page</Link>
     <br/><br/>
     <Link href={"/loginpage/loginpage2"}>Go to the other section</Link>
     <br/><br/>

     
     </>
    )
}
export default Loginpage;