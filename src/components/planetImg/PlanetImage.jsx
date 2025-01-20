export default function PlanetImage(props) {
    const {image} = props;
    console.log(image);
    return(
        <div className="planet__img">
            <img src={image} alt={`This is an image of the `} />
        </div>
    )
}