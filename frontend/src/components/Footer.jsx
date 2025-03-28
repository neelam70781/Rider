import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h4 className="font-semibold">CAR Rental</h4>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </p>
              <ul className="list-none p-0 mt-4">
                <li>
                  <a href="tel:123456789">
                    <IconPhoneCall className="text-white" /> &nbsp; (123) -456-789
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:carrental@gmail.com"
                  >
                    <IconMail className="text-white" />
                    &nbsp; carrental@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h4 className="font-semibold">Company</h4>
              <ul className="list-none p-0 mt-4">
                <li>
                  <a href="#home">New York</a>
                </li>
                <li>
                  <a href="#home">Careers</a>
                </li>
                <li>
                  <a href="#home">Mobile</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">How we work</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h4 className="font-semibold">Working Hours</h4>
              <ul className="list-none p-0 mt-4">
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <h4 className="font-semibold">Subscription</h4>
              <ul className="list-none p-0 mt-4">
                <li>
                  <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Email Address" className="border-2 border-white px-2 py-1 w-full" />
                </li>
                <li>
                  <button className="submit-email bg-white text-gray-800 px-4 py-2 mt-2">Submit</button>
                </li>
              </ul>
            </div>
          </div>
          </div>
      </footer>
    </>
  );
}

export default Footer;