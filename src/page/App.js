import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import AboutMarkdown from "../assets/about.md";
import ContactMarkdown from "../assets/contact.md";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    
    document.body.style.backgroundColor = "#cecece";
    
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
      <div className="App">
        <ReactMarkdown source={about} />
        <div className="Center">
          <ReactMarkdown source={contact} />
        </div>
      </div>
    );
  }
}

export default App;
