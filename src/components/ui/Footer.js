const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          © 2024 Sevaarth. All Rights Reserved.
        </p>
        <p className="text-sm">Contact us: info@sevaarth.org | +123 456 7890</p>
        <div className="mt-4">
          <a href="#" className="mx-2 text-white hover:text-gray-300">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="#" className="mx-2 text-white hover:text-gray-300">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="mx-2 text-white hover:text-gray-300">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
