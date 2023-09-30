import { ButtonProps } from "../../types/index"

export const Button = ({title, className, onClick, }: ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`md:relative bottom-0 flex w-[120px] xs:w-[150px] h-[50px] bg-third-color 
      transition-all ease-in-out duration-300 items-center justify-center self-end 
      rounded-lg text-first-color hover:opacity-80 ${className}`}
    >
      {title}
    </button>
  )
}
