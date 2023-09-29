import { Lightbulb, XCircle } from "lucide-react"
import { HintPopupProps } from "../../types/index"

export const HintPopup = ({handleHint, hintPopup, hint}: HintPopupProps) => {
  return (
      <div 
        className="absolute top-0 left-0 bottom-0 right-0 z-50 min-h-[563px] h-screen
        bg-slate-400 bg-opacity-50 flex justify-center items-center"
      >
      <article className="w-full max-w-[550px] mx-3 h-[300px] bg-body-color rounded-xl shadow-2xl px-6 flex flex-col popup">
        <div className="h-[80px] text-base text-first-color flex justify-between border-b items-center ">
          <Lightbulb size={28} />
          <XCircle 
            onClick={() => handleHint(hintPopup)}
            className="cursor-pointer"
            size={28}/>
        </div>
        <p className="mt-4 text-first-color">
          {hint}
        </p>
      </article>
    </div>
  )
}
