import {Input} from "@chakra-ui/react"
function TourInput({ tourName, setTourName }) {

  return (
    <div>
      <Input placeholder='medium size' size='md'
        type="text" 
        name="name_of_the_tour" 
        className="text-black rounded p-2 min-w-full"
        value={tourName}
        onChange={(e) => setTourName(e.target.value)}
      />
    </div>
  );
}

export default TourInput;
