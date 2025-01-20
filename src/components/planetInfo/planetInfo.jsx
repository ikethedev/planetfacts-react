import "./planetInfo.css";
import PlanetOverview from "../PlanetOverview/planetOverview";
import PlanetStats from "../planentStats/planetStats";
import ContentNavigation from "../contentNav/contentNavigation";
export default function PlanetInfo(props) {
  const { currentPlanet, currentInfo, handleClick } = props;
  console.log(handleClick)
  console.log(currentInfo)

  return (
    <div >
       <PlanetOverview name={currentPlanet.name} description={currentPlanet[currentInfo].content} image={currentPlanet.images[currentInfo]} handleClick={handleClick} />
      <PlanetStats  
        stats={[
          { title: "Rotation Time", value: currentPlanet.rotation },
          { title: "Revolution Time", value: currentPlanet.revolution },
          { title: "Radius Size", value: currentPlanet.radius },
          { title: "Average Temp", value: currentPlanet.temperature },
        ]}
      /> 
    </div>
  );
}
