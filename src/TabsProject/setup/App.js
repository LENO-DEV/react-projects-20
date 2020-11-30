import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const res = await Axios.get(url);
      if (res) {
        setJobs(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <section className='section loading'>
    <h1>Loading...</h1>
  </section>


  const { company, title, dates, duties } = jobs[value]; // Important.......
  return <section className='section'>
    <div className='title'>
      <h2>Experience</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
      <div className='btn-container'>
        {
          jobs.map((item, i) => {
            return <button key={i}
              onClick={() => setValue(i)}
              className={`job-btn ${(i === value) && 'active-btn'}`}
            >{item.company}</button>
          })
        }
      </div>
      <article className='job-info'>
        <h3>{title}</h3>
        <h3 className='badge bg-secondary' style={{fontWeight: '500', fontSize: '1.1em', letterSpacing: '1.2px', padding:'10px'}}>{company}</h3>
        <p className='job-date'>{dates}</p>
        {
          duties.map((el, i) => {
            return <div key={i} className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{el}</p>
            </div>
          })
        }
      </article>
    </div>
  </section>
}

export default App
