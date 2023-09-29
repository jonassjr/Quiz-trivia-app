export interface HintPopupProps {
  handleHint: (hintPopup: boolean) => void
  hintPopup: boolean
  hint: string
}

export interface ExitPopupProps {
  handleExit: (exitPopup: boolean) => void
  exitPopup: boolean
}

export interface QuestionsProps {
  currentQuestion: number
  shuffledQuestions: Question[]
  shuffledOptions: string[]
  selectedOption: string | undefined
  isAnswerChecked: boolean
  isCorrect: boolean
  handleOptionClick: (index: number) => void
}

export interface Question {
  question: string
  options: string[]
  answer: string
  hint: string
}

export interface ButtonProps {
  title: string
  className?: string
  onClick?: () => void
}

export interface HeaderProps {
  className: string
  handleExit: (exitPopup: boolean) => void
  handleHint: (hintPopup: boolean) => void
  exitPopup: boolean
  hintPopup: boolean
  isAnswerChecked: boolean
}

export interface DisplayInfoProps {
  currentQuestion: number
  questions: Question[]
}

export interface DataQuestions {
  [theme: string]:Question[]
}