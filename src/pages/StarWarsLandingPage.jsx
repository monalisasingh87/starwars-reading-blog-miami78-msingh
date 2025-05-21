import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchAllPeople } from "../lib/fetch";
import { fetchAllPlanets } from "../lib/fetch";
import { fetchAllVehicles } from "../lib/fetch";
import { CharacterCardList } from "../components/CharacterCardList";
import { PlanetCardList } from "../components/PlanetCardList"
import { VehicleCardList } from "../components/VehicleCardList"


export const StarWarsLandingPage = () => {
    const {store, dispatch} = useGlobalReducer();

    useEffect(() =>{
        fetchAllPeople(dispatch);
        fetchAllPlanets(dispatch);
        fetchAllVehicles(dispatch);
    }, [] )

    return (
        <>
            <div className="row my-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <div>
                        <h1>Characters</h1>
                        <CharacterCardList
                            allpeople = {store.allPeople}
                            dispatch = {dispatch}  
                        />
                    </div>
                     <div className="mt-4">
                    <h1 className="text-danger">Planets</h1>
                    <PlanetCardList 
                    allplanets = {store.allPlanets}/>
                </div>

                  <div className="mt-4">
                    <h1 className="text-danger">Vehicles</h1>
                    <VehicleCardList 
                    allvehicles = {store.allVehicles}/>
                </div>
                </div>
                <div className="col-1"></div>
            </div>
        
        </>
    );
}