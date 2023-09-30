import { useLocation } from 'react-router-dom';

import { Lightbulb, LogOut } from 'lucide-react';

import { HeaderProps } from '../../types/index';

export function QuizHeader(
  {
    className, 
    handleExit, 
    exitPopup, 
    hintPopup, 
    handleHint, 
    isAnswerChecked 
  }:HeaderProps) {

  const location = useLocation()
  const isQuizPage = location.pathname.startsWith('/quiz')


  return (
    <header className={`w-full padding-x h-20 flex items-center border-b border-border-color ${className} ${isQuizPage ? 'bg-body-color-light': 'bg-body-color'}`}>
      <nav className="max-container w-full flex items-center justify-between">
        <p className="text-2xl text-first-color font-semibold cursor-default">Quizz.</p>
       
       { isQuizPage && (
       <div className='flex gap-8 items-center text-first-color'>
          <button
            disabled={isAnswerChecked}
            onClick={()=> handleHint(hintPopup)}
            className='cursor-pointer'
          >
            <Lightbulb size={28} />
          </button>
          <div
            onClick={() => handleExit(exitPopup)}
            className='bg-third-color p-1 rounded cursor-pointer'
          >
            <LogOut className='rotate-180' />
          </div>
        </div>)}
      </nav>
    </header>
  )
}
