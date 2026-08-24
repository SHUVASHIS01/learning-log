import FoodFilter from "@/component/FoodFilter";

const FoodsPage = async () => {
    const res = await fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = await data.data;
    console.log(foods);

  return (
    <div>
        <h2>Foods: {foods.length}</h2>
        <FoodFilter foods={foods} />
    </div>
  );
};

export default FoodsPage;