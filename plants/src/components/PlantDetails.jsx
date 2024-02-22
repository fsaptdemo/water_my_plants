import { useParams, useNavigate } from "react-router-dom";
//api
import { usePlantDetailsQuery, useDeletePlantMutation } from "../redux/api";

function PlantDetails({ token }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [deletePlant] = useDeletePlantMutation();

  const { data, error, isLoading } = usePlantDetailsQuery({ token, id });

  const goToEditForm = () => {
    navigate(`/editplant/${id}`);
  };

  const removePlant = async () => {
    await deletePlant({ id, token });
    navigate("/plantlist");
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  /**
   * API data response 
   * {
    "plant": {
        "plant_id": 1,
        "name": "Franky",
        "water_frequency": "1x/day",
        "species": "alder",
        "img_url": "https://www.coldstreamfarm.net/wp-content/uploads/2023/07/alder_speckled_leaf_20160605_145314-600x338.jpg",
        "user_id": 1
    }
}
   */

  return (
    <section>
      <h2>Plant Details</h2>
      <img src={data.plant.img_url} />
      <h3>Name: {data.plant.name}</h3>
      <p>Species: {data.plant.species}</p>
      <h4>Water Frequency: {data.plant.water_frequency}</h4>
      <button onClick={goToEditForm}>Edit Plant</button>
      <button onClick={removePlant}>Delete Plant</button>
    </section>
  );
}

export default PlantDetails;
