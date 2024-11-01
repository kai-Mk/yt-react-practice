import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";

const CartTile = ({ cart }) => {
    const dispatch = useDispatch();
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cart.id));
    };
    return (
        <>
            <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
                <div className="flex p-3">
                    <img
                        src={cart?.image}
                        alt={cart?.title}
                        className="h-28 rounded-lg"
                    />
                    <div className="ml-10 self-start space-y-5">
                        <h1 className="text-xl text-white font-bold w-[230px]">
                            {cart?.title}
                        </h1>
                        <p className="text-white font-extrabold">
                            {cart?.price}
                        </p>
                    </div>
                    <div>
                        <button
                            onClick={handleRemoveFromCart}
                            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
                        >
                            Remove from cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartTile;
