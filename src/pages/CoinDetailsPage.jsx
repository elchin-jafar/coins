import { useEffect, useState } from "react";
import classes from "./CoinDetailsPage.module.css";
import BullionCoinImg from "../assets/BullionCoin.png";
import ExclusiveCoinImg from "../assets/ExclusiveCoin.png";
import { useNavigate, useParams } from "react-router-dom";
import CustomizedTables from "../UI/Table";
import data from "../data/coinData";
import useTable from "../hooks/useTable";

const CoinDetailsPage = () => {
  const [curCoin, setCurCoin] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentData] = data.filter((coin) => +id === coin.id);
  const rows = useTable(currentData);
  console.log("rows", rows);
  useEffect(() => {
    setCurCoin(currentData);
  }, []);

  console.log("state", curCoin);
  return (
    curCoin && (
      <section className={classes.section}>
        <div className={classes.left}>
          <img
            src={BullionCoinImg}
            alt="BullionCoinImg"
            width={300}
            style={{ marginBottom: "2.4rem" }}
          />
          <img src={ExclusiveCoinImg} alt="ExclusiveCoinImg" width={300} />
        </div>
        <div className={classes.right}>
          <h1 className={classes.h1}>{currentData.name}</h1>
          <p className={classes.p}>{currentData.info}</p>{" "}
          <CustomizedTables rows={rows} />
          <a onClick={() => navigate(-1)} className={classes.navigation}>
            Back to the list
          </a>
        </div>
      </section>
    )
  );
};

export default CoinDetailsPage;
