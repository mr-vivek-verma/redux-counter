import React from "react";
import { connect } from "react-redux";

import "./index.css";
import { markFavourite, removeFavourite } from "../actions";
import ItemCard from "../components/index";

class ItemList extends React.Component {
  updateFavourites = (name) => {
    return this.props.favourites.find((item) => item === name)
      ? this.props.removeFavourite(name)
      : this.props.markFavourite(name);
  };
  render() {
    return (
      <div>
        <div className="list">
          <ul>
            <u>Favourites ({this.props.favourites.length})</u>
            <br />
            <br />
            {this.props.favourites.map((item, id) => (
              <li key={++id}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="container">
          <ItemCard
            imgPath="https://li0.rightinthebox.com/images/384x500/201511/obsrrk1447991368230.jpg"
            name="Pink dress 1"
            price="$35.00"
            onClick={() => this.updateFavourites("Pink dress 1")}
          />
          <ItemCard
            imgPath="https://li0.rightinthebox.com/images/384x500/201511/obsrrk1447991368230.jpg"
            name="Pink dress 2"
            price="$30.00"
            onClick={() => this.updateFavourites("Pink dress 2")}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  favourites: state.itemActions.favourites,
});

export default connect(mapStateToProps, { markFavourite, removeFavourite })(
  ItemList
);
