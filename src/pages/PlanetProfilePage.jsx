import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetProfilePage = () => {
    const { uid } = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
                const data = await response.json();
                setPlanet(data.result.properties);
            } catch (error) {
                console.error("Error fetching planet", error);
            }
        };
        fetchPlanet();
    }, [uid]);

    if (!planet) return <p>Loading...</p>;

    return (
        <div className="row mt-4">
            <div className="col-2"></div>
            <div className="description col-8">
                <div className="planet-description-head d-flex justify-content-between">
                    <img
                        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${uid}.jpg?raw=true`}
                        className="card-img-top w-25 h-75"
                        alt={planet.name}
                    />
                    <div className="text-center">
                        <h3>{planet.name}</h3>
                        <p>There is no description for this planet.</p>
                    </div>
                </div>
                <div className="details d-flex justify-content-around mt-4 text-danger border-top border-danger pt-4">
                    <div>
                        <h5>Name</h5>
                        <p>{planet.name}</p>
                    </div>
                    <div>
                        <h5>Population</h5>
                        <p>{planet.population}</p>
                    </div>
                    <div>
                        <h5>Climate</h5>
                        <p>{planet.climate}</p>
                    </div>
                    <div>
                        <h5>Gravity</h5>
                        <p>{planet.gravity}</p>
                    </div>
                    <div>
                        <h5>Diameter</h5>
                        <p>{planet.diameter}</p>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    );
};