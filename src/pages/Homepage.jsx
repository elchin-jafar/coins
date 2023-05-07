import classes from "./Homepage.module.css";
import Search from "../components/Search";
import BullionCoin from "../assets/BullionCoin.png";
import ExclusiveCoin from "../assets/ExclusiveCoin.png";
import CommemorativeCoin from "../assets/CommemorativeCoin.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const CoinShowCase = (props) => {
  const { title, image, filter } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ fontSize: "2.8rem", fontWeight: 500, lineHeight: "2.8rem" }}
      >
        {title}
      </div>
      <Link
        style={{ fontSize: "1.4rem", fontWeight: 300, textDecoration: "none" }}
        to={`/coins/${filter}`}
      >
        Show all &gt;
      </Link>
      <img src={image} alt={title} width={214} />
    </div>
  );
};

const Homepage = () => {
  const [searchOpen, setSearchOpen] = useState(true);
  return (
    <section className={classes.container}>
      <div className={classes.h1}>Homepage</div>
      <Search isOpen={(prop) => setSearchOpen(prop)} />
      {searchOpen && (
        <div className={classes.flex}>
          <CoinShowCase
            title="Bullion coins"
            image={BullionCoin}
            filter="bullion"
          />
          <CoinShowCase
            title="Exclusive coins"
            image={ExclusiveCoin}
            filter="exclusive"
          />
          <CoinShowCase
            title="Commemorative coins"
            image={CommemorativeCoin}
            filter="commemorative"
          />
        </div>
      )}
    </section>
  );
};

export default Homepage;
