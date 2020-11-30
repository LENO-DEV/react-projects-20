import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  
  const removeTours = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await Axios.get(url);
      if (res) {
        setTours(res.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);



  if (loading) {
    return <main> <Loading /> </main>
  }
  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>No Tours Left!</h2>
        <button className='btn' onClick={fetchData}> Refresh Again </button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} removeTour={removeTours} />
  </main>
}

export default App
