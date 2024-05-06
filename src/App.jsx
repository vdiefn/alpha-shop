//import { useState } from 'react'
//import reactLogo from './assets/react.svg'

import styles from "./App.module.css"
import StepProgress from './components/StepProgress'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import ProgressControl from './components/ProgressControl'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <main className={styles.container}> 
      <section className={styles.containerLeft}>
        <StepProgress />
        {/*<StepOne /> */}
        {/* <StepTwo /> */}
        <StepOne />
        <ProgressControl />
      </section>
      <section className={styles.containerRight}>
        <Cart />
      </section>
    </main>
    </>
  )
}

export default App
