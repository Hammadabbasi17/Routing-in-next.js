import Link from "next/link"

export default function Studentlist(){
    return(
        <>
        <br/> <br/> <br/>
        <h1>STUDENT LIST</h1>

        <br/> <br/> <br/>
        <ul>
                <li>
                    <Link href={"/studentlist/sajjad"}>Sajjad</Link>

                </li>
                <li>
                    <Link href={"/studentlist/usman"}>Usman</Link>

                </li>
                <li>
                    <Link href={"/studentlist/ali"}>Ali</Link>

                </li>

                <li>
                    <Link href={"/studentlist/Ahmed"}>Ahmed</Link>

                </li>


             </ul>
            


        
        </>
    )
}