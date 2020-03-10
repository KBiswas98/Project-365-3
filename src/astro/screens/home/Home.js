import React, { Component } from "react";
import "./home.scss";
import { Button } from "../../components/button/Button";

const DATA = [
  ["su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["mo", "su", "sat", "ra"],
  ["ju", "su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["ke", "su", "sat", "ra"],
  ["ma", "me", "su", "sat", "ra"],
  ["su", "sat", "ra"],
  ["ve", "sa", "su", "sat", "ra"]
];

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "kamales biswas",
      gender: "male",
      day: 1,
      month: 1,
      year: 1998,
      hrs: 0,
      min: 0,
      sec: 0,
      place_of_birth: "none",
      lat: "00",
      long: "00",
      //   ----------
      data: null
    };
  }

  componentDidMount() {
    this.setState({ data: DATA });
  }

  handelChange = event => {
    console.log("item: " + this.state.name);
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handelOptionClick = () => {
    this.setState(pre => ({
      gender: pre.gender === "male" ? "female" : "male"
    }));
  };

  render() {
    return (
      <div className="home">
        <div className="input_section">
          <form>
            <div className="card">
              <div className="row-holder">
                <div>
                  <label>Name</label>
                  <br />
                  <input
                    name="name"
                    placeholder={"Name"}
                    value={this.state.name}
                    onChange={this.handelChange}
                  />
                </div>
                <div className="row">
                  <label>Gender</label>
                  <br />
                  <div>
                    <Button
                      type={`option${
                        this.state.gender === "male" ? " mo" : ""
                      }`}
                      callback={this.handelOptionClick}
                    >
                      Male
                    </Button>
                    <Button
                      type={`option${
                        this.state.gender === "female" ? " mo" : ""
                      }`}
                      callback={this.handelOptionClick}
                    >
                      Female
                    </Button>
                  </div>
                </div>
              </div>
              <div className="date row-holder">
                <div>
                  <label>Day</label>
                  <br />
                  <input
                    name="day"
                    placeholder={"Day"}
                    value={this.state.day}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <label>Month</label>
                  <br />
                  <input
                    name="month"
                    placeholder={"Month"}
                    value={this.state.month}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <label>Year</label>
                  <br />
                  <input
                    name="year"
                    placeholder={"Year"}
                    value={this.state.year}
                    onChange={this.handelChange}
                  />
                </div>
              </div>

              <div className="time row-holder">
                <div>
                  <label>Hour</label>
                  <br />
                  <input
                    name="hrs"
                    placeholder={"00"}
                    value={this.state.hrs}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <label>Minets</label>
                  <br />
                  <input
                    name="min"
                    placeholder={"00"}
                    value={this.state.hrs}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <label>Second</label>
                  <br />
                  <input
                    name="sec"
                    placeholder={"00"}
                    value={this.state.sec}
                    onChange={this.handelChange}
                  />
                </div>
              </div>

              <div className="area">
                <label>Place</label>
                <br />
                <input
                  name="place_of_birth"
                  placeholder={"Place"}
                  value={this.state.place_of_birth}
                  onChange={this.handelChange}
                />
              </div>

              <div className="row-holder latlang">
                <div>
                  <label>Latitude(N)</label>
                  <br />
                  <input
                    name="lat"
                    placeholder={"Latitude"}
                    value={this.state.lat}
                    onChange={this.handelChange}
                  />
                </div>
                <div>
                  <label>Longitude(E)</label>
                  <br />
                  <input
                    name="long"
                    placeholder={"Longitude"}
                    value={this.state.long}
                    onChange={this.handelChange}
                  />
                </div>
              </div>

              <input className="submit" type="submit" name="submit" />
            </div>
          </form>
        </div>
        <div className="output_section">
          <Chart />
        </div>
      </div>
    );
  }
}

const Chart = props => (
  <div style={{ position: "relative" }}>
    <img
      src={require("../../assets/icons/plane_2.png")}
      style={{
        maxHeight: 450,
        maxWidth: 450,
        position: "relative",
        top: 95,
        right: 10,
        opacity: 0.5
      }}
    />
    <div className="markar">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>10</p>
      <p>11</p>
      <p>12</p>
      {DATA.map(item => (
        <h6>{item.toString().replace(/,/g, ', ')}</h6>
      ))}
    </div>
    <div className="plan"></div>
  </div>
);
