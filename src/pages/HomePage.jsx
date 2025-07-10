import ProductsGrid from "../components/ProductsGrid";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-2xl font-bold">Your Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-5 sm:mx-auto my-6">
        <ProductsGrid />
      </div>
    </>
  );
};
export default HomePage;
