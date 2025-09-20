
import { Suspense } from 'react'
import './App.css'
import Countries from './compunents/countries/countries'
const countriesPromies = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {


  return (
    <>

    <Suspense fallback={<p>Nadir vai loding..</p>}>
        <Countries countriesPromies={countriesPromies}></Countries>
    </Suspense>


    </>
  )
}

export default App
