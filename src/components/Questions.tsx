import { Circle, CheckCircle2, XCircle } from "lucide-react"

import { QuestionsProps } from "../../types"

export const Questions = (
  {
    currentQuestion, 
    shuffledQuestions, 
    shuffledOptions, 
    selectedOption, 
    isAnswerChecked, 
    isCorrect, 
    handleOptionClick
  }: QuestionsProps) => {

  return (
    <div className="w-full mb-14 relative sm:px-[73px] flex flex-col gap-y-14 m-auto pt-10 text-first-color">
      {
        currentQuestion < shuffledQuestions.length &&
        <p className="text-base">
          {shuffledQuestions[currentQuestion].question }
        </p>
      }

      <div className="flex flex-col gap-y-4 justify-between text-base">

        {shuffledQuestions.length > 0 && (shuffledOptions.map((option, index: number) => (
         <div
          key={index}
          className={`flex gap-x-4 items-start 
            ${
              selectedOption === option
                ? isAnswerChecked
                  ? isCorrect
                    ? 'text-second-color'
                    : 'text-error-color'
                  : 'text-third-color'
                : ''
              }
            ${
              isAnswerChecked 
              && option === shuffledQuestions[currentQuestion].answer 
              ? 'text-second-color': ''
            }`}
          >
            <button
              id={option}
              disabled={isAnswerChecked}
              onClick={() => handleOptionClick(index)}
            >
              {
                selectedOption === option 
                ? isAnswerChecked 
                  ? isCorrect 
                    ? <CheckCircle2 className="flex-nowrap"/> 
                    : <XCircle />
                  : <CheckCircle2 />
                : isAnswerChecked && option === shuffledQuestions[currentQuestion].answer ? <CheckCircle2 /> : <Circle />
              }
            </button>
            <label htmlFor={option} className={`${!isAnswerChecked ? 'cursor-pointer': ''} text-left`}>{option}</label>
         </div>
        )))}
      </div>
    </div>
  )
}
