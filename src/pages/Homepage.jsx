import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/coinData";
import classes from "./Homepage.module.css";
import Search from "../components/Search";
import CoinShowCase from "../components/CoinShowCase";
import BullionCoin from "../assets/BullionCoin.png";
import ExclusiveCoin from "../assets/ExclusiveCoin.png";
import CommemorativeCoin from "../assets/CommemorativeCoin.png";

const CoinShowCaseHome = (props) => {
  const { title, image, filter } = props;
  return (
    <div className={classes.cscContainer}>
      <div className={classes.cscTitle}>{title}</div>
      <Link className={classes.cscLink} to={`/coins/${filter}`}>
        Show all &gt;
      </Link>
      <img src={image} alt={title} width={214} />
    </div>
  );
};

const Homepage = () => {
  const [searchOpen, setSearchOpen] = useState(true);
  const [isSearchEntered, setIsSearchEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const handleSearchQuery = (query) => {
    setIsSearchEntered(query);
    const filtered = data.filter((coin) =>
      coin.name.trim().toLowerCase().includes(query.trim().toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <section className={classes.container}>
      <div className={classes.h1}>Homepage</div>
      <Search
        isOpen={(prop) => setSearchOpen(prop)}
        searchQuery={handleSearchQuery}
      />
      {!isSearchEntered && searchOpen && (
        <div className={classes.flex}>
          <CoinShowCaseHome
            title="Bullion coins"
            image={BullionCoin}
            filter="bullion"
          />
          <CoinShowCaseHome
            title="Exclusive coins"
            image={ExclusiveCoin}
            filter="exclusive"
          />
          <CoinShowCaseHome
            title="Commemorative coins"
            image={CommemorativeCoin}
            filter="commemorative"
          />
        </div>
      )}
      {isSearchEntered && (
        <div>
          {filteredData.length !== 0 ? (
            filteredData.map((coin) => (
              <CoinShowCase
                title={coin.name}
                image={coin.image1}
                info={coin.shortInfo}
                key={coin.id}
                id={coin.id}
              />
            ))
          ) : (
            <div className={classes.notFound}>not found</div>
          )}
        </div>
      )}
    </section>
  );
};

export default Homepage;
