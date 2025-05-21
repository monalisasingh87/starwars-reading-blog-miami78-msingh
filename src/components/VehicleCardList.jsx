import { VehicleCard } from "./VehicleCard"

export const VehicleCardList = ({ allvehicles }) => {

    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto mt-4">
                   {
                     allvehicles.map(vehicle => {
                    return (
                       <VehicleCard
                           key={vehicle.uid}
                           uid={vehicle.uid}
                           name={vehicle.name}
                       />
                    )
                     })
                   }
           
                   </div>

                 
                 
        </>
    )
}