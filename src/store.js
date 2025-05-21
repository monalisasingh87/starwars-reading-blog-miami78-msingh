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
    // case 'add_task':

    //  const { id,  color } = action.payload

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
   /* case "favedProfile": {
      const { uid, name } = action.payload;
      const filteredArray = store.favorites.filter(
        (favorite) => favorite.name !== name
      );
      return {
        ...store,
        favorites: [...filteredArray, { uid: uid, name: name }],
      };
    }
    case "removedFavorite": {
      const { name } = action.payload;
      const filteredArray = store.favorites.filter(
        (favorite) => favorite.name !== name
      );
      return {
        ...store,
        favorites: [...filteredArray],
      };
    }*/
    // case 'toggleFavorites':
    //  if(!store.favorites.find(favorite=> favorite.name ===action.payload.name)){
    //     return{
    //       ...store,
    //       favorites: [...store.favorites, action.payload]
    //     }
    //   }
    // }

    default:
      throw Error("Unknown action.");
  }
}
