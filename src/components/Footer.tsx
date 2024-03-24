function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 mt-8">
        <p className="text-xs">© 2024 Music School. All rights reserved.</p>
        <p className="text-xs flex items-center gap-0">
          Developed with{" "}
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            className="mx-3 scale-150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.4989 5.88096L6.4989 10.833L1.4989 5.88096C1.1691 5.56004 0.909327 5.17431 0.735931 4.74805C0.562534 4.3218 0.479273 3.86426 0.49139 3.40425C0.503508 2.94424 0.610741 2.49172 0.806337 2.07519C1.00193 1.65865 1.28166 1.28713 1.62789 0.984016C1.97412 0.6809 2.37937 0.452756 2.81811 0.31395C3.25684 0.175145 3.71957 0.128686 4.17714 0.177497C4.63472 0.226309 5.07723 0.369334 5.47682 0.597567C5.8764 0.8258 6.2244 1.1343 6.4989 1.50363C6.77459 1.13698 7.12299 0.831177 7.5223 0.605366C7.92161 0.379555 8.36323 0.238596 8.81952 0.19131C9.27581 0.144023 9.73695 0.191428 10.1741 0.330557C10.6112 0.469687 11.0149 0.697545 11.3599 0.999872C11.705 1.3022 11.9839 1.67249 12.1792 2.08756C12.3745 2.50263 12.4821 2.95355 12.4951 3.4 F121C12.5081 3.87065 12.4264 4.32696 12.255 4.75246C12.0836 5.17797 11.8262 5.56351 11.4989 5.88496"
              fill="#F2F3D9"
            ></path>
          </svg>{" "}
          by <a className="ml-1 underline hover:text-white transition-all duration-200" target="_blank" href="https://purnashrestha.com.np"> Purna Shrestha</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
