import cartIcon from "../assets/icon-cart.svg";

function ProductCard() {
    return (
        <div className=" grid place-items-center h-screen sm:w-11/12 ">
            {/* container */}
            <div className="bg-red-50 shadow-lg rounded-md mx-10  sm:h-3/5 grid place-items-center sm:min-w-full ">
                {/* product card */}
                <div className="bg-white flex flex-col sm:flex-row rounded-lg mx-3 my-5 sm:grid grid-cols-2 sm:max-w-xl sm:h-3/6 ">
                    <div className=" h-56 sm:h-full ">
                        <div className="bg-center w-full bg-cover rounded-tl-lg rounded-tr-lg h-full  sm:rounded-bl-lg sm:rounded-tr-none bg-product-mobile sm:bg-product-desktop"></div>
                    </div>
                    <div className="flex flex-col  justify-evenly gap-3 p-6">
                        <p className="uppercase text-slate-500 text-sm tracking-widest font-montserrat">Perfume</p>
                        <h1 className="font-vollkorn text-3xl font-bold leading-none">Gabrielle Essence Eau de Parfum</h1>
                        <p className="text-slate-500 text-sm leading-normal">
                            A floral, solar, and voluptuous interpreation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL
                        </p>
                        <div className="flex items-baseline gap-5 font-vollkorn">
                            <p className="text-3xl  text-green-800 font-bold ">$149.99</p>
                            <p className="text-xs line-through text-slate-500">$169.99</p>
                        </div>
                        <button className="bg-green-800 hover:bg-green-500 rounded-md text-white py-3 flex items-center justify-center gap-3 transition duration-150 ease-out hover:ease-in ">
                            <img src={cartIcon} className="h-3 w-3" />
                            <span className="text-sm font-semibold"> Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
