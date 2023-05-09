import classes from "./ListofCoins.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import Search from "../components/Search";
import BullionCoin from "../assets/BullionCoin.png";
import data from "../data/coinData";
import { useState, useEffect } from "react";

export const CoinShowCase = ({ title, image, info, id }) => {
  return (
    <div
      style={{ display: "flex", marginBottom: "2.5rem", marginRight: "15rem" }}
    >
      <img
        src={image}
        alt={title}
        width={120}
        style={{ marginRight: "3rem" }}
      />
      <div className="right">
        <Link
          to={`/coin-details/${id}`}
          className="title"
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            lineHeight: "1.8rem",
            color: "#833AE0",
            textDecoration: "none",
          }}
        >
          {title}
        </Link>
        <div
          className="info"
          style={{
            fontSize: "1.2rem",
            fontWeight: 400,
            width: "22.4rem",
            marginTop: "0.5rem",
          }}
        >
          {info}
        </div>
      </div>
    </div>
  );
};

const ListofCoins = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
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
        <p style={{ color: "#B1ABAB", fontSize: "1rem", fontWeight: 500 }}>
          List of the Coins
        </p>
      </Breadcrumbs>
      <Search isOpen={(prop) => setIsOpen(prop)} />
      {isOpen && (
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
    </section>
  );
};

export default ListofCoins;
