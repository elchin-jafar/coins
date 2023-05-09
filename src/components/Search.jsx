import { useState } from "react";
import classes from "./Search.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TextField } from "@mui/material";
import Select from "../UI/Select";

const Search = ({ isOpen, searchQuery }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");

  const handleExpandSearch = () => {
    setSearchOpen((prevState) => !prevState);
    isOpen(searchOpen);
  };

  const handleSearchQuery = (e) => {
    // setSearchQuery(e.target.value);
    searchQuery(e.target.value);
  };

  return (
    <>
      <label htmlFor="searchInput" className={classes.label}>
        Input field
      </label>
      <div className={classes.flex}>
        <input
          type="text"
          id="searchInput"
          className={classes.input}
          // value={searchQuery}
          onChange={handleSearchQuery}
        />
        <button className={classes.button}>Search</button>
      </div>
      <p className={classes.p} onClick={handleExpandSearch}>
        Advanced filter{" "}
        {searchOpen ? (
          <ExpandLessIcon
            fontSize="large"
            sx={{ position: "relative", top: "6px" }}
          />
        ) : (
          <ExpandMoreIcon
            fontSize="large"
            sx={{ position: "relative", top: "6px" }}
          />
        )}
      </p>

      {searchOpen && (
        <div className={classes.flex}>
          <div className="left">
            <Select
              label="Issuing country"
              options={[
                "Canada",
                "UNITED STATES OF AMERICA",
                "the Republic of Vietnam",
                "British South Africa",
                "Estonia",
                "the Belgian Congo",
                "France",
                "Australia",
                "Bolivia",
                "Botswana",
                "British Virgin Islands",
                "Ghana",
                "the Weimar Republic",
                "Egypt",
                "India",
                "Iran",
                "Iceland",
                "Yemen",
                "China",
                "Costa Rica",
                "Portugal",
              ]}
            />
            <Select label="Metal" options={["nickel", "gold", "steel"]} />
            <Select label="Quality of the coin" options={["BU"]} />
          </div>
          <div className={classes.right}>
            <label htmlFor="" className={classes.label}>
              Price
            </label>
            <label htmlFor="" className={classes.priceLabel}>
              from
            </label>
            <input
              type="text"
              className={`${classes.input} ${classes.priceInput}`}
            />

            <label htmlFor="" className={classes.priceLabel}>
              to
            </label>
            <input
              type="text"
              className={`${classes.input} ${classes.priceInput}`}
            />

            <label htmlFor="" className={classes.label}>
              Year of issue
            </label>
            <label htmlFor="" className={classes.priceLabel}>
              from
            </label>
            <input
              type="text"
              className={`${classes.input} ${classes.priceInput}`}
            />

            <label htmlFor="" className={classes.priceLabel}>
              to
            </label>
            <input
              type="text"
              className={`${classes.input} ${classes.priceInput}`}
            />
          </div>

          {handleSearchQuery && <div>{searchQuery}</div>}
        </div>
      )}
    </>
  );
};

export default Search;
