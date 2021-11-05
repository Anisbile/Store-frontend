import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main (props) {
  const [product, setProduct] = useState(null);

  const URL = "https://notcraigslist-backend.herokuapp.com/api/products";

  const getProduct = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProduct(data);
  };

  const createProduct = async (item) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(item),
    });
    getProduct();
  };

  useEffect(() => getProduct(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index product={product} createProduct={createProduct} />
        </Route>
        <Route path="/products/:id" render={(rp) => <Show product={product} {...rp} />} />
      </Switch>
    </main>
  );
}

export default Main;