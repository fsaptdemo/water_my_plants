import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// api
import { useEditPlantMutation, usePlantDetailsQuery } from "../redux/api";

function EditPlant({ token }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [editPlant] = useEditPlantMutation();
  const [form, setForm] = useState({
    name: "",
    species: "",
    water_frequency: "",
    img_url: "",
  });
  const [errorMsg, setError] = useState(null);

  const { data, error, isLoading } = usePlantDetailsQuery({ token, id });

  useEffect(() => {
    setForm(data?.plant);
  }, []);

  const handleChange = ({ target }) => {
    setError(null);
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await editPlant({
      token: token,
      body: form,
      id: id,
    });

    if (error) {
      setError("Something went wrong! Please try again.");
    } else {
      navigate(`/plantdetails/${id}`);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  return (
    <section>
      <h2>Edit Plant</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <form>
        <label htmlFor="name">Name</label>
        <input value={form.name} name="name" onChange={handleChange} />
        <label htmlFor="species">Species</label>
        <input value={form.species} name="species" onChange={handleChange} />
        <label htmlFor="water_frequency">Water Frequency</label>
        <input
          value={form.water_frequency}
          name="water_frequency"
          onChange={handleChange}
        />
        <label htmlFor="img_url">Image url</label>
        <input value={form.img_url} name="img_url" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </section>
  );
}

export default EditPlant;
