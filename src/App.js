import { PRODUCTS } from "./products";
import "./App.css";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" className="table__heading">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form className="search__form">
      <input type="text" placeholder="Search..." className="search__input" />
      <label>
        <input type="checkbox" className="search__checkbox" /> Only show
        products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}
