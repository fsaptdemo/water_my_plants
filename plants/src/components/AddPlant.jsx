import { useState } from "react";
// api
import { useAddPlantMutation } from "../redux/api";

function AddPlant(props) {
  const [form, setForm] = useState({
    name: "",
    species: "",
    water_frequency: "",
    img_url: "",
  });
  const [error, setError] = useState(null);
  const [addPlant] = useAddPlantMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await addPlant({ token: props.token, body: form });

    if (error) {
      setError("Something went wrong! Please try again.");
    } else {
      setForm({
        name: "",
        species: "",
        water_frequency: "",
        img_url: "",
      });
    }
  };

  const handleChange = ({ target }) => {
    setError(null);
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <section>
      <h2>Add Plant</h2>
      <p>All items marked with * are required</p>
      {error && <p>{error}</p>}
      <form>
        <label htmlFor="name">Name</label>
        <input value={form.name} name="name" onChange={handleChange} />
        <label htmlFor="species">Species*</label>
        <input value={form.species} name="species" onChange={handleChange} />
        <label htmlFor="water_frequency">Water Frequency*</label>
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

export default AddPlant;
