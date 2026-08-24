
import Image from "next/image";
const FoodDetails = async ({params}) => {
    const {foodid} = await params;
    const res = await fetch (`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodid}`);
    const data = await res.json();
    const {id, dish_name, image_link} = data.data;
    // console.log('food details in details page', {food})

  return (
    <div>
        <h2>
            showing details of food: {foodid}
        </h2>
        <h3 className="text-3xl">
            {dish_name}
        </h3>
        <Image
            src = {image_link}
            alt = {dish_name}
            width = {250}
            height = {250}>
        </Image>
    </div>
  );
};

export default FoodDetails;