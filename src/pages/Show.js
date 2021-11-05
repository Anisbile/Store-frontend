function Show(props) {
    const id = props.match.params.id;
    const product = props.product;
    const item = product.find((p) => p._id === id);
  
    return (
      <div className="items">
        <h1>{item.name}</h1>
        <img style={{height:500, width:500}} src={item.img} alt={item.name} />
        <h2>{item.description}</h2>
        <h3>Price: {item.price} USD</h3>
        <h3>Quantity: {item.qty}</h3>

      </div>
    );
  }
  
  export default Show;