import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch.js";
import { CharacterCardList } from "../components/CharacterCardList.jsx";


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
                            //allpeople = {store.allPeople}
                            dispatch = {dispatch}  
                        />
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        
        </>
    );
}