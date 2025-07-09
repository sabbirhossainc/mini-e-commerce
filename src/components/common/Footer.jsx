import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary)] py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 block">
              E.SHOP
            </Link>
            <p className="text-[var(--primary)] mix-blend-color-burn mb-4">
              We have elegant products which <br /> you're proud to Buy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;