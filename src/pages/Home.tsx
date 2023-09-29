import { Link } from "react-router-dom"

import { cards } from "../constants"

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'

import { Mousewheel } from "swiper/modules"

export const Home = () => {

  return (
    <section className="min-h-screen">

      <header className={`w-full padding-x h-20 flex items-center border-b border-border-color`}>
        <nav className="max-container w-full flex items-center justify-between">
          <a href="/" className="text-2xl text-first-color font-semibold">Quizz.</a>
        </nav>
      </header>

      <div className="max-container py-8 md:py-12">
        <div className="flex flex-col gap-y-4 padding-x">
          <h1 className="text-first-color text-2xl md:text-3xl">Escolha uma categoria</h1>
          <span className="h-[3px] w-44 rounded bg-first-color block"></span>
        </div>

        <div className="">
          <Swiper
            spaceBetween={-50}
            slidesPerView={1}
            className="padding-x p-10"
            mousewheel={true}
            modules={[Mousewheel]}
            breakpoints={{
              400: {
                slidesPerView: 2,
                spaceBetween: -20
              },
              800: {
                slidesPerView: 3,
                spaceBetween: -30
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: -30
              },
            }}
          >
            {
              cards.map((card) => (
                <SwiperSlide 
                  key={card.id}
                  className=""
                >
                  <Link to={`/quiz/${card.id}`}>
                    <img src={card.img} alt="card image" className="w-3/4 max-w-[285px] shadow-custom card cursor-pointer transition-all" />
                  </Link>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

    </section>
  )
}
