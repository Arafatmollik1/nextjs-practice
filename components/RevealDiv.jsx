"use client"
import { useState , useEffect } from "react"; 
import TourInput from "./TourInput";
import ShowTableForAllTours from "./ShowTableForAllTours";
function RevealDiv() {
  const [isActive, setIsActive] = useState(false);
  const [tourName, setTourName] = useState('');


  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch('/api/get-all-tour-names')
      .then(response => response.json())
      .then(data => {
        setTours(data.result.rows);
        console.log(tours);
      });
  }, []);
  console.log(tours);

  const handleSubmit = async () => {
    const response = await fetch(`/api/save-tour-name?name=${tourName}`);

    if (response.ok) {
      console.log('Tour name saved successfully');
    } else {
      console.error('Error saving tour name');
    }
  };
  return (
    <div className="flex flex-col gap-10">
      {isActive && <TourInput tourName={tourName} setTourName={setTourName}/>}
      <div className="flex flex-col gap-5">
        <button 
          onClick= {isActive ? handleSubmit : () => setIsActive(true)} 
          className="p-2 border-2 rounded-lg border-white"> 
          {isActive ? 'Submit' : 'Click to add name' }
        </button>
        {isActive &&
          <button 
            onClick={() => setIsActive(false)} 
            className="p-2 bg-white text-black border-2 rounded-lg border-white"> 
            Clear
          </button>
        }
      </div>
      <ShowTableForAllTours tours={tours} setTours={setTours}/>
      

    </div>
  )
}

export default RevealDiv