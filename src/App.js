import React from "react";
import "./App.css";
import { SideBar } from "./components/sidebar/sidebar";
import { MainSection } from "./components/main-section/mainSection";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coord: [],
      selectedIndex: 0
    };
  }

  componentWillMount() {
    fetch("http://www.mocky.io/v2/5a0081a83000008c08fabcda", {
      method: "get"
    })
      .then(response => {
        response.json().then(data => {
          //    this.setState({count: data})
          this.setState({ coord: data });
        });
      })
      .catch(function(err) {
        // Error :(
      });
  }

  updateSelectedIndex = index => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { coord, selectedIndex } = this.state;
    return (
      <div className="App">
        <SideBar
          coordinate={coord}
          onUpdateSelectedIndex={this.updateSelectedIndex}
          selectedIndex={selectedIndex}
        />
        <MainSection coordinate={coord} selectedIndex={selectedIndex} onUpdateSelectedIndex={this.updateSelectedIndex} />
      </div>
    );
  }
}
