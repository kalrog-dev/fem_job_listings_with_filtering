import { nanoid } from 'nanoid'
import data from './data'
import Job from './components/Job'
import logos from './assets/img/logos/logos'
import './styles/App.css'

function App() {
  console.log(data);
  return (
    <>
      {/* Iterate over an array of job offer objects */}
      {data.map((job, index) =>
        <Job 
          {...job}
          logo={logos[index]}
          key={nanoid()}
        />
      )}
    </>
  )
}

export default App
