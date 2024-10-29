// import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import Button from "../Button";

const ProductCard = (props) => {

    const { alt, imageURL, badge, title, oldPrice, price } = props;

    return (
        <div className="bg-white p-3 rounded-lg md:hover:shadow-2xl group">

            <div className="image-container relative rounded-lg mb-3">
                <img className="min-w-full h-72 rounded mb-4 brightness-[0.9] group-hover:brightness-[1.05] duration-200 object-cover" src={imageURL} alt="" />
                <div className="badge absolute rounded-full top-3 left-3 px-3 py-1 bg-white text-xs font-medium">{badge}</div>
                <img className="absolute top-3 right-3 h-9 p-2 bg-white rounded-full" src="./img/heart.webp" alt={alt} />
            </div>

            <CardTitle>{title}</CardTitle>
            <div className="star-rating flex flex-row h-4 mb-3 items-center gap-1">
                <p className="text-lg font-black">4.5</p>
                <img className="h-5 w-5" src="./img/rating-star.webp" alt="1 star" />
            </div>

            <p className="text-sm md:text-sm line-clamp-2">{props.children}</p>

            <div className="container flex flex-wrap items-center justify-start">
                <p className="old-price text-xs md:text-base lg:text-base line-through text-red-600 me-2">US$ {props.oldPrice}</p>
                <p class="pricing text-2xl text-center font-bold mt-1 tracking-tighter items-start">US$ <span className="text-3xl font-bold text-black">{props.price}</span></p>
            </div>

            <Button icon="bi-bag">Buy now!</Button>

        </div>

    );
}

export default ProductCard;