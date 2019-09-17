import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Wizard, { WizardAction } from '../';

const Step1 = ({ onAction }) => (
  <div>
    <h1>Step 1</h1>
    <button onClick={() => onAction(WizardAction.prev)}>Prev</button>
    <button onClick={() => onAction(WizardAction.next)}>Next</button>
  </div>
)
const Step2 = ({ onAction }) => (
  <div>
    <h1>Step 2</h1>
    <button onClick={() => onAction(WizardAction.prev)}>Prev</button>
    <button onClick={() => onAction(WizardAction.next)}>Next</button>
  </div>
)
const Step3 = ({ onAction }) => (
  <div>
    <h1>Step 3</h1>
    <button onClick={() => onAction(WizardAction.prev)}>Prev</button>
    <button onClick={() => onAction(WizardAction.end)}>End</button>
  </div>
)

describe('<Wizard />', () => {
  let header
  let onComplete
  beforeEach(() => {
    header = () => (<header>Header</header>)
    onComplete = jest.fn()
  })

  it('renders without bombing', () => {
    const steps = [Step1]
    const { getByText } = render(<Wizard header={header} onComplete={onComplete} wizardContext={{}} steps={steps} />);

    expect(getByText('Prev')).toBeInTheDocument();
    expect(getByText('Header')).toBeInTheDocument();
  });
  
  it('moves backwards and forwards based on actions sent by steps.', () => {
    const steps = [Step1, Step2]
    const { getByText, queryByText } = render(<Wizard header={header} onComplete={onComplete} wizardContext={{}} steps={steps} />);
    
    expect(getByText('Step 1')).toBeInTheDocument();
    fireEvent.click(getByText('Next'))

    expect(queryByText('Step 1')).toBeNull()
    expect(getByText('Step 2')).toBeInTheDocument()

    fireEvent.click(getByText('Prev'))
    expect(getByText('Step 1')).toBeInTheDocument()
    expect(queryByText('Step 2')).toBeNull()
  })

  it('calls onComplete() of the parent when a step sends the end action', () => {
    const steps = [Step1, Step3]
    const { getByText } = render(<Wizard header={header} onComplete={onComplete} wizardContext={{}} steps={steps} />);
    fireEvent.click(getByText('Next'))
    expect(getByText('Step 3')).toBeInTheDocument()
    expect(onComplete).not.toHaveBeenCalled()
    fireEvent.click(getByText('End'))
    expect(onComplete).toHaveBeenCalled()

  })

})