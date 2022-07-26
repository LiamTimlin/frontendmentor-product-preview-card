import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import ProductCard from "./components/ProductCard";

const App = () => {
    return (
        <main>
            <Layout>
                <ProductCard />
            </Layout>
        </main>
    );
};

export default App;
