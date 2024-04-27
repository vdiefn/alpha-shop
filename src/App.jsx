//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import StepProgress from './components/StepProgress'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import ProgressControl from './components/ProgressControl'

function App() {

  return (
    <>
      <StepProgress />
      {/*<StepOne /> */}
      {/* <StepTwo /> */}
      <StepOne />
      <ProgressControl />
    </>
  )
}

export default App
