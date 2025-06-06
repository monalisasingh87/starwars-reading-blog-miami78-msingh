import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const VehicleProfilePage = () => {
    const {uid}= useParams()
    const [vehicle, setVehicle] = useState(null)

    useEffect(()=>{
          const fetchVehicle = async() => {
            try { 
                const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
                const data = await response.json();
                setVehicle(data.result.properties)
            } catch (error) {
                console.error("error fetching vehcile", error)
            }
          };
          fetchVehicle();
          
    },[uid])
    if (!vehicle) return <p>Loading...</p>
    return (
        <>
        <div className="row mt-4">
        <div className="col-2"></div> 
        <div className="description col-8">
             <div className="vehicle-description-head d-flex justify-content-between">
               <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicle/${uid}.jpg?raw=true`} className="card-img-top w-25 h-75" alt="..." />
                <div className="text-center">
                <h3>{vehicle.name}</h3>
                <p>There is no description for vehicle</p>
                </div>
             </div>
             <div className="details d-flex justify-content-around mt-4 text-danger border-top border-danger pt-4">
                <div>
                    <h5>Name</h5>
                    <p>{vehicle.name}</p>
                </div>
                <div>
                    <h5>Model</h5>
                    <p>{vehicle.model}</p>
                </div>
                <div>
                    <h5>Manufacturer</h5>
                    <p>{vehicle.manufacturer}</p>
                </div>
                <div>
                    <h5>Length</h5>
                    <p>{vehicle.length}</p>
                </div>
                <div>
                    <h5>Passenger</h5>
                    <p>{vehicle.passenger}</p>
                </div>
             </div>

        </div>
        <div className="col-2"></div>
       </div>
    </>
    )
}