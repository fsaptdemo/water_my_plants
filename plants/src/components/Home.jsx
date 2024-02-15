import home_plant from "../assets/plant_home.jpg";

function Home() {
  return (
    <div>
      <h1>Welcome to the Plant World</h1>
      <img src={home_plant} />
      <p>
        Ensuring that all your plants are consistently watered is actually
        pretty difficult. Water My Plants is an app that helps to solve those
        problems.
      </p>
      <p>
        With an easy to use interface for creating a plant watering schedule
        tailored to each individual plant, WaterMyPlants will remind users when
        it's time to feed that foliage and quench your plants' thirst.
      </p>
    </div>
  );
}

export default Home;
