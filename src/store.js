export const initialStore = () => {
  return {
    allPeople: [],
    allPlanets: [],
    allVehicles: [],
    singlePerson: [],
    singlePlanet: [],
    singleVehicle: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case "fetchedAllPeople":
      const peopleArray = action.payload;
      console.log(peopleArray)
      return {
        ...store,
        allPeople: peopleArray,
      };
    case "fetchedAllPlanets":
      const planetsArray = action.payload;
      console.log(planetsArray)
      return {
        ...store,
        allPlanets: planetsArray,
      };
      break;
    case "fetchedAllVehicles":
      const vehiclesArray = action.payload;
      console.log(vehiclesArray)
      return {
        ...store,
        allVehicles: vehiclesArray,
      };
      break;

    default:
      throw Error("Unknown action.");
  }
}
