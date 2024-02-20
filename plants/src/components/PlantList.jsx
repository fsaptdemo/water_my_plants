import { Link } from "react-router-dom";
//api
import { usePlantListQuery } from "../redux/api";

function PlantList({ token }) {
  const { data, error, isLoading } = usePlantListQuery(token);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  /**
   *   Plant object example within the data.plants array
   *       {
            "plant_id": 1,
            "name": "Franky",
            "water_frequency": "1x/day",
            "species": "alder",
            "img_url": "https://www.coldstreamfarm.net/wp-content/uploads/2023/07/alder_speckled_leaf_20160605_145314-600x338.jpg",
            "user_id": 1
        },
   */

  return (
    <div>
      <h2>Plant List</h2>
      {data.plants.map((plant) => {
        return (
          <div key={plant.plant_id}>
            <h2>Species: {plant.species}</h2>
            <img src={plant.img_url} />
            <Link to={`/plantdetails/${plant.plant_id}`}>See More Details</Link>
          </div>
        );
      })}
    </div>
  );
}
//plant.plant_id or id

export default PlantList;
