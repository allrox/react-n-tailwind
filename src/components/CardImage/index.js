const CardImage = (props) => {

    const { imageURL, badge, alt } = props;

    return (
        <div className="product-card- group">
            <div className="relative rounded-lg mb-3">
                <img className="min-w-full h-48 rounded mb-4 brightness-[0.9] group-hover:brightness-[1.05] duration-200" src={imageURL} alt="" />
                <div className="badge absolute rounded-full top-3 left-3 px-3 py-1 bg-white text-xs font-medium">{badge}</div>
                <img className="absolute top-3 right-3 h-9 p-2 bg-white rounded-full" src="./img/heart.webp" alt={alt} />
            </div>
        </div>

    );
}

export default CardImage;