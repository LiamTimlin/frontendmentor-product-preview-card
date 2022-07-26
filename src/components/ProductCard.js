import React from "react";

function ProductCard() {
    return (
        <div>
            {/* container */}
            <div>
                {/* product card */}
                <div>
                    <div>image</div>
                    <div>
                        <p>Perfume</p>
                        <h1>Gabrielle Essence Eau de Parfum</h1>
                        <p>A floral, solar, and voluptuous interpreation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL</p>
                        <div>
                            <p>$149.99</p>
                            <p>$169.99</p>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
