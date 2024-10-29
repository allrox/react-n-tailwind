import { useState } from "react";
import CardTitle from "../CardTitle";
import Button from "../Button";

export default function ProductCard(props) {

    /* State control to change favorite icon saturarion */
    const [saturated, setSaturation] = useState(false);
    const toggleSaturation = () => {
        setSaturation(!saturated);
    };

    return (

        /* Product Card */
        <div className="flex flex-col bg-white p-3 rounded-lg md:hover:shadow-2xl group justify-between">

            <div>

                {/* Image and overlays */}
                <div className="image-container relative rounded-lg mb-3">
                    <img className="min-w-full h-72 rounded mb-4 brightness-[0.9] group-hover:brightness-[1.05] duration-200 object-cover" src={props.imageURL} alt="" />
                    {props.badge && (
                        <div className="badge absolute rounded-full top-3 left-3 px-3 py-1 bg-white text-xs font-medium">{props.badge}</div>
                    )}
                    <img
                        className={`absolute top-3 right-3 h-9 p-2 bg-white rounded-full duration-200 ${saturated ? 'saturate-100' : 'saturate-0'}`}
                        onClick={toggleSaturation}
                        src="./img/heart.webp"
                        alt={props.alt}

                    />
                </div>

                {/* Title */}
                <CardTitle>{props.title}</CardTitle>
                {props.rating && (
                    <div className="star-rating flex flex-row h-4 mb-3 items-center gap-1">
                        <p className="text-lg font-black">{props.rating}</p>
                        <img
                            className="h-5 w-5"
                            src="./img/rating-star.webp"

                            alt="1 star" />
                    </div>
                )}

                {/* Description */}
                <p className="text-sm md:text-sm line-clamp-2">{props.description}</p>

                {/* Pricing */}
                <div className="container flex flex-wrap items-center justify-start">
                    {props.oldPrice && (
                        <p className="old-price text-xs md:text-base lg:text-base line-through text-red-600 me-2">US$ {props.oldPrice}</p>
                    )}
                    <p className="pricing text-2xl text-center font-bold mt-1 tracking-tighter items-start">US$ <span className="text-3xl font-bold text-black">{props.price}</span></p>
                </div>

            </div>

            {/* CTA */}
            <div>
                <Button className="" icon="bi-bag">{props.cta}</Button>

            </div>
        </div>

    );
}