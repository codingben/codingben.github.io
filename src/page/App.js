import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import AboutMarkdown from "../assets/about.md";
import ContactMarkdown from "../assets/contact.md";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      about: "",
      contact: "",
    };
  }

  componentWillMount() {
    fetch(AboutMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ about: text }));

    fetch(ContactMarkdown)
      .then((res) => res.text())
      .then((text) => this.setState({ contact: text }));
  }

  render() {
    const { about, contact } = this.state;

    return (
      <div className="about">
        <ReactMarkdown source={about} />
        <div className="contact">
          <ReactMarkdown source={contact} />
        </div>
      </div>
    );
  }
}

export default App;
