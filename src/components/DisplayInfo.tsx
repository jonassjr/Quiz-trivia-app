import { AlertCircle } from "lucide-react"
import { DisplayInfoProps } from "../../types"
import { cards } from '../constants'
import { useParams } from "react-router-dom"


export const DisplayInfo = ({currentQuestion, questions}: DisplayInfoProps) => {
  
  const { id } = useParams()

  const card = cards.find((card) => card.id === id)
  
  return (
    <div className="w-full flex justify-center border-b border-border-color">
      <div className="sm:px-[73px] h-[80px] w-full flex items-center justify-between gap-x-6">
      
        <div className="flex gap-x-4 items-center text-sm text-first-color">
          <AlertCircle className="text-second-color"/>
          {card?.title}
        </div>

        <div className="text-first-color text-sm flex flex-col gap-y-2 text-center w-[170px]">
          {currentQuestion > 0 ? ((currentQuestion/questions.length) * 100).toFixed()  : 0}% Completo
          <div className="relative bg-border-color">
            <div className={`h-[3px] rounded bg-third-color`} style={{ width: (currentQuestion/questions.length) * 170}}></div>
          </div>
        </div>
      </div>  
    </div>
  )
}
