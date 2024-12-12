import React from "react";
import Link from "next/link";
import "../styles/header_styles2.css";

export default function Header() {
    return (
        <header className="head">
            <nav className="nav-head">
                <Link href="/">Home</Link>
                <Link href="/problems">Problem</Link>
                <Link href="/contests">Contest</Link>
                <Link href="/settings">Setting</Link>
                <Link href="/settings">Fixed</Link>
            </nav>
        </header>
    );
}

// import React from "react";
// import Link from "next/link";
// import "../styles/header.css"

// export default function Header() {
//     return (
//         <div className = "head">
//             <div className = "webname">
//                 <Link href="/"><img className = "logo" src = "/logo.png" alt="Junior Dev"></img></Link>
//                 <Link href="/"><h1 style={{color:"black",marginLeft:"10px"}}>Junior Dev</h1></Link>
//             </div>
//             <div className="headTextContent">
//                 <div className="headText">
//                     <p><Link href="/">Home</Link></p>
//                     <p><Link href="/problems">Problems</Link></p>
//                     <p><Link href="/contests">Contests</Link></p>
//                     <p><Link href="/settings">Settings</Link></p>
//                     <p><Link href="/">Help5</Link></p>
//                 </div>
//             </div>
//         </div>
//     );
// }
