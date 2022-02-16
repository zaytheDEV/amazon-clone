import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, numberRating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    console.log('this is the basket >>>', basket)
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className="product">
      <div className="product_Info">
        <p>{title}</p>
        <p className="product_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <div className="product_stars">
            <div className="product_starsCount">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon style={{ color: "#f8920c" }} />
                ))}
            </div>
            <div className="product_ratingNumber">
              <span style={{color: 'darkblue'}}>{numberRating}</span>
            </div>
          </div>
        </div>
      </div>
      <img src={process.env.PUBLIC_URL + image} alt="" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
