import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTable from "../hooks/useTable";
import classes from "./CoinDetailsPage.module.css";
import data from "../data/coinData";
import CustomizedTables from "../UI/Table";

const CoinDetailsPage = () => {
  const [curCoin, setCurCoin] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentData] = data.filter((coin) => +id === coin.id);
  const rows = useTable(currentData);
  useEffect(() => {
    setCurCoin(currentData);
  }, []);

  return (
    curCoin && (
      <section className={classes.section}>
        <div className={classes.left}>
          <img
            src={currentData?.image1}
            alt="BullionCoinImg"
            width={300}
            style={{ marginBottom: "2.4rem" }}
          />
          <img src={currentData?.image2} alt="ExclusiveCoinImg" width={300} />
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
