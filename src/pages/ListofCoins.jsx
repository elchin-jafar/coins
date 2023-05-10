import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/coinData";
import classes from "./ListofCoins.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Search from "../components/Search";
import CoinShowCase from "../components/CoinShowCase";

const ListofCoins = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [isSearchEntered, setIsSearchEntered] = useState("");
  const [filteredBySearch, setFilteredBySearch] = useState([]);
  const { filter } = useParams();
  useEffect(() => {
    if (filter === "bullion")
      setFilteredData(data.filter((coin) => coin.class === "Bullion coins"));
    if (filter === "exclusive")
      setFilteredData(data.filter((coin) => coin.class === "Exclusive coins"));
    if (filter === "commemorative")
      setFilteredData(
        data.filter((coin) => coin.class === "Commemorative coins")
      );
  }, []);

  const handleSearchQuery = (query) => {
    setIsSearchEntered(query);
    const filtered = filteredData.filter((coin) =>
      coin.name.trim().toLowerCase().includes(query.trim().toLowerCase())
    );
    setFilteredBySearch(filtered);
  };

  console.log("filteredBySearch list page", filteredBySearch);

  return (
    <section className={classes.container}>
      <div className={classes.h1}>List of the Coins</div>
      <Breadcrumbs separator="-" sx={{ position: "relative", top: "-2.5rem" }}>
        <Link
          to="/"
          style={{
            color: "#B1ABAB",
          }}
        >
          Homepage
        </Link>
        <p className={classes.p}>List of the Coins</p>
      </Breadcrumbs>
      <Search
        isOpen={(prop) => setIsOpen(prop)}
        searchQuery={handleSearchQuery}
      />
      {!isSearchEntered && isOpen && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredData?.map((coin) => (
            <CoinShowCase
              title={coin?.name}
              image={coin?.image1}
              info={coin?.shortInfo}
              key={coin?.id}
              id={coin?.id}
            />
          ))}
        </div>
      )}
      {isSearchEntered && (
        <div>
          {filteredBySearch.length !== 0 ? (
            filteredBySearch.map((coin) => (
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

export default ListofCoins;
