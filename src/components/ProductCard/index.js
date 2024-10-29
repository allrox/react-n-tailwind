import CardImage from "../CardImage";
import CardTitle from "../CardTitle";
import Button from "../Button";

const ProductCard = (props) => {

    const {alt, imageURL, badge, title} = props;
    console.log(alt);
    console.log(imageURL);
    console.log(badge);
    console.log(title);

    return (
        <div className="bg-white p-3 rounded-lg md:hover:shadow-2xl group">
            <CardImage src={imageURL} badge={badge} alt={alt} />
            <CardTitle>{title}</CardTitle>
            <p className="text-base md:text-base line-clamp-2">{props.children}</p>
            <Button icon="bi-bag">Buy now!</Button>
        </div>

    );
}

export default ProductCard;