import classes from "./CoinShowCase.module.css";
import { Link } from "react-router-dom";

const CoinShowCase = ({ title, image, info, id }) => {
  return (
    <div className={classes.section}>
      <Link to={`/coin-details/${id}`} style={{ textDecoration: "none" }}>
        <div className={classes.container}>
          <img src={image} alt={title} width={120} className={classes.img} />
          <div className="right">
            <div className={classes.title}>{title}</div>
            <div className={classes.info}>{info}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CoinShowCase;
