import { useState } from "react";
import classes from "./Search.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Select from "../UI/Select";
import data from "../data/coinData";
import { CoinShowCase } from "../pages/ListofCoins";

const Search = ({ isOpen, searchQuery }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [countryValue, setCountryValue] = useState("");
  const [metalValue, setMetalValue] = useState("");

  console.log("filteredData from search", filteredData);

  const handleExpandSearch = () => {
    if (isBtnClicked && searchOpen) setIsBtnClicked(false);
    setSearchOpen((prevState) => !prevState);
    isOpen(searchOpen);
  };

  const handleSearchQuery = (e) => {
    searchQuery(e.target.value);
  };

  const handleCountryValue = (e) => {
    const value = e.target.value.toLowerCase();
    setCountryValue(value);
  };

  const handleMetalValue = (e) => {
    const value = e.target.value.toLowerCase();
    setMetalValue(value);
  };

  const handleSearch = () => {
    setIsBtnClicked(true);
    if (countryValue) {
      const filtered = data.filter(
        (coin) => coin.issuingCountry.toLowerCase() === countryValue
      );
      setFilteredData(filtered);
    }

    if (metalValue) {
      const filtered = data.filter(
        (coin) => coin.composition.toLowerCase() === metalValue
      );
      setFilteredData(filtered);
    }

    if (countryValue && metalValue) {
      const countryFilter = data.filter(
        (coin) => coin.issuingCountry.toLowerCase() === countryValue
      );
      const result = countryFilter.filter(
        (coin) => coin.composition.toLowerCase() === metalValue
      );
      setFilteredData(result);
    }
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
          onChange={handleSearchQuery}
        />
        <button className={classes.button} onClick={handleSearch}>
          Search
        </button>
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
                "enter country",
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
              onChange={handleCountryValue}
            />
            <Select
              label="Metal"
              options={["enter metal", "nickel", "gold", "steel"]}
              onChange={handleMetalValue}
            />
            <Select
              label="Quality of the coin"
              options={["enter quality", "BU"]}
            />
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
        </div>
      )}

      {isBtnClicked && (
        <div style={{ marginTop: "3rem" }}>
          {filteredData.length !== 0 ? (
            filteredData.map((coin) => (
              <CoinShowCase
                key={coin.id}
                title={coin.name}
                image={coin.image1}
                info={coin.shortInfo}
                id={coin.id}
              />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                fontSize: "2rem",
                opacity: "0.6",
                fontStyle: "italic",
              }}
            >
              not found
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Search;
