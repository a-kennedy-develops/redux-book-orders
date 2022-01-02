import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 7.99,
    title: "Warriors",
    description: "A riveting story of intelligent, tribal cats",
  },
  {
    id: "p2",
    price: 9.99,
    title: "First Blood",
    description:
      "A violent story of a young veteran with PTSD clashing with a local Police Department",
  },
  {
    id: "p3",
    price: 14.99,
    title: "The Fellowship of the Ring",
    description:
      "Hard-back copy of the first entry in the Lord of the Rings saga",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
