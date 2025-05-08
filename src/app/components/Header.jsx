import Link from "next/link"
import DarkModeSwitch from "./DarkModede"
import { SignedIn,SignedOut,UserButton } from "@clerk/nextjs"


export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <ul className="flex gap-4">
            <SignedIn>
             <UserButton/>
             </SignedIn>
             <SignedOut>
              <Link href={'sign-up'}>S'enregistrer dans le monde des ultras</Link>
             </SignedOut>
              <li>
                  <Link href={'/sign-in'}>rentrer dans votre monde </Link>
              </li>
           
    
          <li className="hidden sm:block">
              <Link href={'/'}>Acceuil</Link>
          </li>
      
       
            <li className="hidden sm:block">
                <Link href={'/about'}>a propos du site </Link>
            </li>
            </ul>
            <div className="flex items-center gap-4">
              <DarkModeSwitch/>

            </div>

                <Link href={'/'} className="flex gap-1 items-center">
                 <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg "> Supporter de foot </span>
                 <span className="text-xl hidden sm:inline"> de france</span>
                 </Link>
          
         
    </div>
  )
}