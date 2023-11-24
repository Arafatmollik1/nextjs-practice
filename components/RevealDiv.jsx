"use client"
import { useState , useEffect } from "react"; 
import TourInput from "./TourInput";
import {Button} from "@chakra-ui/react"
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
        <Button colorScheme='gray' variant='outline' 
          onClick= {isActive ? handleSubmit : () => setIsActive(true)} 
          className="p-2 border-2 rounded-lg border-white"> 
          {isActive ? 'Submit' : 'Click to add name' }
        </Button>
        {isActive &&
          <Button variant='link' 
            onClick={() => setIsActive(false)} 
            className="p-2 bg-white text-black border-2 rounded-lg border-white"> 
            Clear
          </Button>
        }
      </div>

    </div>
  )
}

export default RevealDiv