import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import railsmd from "./assets/Rails.md";
import "./App.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = { rails: null };
  }

  componentWillMount() {
    fetch(railsmd)
      .then((response) => response.text())
      .then((text) => {
        this.setState({ rails: text });
      });
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown children={this.state.rails} />
      </div>
    );
  }
}

export default Product;
