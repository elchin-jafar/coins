import classes from "./CoinDetailsPage.module.css";
import BullionCoinImg from "../assets/BullionCoin.png";
import ExclusiveCoinImg from "../assets/ExclusiveCoin.png";
import { useNavigate } from "react-router-dom";
import CustomizedTables from "../UI/Table";

const CoinDetailsPage = () => {
  const navigate = useNavigate();
  return (
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
        <h1 className={classes.h1}>Canadian Beaver</h1>
        <p className={classes.p}>
          "Canadian beaver". Unique coin with the image of a beaver. Face value
          - 5 cents. Created under Elizabeth II.{" "}
        </p>{" "}
        <p>
          {" "}
          In the center of the obverse is a portrait of Queen Elizabeth II, the
          profile is directed to the right. The inscription on the left
          semicircle (English) ELIZABETH II, on the right semicircle D · G ·
          REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a
          mint mark.{" "}
        </p>{" "}
        <p>
          {" "}
          In the center of the coin reverse is a Canadian beaver on a rock
          sticking out of the water. At the top is a semicircle with the
          inscription "5 cents" between two maple leaves. At the bottom in two
          lines is the inscription CANADA (CANADA) and the year of minting.
        </p>
        <CustomizedTables />
        <a onClick={() => navigate(-1)} className={classes.navigation}>
          Back to the list
        </a>
      </div>
    </section>
  );
};

export default CoinDetailsPage;
