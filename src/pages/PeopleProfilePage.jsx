import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const PeopleProfilePage = () => {
    const {uid}= useParams()
    const [character, setCharacter] = useState(null)

    useEffect(()=>{
          const fetchCharacter = async() => {
            try { 
                const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
                const data = await response.json();
                setCharacter(data.result.properties)
            } catch (error) {
                console.error("error fetching character", error)
            }
          };
          fetchCharacter();
          
    },[uid])
    if (!character) return <p>Loading...</p>
    return (
        <>
        <div className="row mt-4">
        <div className="col-2"></div> 
        <div className="description col-8">
             <div className="character-description-head d-flex justify-content-between">
               <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`} className="card-img-top w-25 h-75" alt="..." />
                <div className="text-center">
                <h3>{character.name}</h3>
                <p>There is no description for character</p>
                </div>
             </div>
             <div className="details d-flex justify-content-around mt-4 text-danger border-top border-danger pt-4">
                <div>
                    <h5>Name</h5>
                    <p>{character.name}</p>
                </div>
                <div>
                    <h5>Height</h5>
                    <p>{character.height}</p>
                </div>
                <div>
                    <h5>Birth</h5>
                    <p>{character.birth_year}</p>
                </div>
                <div>
                    <h5>Skin Color</h5>
                    <p>{character.skin_color}</p>
                </div>
                <div>
                    <h5>Hair Color</h5>
                    <p>{character.hair_color}</p>
                </div>
             </div>

        </div>
        <div className="col-2"></div>
       </div>
    </>
    )
}