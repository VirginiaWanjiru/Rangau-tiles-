// "use client"

// import type React from "react"
// import { useState, useEffect, useRef, useCallback } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// interface CarouselProps {
//   slides: { image: string; title: string; description: string }[]
// }

// const Carousel: React.FC<CarouselProps> = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0)
//   const [direction, setDirection] = useState<number>(1) // 1 for right, -1 for left
//   const touchStartX = useRef<number | null>(null)
//   const touchEndX = useRef<number | null>(null)
//   const progressRef = useRef<HTMLDivElement>(null)
//   const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

//   const goToPrevious = useCallback(() => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
//   }, [slides.length])

//   const goToNext = useCallback(() => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
//   }, [slides.length])

//   useEffect(() => {
//     let timer: NodeJS.Timeout

//     if (isAutoPlaying) {
//       // Reset progress animation
//       if (progressRef.current) {
//         progressRef.current.style.width = "0%"
//         progressRef.current.style.transition = "none"
//         // Force reflow
//         void progressRef.current.offsetWidth
//         progressRef.current.style.width = "100%"
//        progressRef.current.style.transition = "width 6000ms cubic-bezier(0.4, 0, 0.2, 1)"
//       }

//       timer = setTimeout(goToNext, 5000)
//     }

//     return () => clearTimeout(timer)
//   }, [goToNext, currentIndex, isAutoPlaying])

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX
//     setIsAutoPlaying(false)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX
//   }

//   const handleTouchEnd = () => {
//     if (touchStartX.current !== null && touchEndX.current !== null) {
//       const diff = touchStartX.current - touchEndX.current
//       if (diff > 50) {
//         setDirection(1)
//         goToNext()
//       }
//       if (diff < -50) {
//         setDirection(-1)
//         goToPrevious()
//       }
//     }
//     touchStartX.current = null
//     touchEndX.current = null
//     setIsAutoPlaying(true)
//   }

//   const handleMouseEnter = () => {
//     setIsAutoPlaying(false)
//   }

//   const handleMouseLeave = () => {
//     setIsAutoPlaying(true)
//   }

//   // Variants for slide animations
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.4 },
//         scale: { duration: 0.4 },
//       },
//     },
//     exit: (direction: number) => ({
//       x: direction > 0 ? "-100%" : "100%",
//       opacity: 0,
//       scale: 0.95,
//       transition: {
//         x: { type: "spring", stiffness: 300, damping: 30 },
//         opacity: { duration: 0.4 },
//         scale: { duration: 0.4 },
//       },
//     }),
//   }

//   // Variants for text animations
//   const textVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: (custom: number) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: custom * 0.2,
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     }),
//   }

//   return (
//     <div
//       className="relative w-full overflow-hidden carousel-container rounded-xl"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Progress Bar */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 bg-opacity-30 z-10">
//         <div
//           ref={progressRef}
//           className="h-full bg-white"
//           style={{
//             width: isAutoPlaying ? "100%" : "0%",
//             transition: isAutoPlaying ? "width 5000ms linear" : "none",
//           }}
//         />
//       </div>

//       {/* Main Carousel */}
//       <div
//         className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <AnimatePresence initial={false} custom={direction} mode="popLayout">
//           <motion.div
//             key={currentIndex}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             className="absolute w-full h-full"
//           >
//             <div className="relative w-full h-full">
//               <Image
//                 src={slides[currentIndex].image || "/placeholder.svg"}
//                 alt={slides[currentIndex].title}
//                 fill
//                 className="object-cover"
//                 priority={currentIndex === 0}
//               />

//               {/* Overlay with animated text */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                 <motion.div
//                   className="bg-black bg-opacity-60 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center w-3/4 md:w-1/2 p-8 md:p-6 rounded-lg"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <motion.h2
//                     custom={0}
//                     variants={textVariants}
//                     initial="hidden"
//                     animate="visible"
//                     className="text-xl md:text-3xl font-semibold"
//                   >
//                     {slides[currentIndex].title}
//                   </motion.h2>
//                   <motion.p
//                     custom={1}
//                     variants={textVariants}
//                     initial="hidden"
//                     animate="visible"
//                     className="mt-2 text-sm md:text-lg"
//                   >
//                     {slides[currentIndex].description}
//                   </motion.p>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Navigation Arrows */}
//       <motion.button
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm text-white p-2 rounded-full z-10"
//         onClick={goToPrevious}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.3 }}
//         aria-label="Previous slide"
//       >
//         <ChevronLeft size={24} />
//       </motion.button>

//       <motion.button
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 backdrop-blur-sm text-white p-2 rounded-full z-10"
//         onClick={goToNext}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         aria-label="Next slide"
//       >
//         <ChevronRight size={24} />
//       </motion.button>

