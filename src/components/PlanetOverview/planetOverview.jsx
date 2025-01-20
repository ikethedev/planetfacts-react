import "./planetOverview.css";
import PlanetImage from "../planetImg/PlanetImage.jsx";
import ContentNavigation from "../contentNav/contentNavigation.jsx";
export default function PlanetOverview({
  name,
  image,
  description,
  handleClick,
}) {
  return (
    <div className="planet__container">
      <ContentNavigation handleClick={handleClick} />
      <PlanetImage image={image} />

      <div className="planet__info">
        <h2 className="planet__name">{name}</h2>
        <p className="planet__description">{description}</p>
      </div>
    </div>
  );
}
