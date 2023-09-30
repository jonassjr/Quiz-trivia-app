import { Link } from "react-router-dom"
import { Button } from "./Button"

import { ExitPopupProps } from "../../types/index"

export const ExitPopup = ({ handleExit, exitPopup }: ExitPopupProps) => {
  
  return (
    <div 
      className="absolute top-0 left-0 bottom-0 right-0 z-50 min-h-[563px] h-screen
      bg-slate-400 bg-opacity-50 flex justify-center items-center"
    >
       <article className="w-full max-w-[550px] mx-3 h-[300px] bg-body-color rounded-xl shadow-2xl px-6 flex flex-col justify-between popup">
         <p className="h-[80px] justify-center text-base text-first-color flex items-center border-b ">Tem Certeza que deseja sair ?</p>
       
         <div className="flex justify-between mb-6">
         <Button
             onClick={() => handleExit(exitPopup)}
             title="Ficar"
            className="bg-transparent text-first-color border-2 
            border-first-color"
           />
           
           <Link to={'/'}>
             <Button 
              title="Sair"
             
             />
           </Link>  
         </div>
       </article>
     </div>
  )
}
