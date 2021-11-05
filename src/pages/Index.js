import { useState } from "react";
import { Link } from "react-router-dom";


function Index(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        img: "",
        description: "",
        price: "",
        qty: "",
      });

  const loaded = () => {
    return props.product.map((item) => (
      <div key={item._id} className="item">
        <Link to={`/products/${item._id}`}>
          <h1>{item.name}</h1>
        </Link>
        <img style={{height:400, width:400}} src={item.img} alt={item.name} />
        {/* <h3>{item.description}</h3> */}
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

    const handleChange = (event) => {
        setNewForm((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createProduct(newForm);
        setNewForm({
          name: "",
          img: "",
          description: "",
          price: "",
          qty: "",
        });
      };

  return (
    <section className="create">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.img}
          name="img"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.price}
          name="price"
          placeholder="price"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.qty}
          name="qty"
          placeholder="quantity"
          onChange={handleChange}
        />
        <input type="submit" value="Create Product" />
      </form>
      {props.product ? loaded() : loading()}
    </section>
  );
}

export default Index;