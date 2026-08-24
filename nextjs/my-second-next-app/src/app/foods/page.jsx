import FoodCard from "@/component/FoodCard";

const FoodsPage = async () => {
    const res = await fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const data = await res.json();
    const foods = await data.data;
    console.log(foods);

  return (
    <div>
        <h2>Foods: {foods.length}</h2>
        <div className= "grid grid-cols-4 gap-4">{
            foods.map(food => <FoodCard food = {food} key={food.id}></FoodCard>)
        }</div>
    </div>
  );
};

export default FoodsPage;