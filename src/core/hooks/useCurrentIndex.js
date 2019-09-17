import { useState } from 'react'

function useCurrentIndex (totalItems, infinite = false) {
  if(typeof totalItems === 'undefined') {
    throw new Error('You must pass totalItems to the useCurrentIndex hook')
  }

  const [currentIndex, setCurrentIndex] = useState(4)

  const prevStep = () => {
    if (!infinite && currentIndex === 0) {
      return
    }
    setCurrentIndex(currentIndex === 0 ? totalItems - 1 : currentIndex - 1)
  }

  const nextStep = () => {
    if(!infinite && currentIndex + 1 === totalItems) {
      return
    }
    setCurrentIndex(currentIndex === totalItems - 1 ? 0 : currentIndex + 1)
  }

  return [currentIndex, prevStep, nextStep]
}

export default useCurrentIndex