//       {/* Dots Indicator */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1)
//               setCurrentIndex(index)
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-2.5 rounded-full transition-all duration-300 ${
//               index === currentIndex ? "w-8 bg-white" : "w-2.5 bg-gray-400"
//             }`}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Carousel


"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface CarouselProps {
  slides: { image: string; title: string; description: string }[]
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [direction, setDirection] = useState<number>(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  // const touchStartX = useRef<number | null>(null)
  // const touchEndX = useRef<number | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const background = useTransform(x, [-200, 0, 200], ["rgba(0,0,0,0.8)", "rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"])

  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [slides.length])

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [slides.length])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isAutoPlaying && !isDragging) {
      if (progressRef.current) {
        progressRef.current.style.width = "0%"
        progressRef.current.style.transition = "none"
        void progressRef.current.offsetWidth
        progressRef.current.style.width = "100%"
        progressRef.current.style.transition = "width 6000ms cubic-bezier(0.4, 0, 0.2, 1)"
      }

      timer = setTimeout(goToNext, 6000)
    }

    return () => clearTimeout(timer)
  }, [goToNext, currentIndex, isAutoPlaying, isDragging])

  const handleDragStart = () => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }

  const handleDragEnd = (event :any, info: any) => {
    setIsDragging(false)
    const threshold = 100

    if (info.offset.x > threshold) {
      setDirection(-1)
      goToPrevious()
    } else if (info.offset.x < -threshold) {
      setDirection(1)
      goToNext()
    }

    setTimeout(() => setIsAutoPlaying(true), 1000)
  }

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
      filter: "blur(10px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
        duration: 0.8,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? -45 : 45,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1,
        duration: 0.8,
      },
    }),
  }

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const textVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Luxury Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 shadow-lg"
          style={{
            width: isAutoPlaying ? "100%" : "0%",
            transition: isAutoPlaying ? "width 6000ms cubic-bezier(0.4, 0, 0.2, 1)" : "none",
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.6)",
          }}
        />
      </div>

      {/* Main Carousel Container */}
      <motion.div
        className="relative w-full h-[400px] md:h-[600px] lg:h-[600px] perspective-1000"
        style={{ background }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full cursor-grab active:cursor-grabbing"
            style={{ x }}
          >
            <div className="relative w-full h-full">
              {/* Image with Parallax Effect */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src={slides[currentIndex].image || "/placeholder.svg?height=700&width=1400"}
                  alt={slides[currentIndex].title}
                  fill
                  className="object-cover"
                  priority={currentIndex === 0}
                />
              </motion.div>

              {/* Luxury Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 70%),
                    linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(0,0,0,0.6) 100%)
                  `,
                }}
              />

              {/* Elegant Text Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  variants={textContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative max-w-4xl mx-auto text-center px-8"
                >
                  {/* Glassmorphism Background */}
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                    }}
                  />

                  <div className="relative z-10 p-12 md:p-16">
                    <motion.h1
                      variants={textVariants}
                      className="text-3xl md:text-6xl lg:text-7xl font-light text-white mb-6"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                        background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      {slides[currentIndex].title}
                    </motion.h1>

                    <motion.p
                      variants={textVariants}
                      className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed"
                      style={{
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      {slides[currentIndex].description}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Luxury Navigation Arrows */}
      <motion.button
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 group"
        onClick={goToPrevious}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Previous slide"
      >
        <div
          className="p-4 rounded-full transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <ChevronLeft size={28} className="text-white group-hover:text-amber-300 transition-colors duration-300" />
        </div>
      </motion.button>

      <motion.button
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 group"
        onClick={goToNext}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Next slide"
      >
        <div
          className="p-4 rounded-full transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          <ChevronRight size={28} className="text-white group-hover:text-amber-300 transition-colors duration-300" />
        </div>
      </motion.button>

      {/* Play/Pause Control */}
      <motion.button
        className="absolute top-6 right-6 z-20 group"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        <div
          className="p-3 rounded-full transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
        >
          {isAutoPlaying ? (
            <Pause size={20} className="text-white group-hover:text-amber-300 transition-colors duration-300" />
          ) : (
            <Play size={20} className="text-white group-hover:text-amber-300 transition-colors duration-300" />
          )}
        </div>
      </motion.button>

      {/* Luxury Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex ? "w-12 bg-amber-400" : "w-3 bg-white/40"
              }`}
              style={{
                boxShadow:
                  index === currentIndex
                    ? "0 0 20px rgba(251, 191, 36, 0.6), 0 4px 15px rgba(0, 0, 0, 0.3)"
                    : "0 2px 10px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  filter: "blur(8px)",
                  opacity: 0.4,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slide Counter */}
      <div
        className="absolute bottom-8 right-8 z-20 px-4 py-2 rounded-full text-white font-light"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <span className="text-amber-300">{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="mx-2 text-white/60">/</span>
        <span className="text-white/80">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  )
}

export default Carousel

