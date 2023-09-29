import { QuizHeader } from "../components/QuizHeader"
import { Link } from "react-router-dom"
import { Questions } from "../components/Questions"
import { Button } from "../components/Button"
import { ExitPopup } from "../components/ExitPopup"
import { HintPopup } from "../components/HintPopup"
import { useQuiz } from "../hooks"
import { DisplayInfo } from "../components/DisplayInfo"

export const Quiz = () => {
  

  const {
    currentQuestion,
    shuffledQuestions,
    shuffledOptions,
    selectedOption,
    isCorrect,
    isAnswerChecked,
    correctAnswers,
    exitPopup,
    hintPopup,
    handleExit,
    handleHint,
    handleNextQuestion,
    handleOptionClick,
    hint,
    questions
  } = useQuiz()

  return (
    <>
      <section className="z-0">
        <QuizHeader 
          handleExit={() => handleExit()}
          handleHint={() => handleHint()}
          hintPopup={hintPopup}
          exitPopup={exitPopup}
          isAnswerChecked={isAnswerChecked}
          className="absolute top-0 left-0" 
        />

        <div className="padding-x max-w-[890px] max-sm:min-h-screen mx-auto flex flex-col 
          justify-between"
        >
          <div className="mt-20 sm:mt-24">
            
            <DisplayInfo currentQuestion={currentQuestion} questions={questions}/>

            {
              currentQuestion < shuffledQuestions.length &&
              <Questions 
                currentQuestion={currentQuestion} 
                isAnswerChecked={isAnswerChecked}
                selectedOption={selectedOption}
                isCorrect={isCorrect}
                shuffledOptions={shuffledOptions}
                shuffledQuestions={shuffledQuestions}
                handleOptionClick={handleOptionClick}
              />
            }
            
            {
              currentQuestion === shuffledQuestions.length &&
              <div className="w-full mb-28 sm:px-[73px] pt-10 text-center text-first-color">
                Você acertou {correctAnswers} de {questions.length} perguntas!
              </div>
            }

          </div>
        
          { 
            currentQuestion < shuffledQuestions.length &&
            <Button
              title="Próximo"
              onClick={handleNextQuestion}
              className="mb-4 sm:mr-[73px]"
            />
          }
          
          {
            currentQuestion === shuffledQuestions.length &&
            <Link to={'/'} className="self-end">
              <Button title="Home" className="mb-4 sm:mr-[73px]"/>
            </Link>
          }
          
        </div>
      
      </section>

      {exitPopup && 
        <ExitPopup
          handleExit={handleExit}
          exitPopup={exitPopup}
        />
      }

      {hintPopup &&
        <HintPopup
          handleHint={handleHint}
          hintPopup={hintPopup}
          hint={hint}
        />
      }
    </>
  )
}