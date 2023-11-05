import './styles/App.css'
import Job from './components/Job'
import data from './data'

function App() {
  console.log(data);
  return (
    <>
      {/* Iterate over an array of job offer objects */}
      {data.map((job, index) =>
        <Job 
          key={index}
          // company={job.company}
          // new={job.tags.new}
          // featured={job.tags.featured}
          {...job}
        />
      )}
    </>
    
    
    
  )
}

export default App
