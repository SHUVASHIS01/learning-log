
import Link from "next/link";
const FoodCard = ({food}) => {
  const {id, dish_name, image_link, category, price } = food;
  return (
    <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={image_link}
      alt={dish_name}
      width= '250'
      height= '250' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p><small>Category: {category} </small></p>
    <p><small>Price: {price} </small></p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost">Add  to cart</button>
        <Link href = {`/foods/${id}`}>
      <button className="btn btn-ghost">Show details</button>
      </Link>
    </div>
  </div>
</div>
  );
};

export default FoodCard;