"use client"
import { useState , useEffect } from "react"; 
import TourInput from "./TourInput";
function RevealDiv() {
  const [isActive, setIsActive] = useState(false);
  const [tourName, setTourName] = useState('');


  const handleSubmit = async () => {
    const response = await fetch(`/api/save-tour-name?name=${tourName}`);

    if (response.ok) {
      window.location.reload(); // Reload the page
    } else {
      console.error('Error saving tour name');
    }
  };
  return (
    <div className="flex flex-col gap-10 my-10">
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

    </div>
  )
}

export default RevealDiv