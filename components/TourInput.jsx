function TourInput({ tourName, setTourName }) {

  return (
    <div>
      <input 
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
