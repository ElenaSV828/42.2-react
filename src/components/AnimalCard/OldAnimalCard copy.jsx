import "./styles.css";

function AnimalCard({ animalName, animalSpecies, animalImage, }) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImage} alt="animal" />
     
    </div>
  );
}

export default AnimalCard;