import "./App.css";
import Card from "./components/Card";
import React, { Component } from "react";
import styles from "./styles/Main.module.css";
import loaderimg from "./Loader/loading.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      loader: true,
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => this.setState({ api: json, loader: false }), 3000),
      );
  }

  render() {
    let cardArr = this.state.api.Search;
    // console.log(this.state.loader);
    return (
      <div>
        <h1 styles="color:white;"> MOVIES APP</h1>
        <div className={styles.Main}>
          {this.state.loader ? (
            <img src={loaderimg} alt="Loading...." />
          ) : (
            <div className={styles.CardGrid}>
              {cardArr ? cardArr.map((item) => <Card props={item} />) : null}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
