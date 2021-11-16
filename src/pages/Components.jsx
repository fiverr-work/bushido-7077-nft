import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Components = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <div className="container">
        <h2 className="text-stroke">7077</h2>
        <p>
          Lorem ipsum <b>dolor</b> sit amet.
        </p>
        <a href="/">nav link</a>
        <h1>h2 Hello World</h1>
        <h2>h2 Hello World</h2>
        <h3>h3 Hello World</h3>
        <h4>h4 Hello World</h4>
        <h5>h5 Hello World</h5>
        <h6>h6 Hello World</h6>
        <footer>
          <a href="/">footer link</a>
        </footer>
      </div>
      <Buttons>
        <div className="container">
          <div>
            <label>a tag</label>
            <Link to="/" className="btn">
              join our community
            </Link>
          </div>
          <div>
            <label>button tag</label>
            <button>join our community</button>
          </div>
        </div>
      </Buttons>
    </div>
  );
};

export default Components;

const Buttons = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #ffe600;
  color: #14191a;
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    > * {
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      flex-direction: column;
      label {
        margin-bottom: 15px;
        text-transform: capitalize;
        font-family: "Manrope Bold";
      }
    }
  }
`;
