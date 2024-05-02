import React from "react";
import "./AboutUs.css"; // Import styles
import { assets } from "../../assets/assets"; // Import images from assets

const AboutUs = () => {
  return (
    <div className="about-us">
      {" "}
      {/* AboutUs container */}
      <img src={assets.bakery} alt="bakery image" />
      <h1>About Us</h1>
      <br />
      <p>
        Welcome to Sweet Confections Pastry Shop, where every cake tells a story
        of passion, artistry, and dedication.
      </p>
      <br />
      <p>
        Meet Chef Calvin Karl Angelo F. Brosas, the visionary behind our
        delectable creations. Hailing from the picturesque town of Nagcarlan,
        Laguna, Chef Calvin embarked on his culinary journey by pursuing a
        degree in Hospitality and Restaurant Services at STI College San Pablo.
      </p>
      <br />
      <p>
        Initially, Chef Calvin's foray into the world of confections was sparked
        by a friend's suggestion to turn his talent into a business. At first
        hesitant, Chef Calvin soon realized his innate passion for cake
        decorating and decided to share his creations on social media.
      </p>
      <br />
      <p>
        What began as a simple hobby swiftly transformed into a thriving
        enterprise when requests for custom cakes started pouring in. With
        unwavering confidence and a commitment to excellence, Chef Calvin
        embarked on his entrepreneurial journey, one cake at a time.
      </p>
      <br />
      <p>
        At Sweet Confections, we believe in the power of collaboration with our
        customers. Understanding their unique preferences and desires allows us
        to create bespoke designs that exceed expectations. While Chef Calvin
        draws inspiration from his own imagination, he also values customer
        input, ensuring each creation is a true reflection of their vision.
      </p>
      <br />
      <p>
        Despite the inevitable challenges along the way, Chef Calvin remains
        steadfast in his pursuit of perfection. With humility and resilience, he
        embraces every trial and error, continuously evolving and honing his
        craft. Through it all, his unwavering faith reminds us that with
        perseverance and determination, success is inevitable.
      </p>
      <br />
      <p>
        Join us at Sweet Confections Pastry Shop, where every slice is a
        celebration of creativity, craftsmanship, and unwavering dedication.
      </p>
    </div>
  );
};

export default AboutUs;
