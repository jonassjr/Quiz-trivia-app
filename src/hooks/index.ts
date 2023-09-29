import { useEffect, useState, useMemo } from 'react'
import { Question } from '../../types';
import { MyDataQuestions } from '../DataQuestions';
import { useParams } from 'react-router-dom';

export const useQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([])
  const [selectedOption, setSelectedOption] = useState<string>()
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [exitPopup, setExitPopup] = useState(false)
  const [hintPopup, setHintPopup] = useState(false)

  const { id } = useParams()

  const questions = useMemo(() => {
    if (id !== undefined) {
      return MyDataQuestions[id] || []
    }
    return []
  }, [id])
  
  useEffect(() => {

    // Embaralhe as perguntas quando o componente for montado
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled);
    shuffleOptions(shuffled[0].options)

  }, [questions])

  useEffect(() => {
    // Quando a pergunta atual mudar, embaralhe as opções
    if (currentQuestion >= 0 && currentQuestion < shuffledQuestions.length) {
      shuffleOptions(shuffledQuestions[currentQuestion].options)
    }
  }, [currentQuestion, shuffledQuestions])

  const shuffleOptions = (options: string[]) => {
    const shuffled = [...options].sort(() => Math.random() - 0.5)
    setShuffledOptions(shuffled)
  };

  const hint = shuffledQuestions[currentQuestion]?.hint

  const handleNextQuestion = () => {
    if (selectedOption && currentQuestion < shuffledQuestions.length) {

      const isUserCorrect =
      selectedOption === shuffledQuestions[currentQuestion].answer
      
      setIsCorrect(isUserCorrect)

      if(isCorrect) {
        setCorrectAnswers(correctAnswers + 1)
      }

      setIsAnswerChecked(true)
      } 

      if (isAnswerChecked){
        setCurrentQuestion(currentQuestion + 1)
        setIsAnswerChecked(false)
        setIsCorrect(false)
        setSelectedOption('')
      }

    if (currentQuestion === shuffledQuestions.length) {
      setIsAnswerChecked(true)
    }

  }
  
  const handleOptionClick = (index: number) => {
    const option = shuffledOptions[index];
    setSelectedOption(option)
  }

 
  const handleExit = () => {
    setExitPopup(prevExitPopup => !prevExitPopup);
  }
  
  const handleHint = () => {
    if(currentQuestion !== shuffledQuestions.length){
      setHintPopup(prevHintPopup => !prevHintPopup)
    }
  }
  
  return {
    currentQuestion,
    setCurrentQuestion,
    shuffledQuestions,
    setShuffledQuestions,
    shuffledOptions,
    setShuffledOptions,
    selectedOption,
    setSelectedOption,
    isCorrect,
    setIsCorrect,
    isAnswerChecked,
    setIsAnswerChecked,
    correctAnswers,
    setCorrectAnswers,
    exitPopup,
    setExitPopup,
    hintPopup,
    setHintPopup,
    handleExit,
    handleHint,
    handleNextQuestion,
    handleOptionClick,
    hint,
    questions
  }
}
