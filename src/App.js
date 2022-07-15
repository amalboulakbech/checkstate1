import "./App.css";
import React, { Component } from "react";
import harry from "./photo/harry-potter.jpg"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "harry-potter",
      bio: " un élève a École de magie et de sorcellerie de Poudlard",
      imagesrc: harry,
      profession: "le plus grand sorcier de sa génération.",
      visibility: "false",
      timer: 0,
      interval: null,
    };
  }

  toggle() {
    this.setState({ show: !this.state.show });
    if (!this.state.show) {
      this.setState({ timer: 0 });
    }
  }
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log(this.state.intervall);
  }
  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <div>
            <h1 style={{ color: "pink" }}> Harry potter </h1>
            <img
              src={this.state.imagesrc}
              width="400px"
              height="400px"
              alt="profile imge"
            ></img>
            <h3
              style={{
                color: "blac",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              {this.state.fullName} est {this.state.bio} considéré comme{" "}
              {this.state.profession}
            </h3>
            <h3 style={{ color: "black" }}>the counter is on :</h3>
            <h3 style={{ color: "black" }}>{this.state.timer}</h3>
            <br></br>
            <br></br>
            <button onClick={() => this.toggle()}>Hide</button>{" "}
          </div>
        ) : (
          <div>
            <button onClick={() => this.toggle()}>show</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
