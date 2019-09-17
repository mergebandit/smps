import React from 'react'
import PropTypes from 'prop-types'

import useCurrentIndex from 'core/hooks/useCurrentIndex';

import WizardAction from './wizard-action'

export default function Wizard({ header: Header, steps, wizardContext, onComplete }) {
  const [currentIndex, prevStep, nextStep] = useCurrentIndex(steps.length)

  const handleAction = action => {
    switch (action) {
      case WizardAction.prev:
        prevStep()
        break
      case WizardAction.next:
        nextStep()
        break
      case WizardAction.end:
        onComplete()
        break
      default:
        throw new Error('Invalid Wizard Step')
    }
  }
  const Step = steps[currentIndex]
  return (
    <>
      <Header progress={(currentIndex + 1) / steps.length * 100} />
      <Step
        wizardContext={wizardContext}
        onAction={handleAction}
      />
    </>
  )
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array,
  wizardContext: PropTypes.object,
  onComplete: PropTypes.func
}