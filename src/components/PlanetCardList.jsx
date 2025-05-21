import { PlanetCard } from "./PlanetCard"

export const PlanetCardList = ({ allplanets }) => {

    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto mt-4">
                   {
                     allplanets.map(planet => {
                    return (
                       <PlanetCard
                           key={planet.uid}
                           uid={planet.uid}
                           name={planet.name}
                       />
                    )
                     })
                   }
           
                   </div>

                 
                 
        </>
    )
}