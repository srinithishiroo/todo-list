import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";
import { useEffect } from "react";
import Button from "./button";
import Head from "../components/header";
import Two from "../components/hero";
import Card from "../components/cards";
import Hard from "../components/chips";
import Appp from "../components/todo";
import List from "../components/block";
function App() {
  const dress = [
    { name: "chudi", price: 500 },
    { name: "jeans", price: 900 },
    { name: "kurthi", price: 350 },
    { name: "shirt", price: 700 },
  ];

  const people = [
    { name: "Angelin", designation: "Author" },
    { name: "Bargavi", designation: "Dentist" },
    { name: "Charu", designation: "Beautician" },
    { name: "Divya", designation: "Fashion Exper" },
  ];

  const chips = [
    { name: "lays", flavor: "cheese" },
    { name: "kurkure", flavor: "tomato" },
    { name: "bingo", flavor: "salt" },
    { name: "rings", flavor: "saucy" },
  ];

  const [chipss, setChips] = React.useState(chips);

  const [follow, setFollow] = React.useState(people);

  //const [counter, setCounter] = React.useState(0);
  const [State, setState] = React.useState(dress);

  const [hamBurgerOn, setHamState] = React.useState(false);

  const hamburger = (
    <b
      className="ham"
      onClick={(e) => {
        e.preventDefault();
        setHamState(true);
      }}
    >
      MENU{" "}
    </b>
  );

  const eye = (currrentIndex) => {
    const updateData = State.map((product, index) => {
      if (currrentIndex === index) {
        return { ...product, addCart: product.addCart + 1 };
      }
      return product;
    });
    setState(updateData);
  };

  const nose = (currentIndex) => {
    const updateData = State.map((product, index) => {
      if (currentIndex === index) {
        return { ...product, addCart: product.addCart - 1 };
      }
      return product;
    });
    setState(updateData);
  };
  const handlecart = (currentIndex) => {
    const updateData = State.map((product, index) => {
      if (currentIndex === index) {
        return { ...product, addCart: 1 };
      }
      return product;
    });
    setState(updateData);
  };
  //useEffect(() => {}, []);
  function handlefollow(follower, index) {
    console.log("index", index);
    console.log("follower", follower);
    const mutuated = follow.map((follower, ind) => {
      if (ind === index) {
        return { ...follower, isFollowing: !follower.isFollowing };
      } else {
        return follower;
      }
    });
    setFollow([...mutuated]);
    console.log("mutuated", mutuated);
  }

  const sidemenu = (
    <div className="side">
      <h3>MENU</h3>
      <b
        className="sidetwo"
        onClick={(e) => {
          e.preventDefault();
          setHamState(false);
        }}
      >
        CLOSE
      </b>
    </div>
  );

  const header = (
    <div className="App">
      <div className="logo">
        <h2> LOGO</h2>
      </div>
      <div className="nav">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
        <a href="#">SETTINGS</a>
        <button id="btn">LOGIN</button>
        {hamburger}
      </div>
    </div>
  );

  const [onColorChange, setColor] = React.useState(false);

  const colour = (
    <button
      className="first"
      onClick={(e) => {
        e.preventDefault();
        setColor(true);
      }}
    >
      CHANGE{" "}
    </button>
  );

  const reset = (
    <button
      className="second"
      onClick={(e) => {
        e.preventDefault();
        setColor(false);
      }}
    >
      RESET
    </button>
  );

  const mainpage = (
    <div
      className="hero"
      style={{ backgroundColor: onColorChange ? "red" : "yellow" }}
    >
      <h1>Hero</h1>
      {colour}
      {reset}
    </div>
  );
  /*const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };*/

  const renderpeople = follow.map((pro, index) => {
    return (
      <div className="me">
        <h4>{pro.name}</h4>
        <b>{pro.designation}</b>
        <div className="button_change">
          <button className="toggle" onClick={() => handlefollow(pro, index)}>
            {pro.isFollowing ? "unFollow" : "follow"}
          </button>
        </div>
      </div>
    );
  });

  const renderchips = chipss.map((chip, index) => {
    return (
      <div className="taste">
        <h4>{chip.name}</h4>
        <b>{chip.flavor}</b>
      </div>
    );
  });
  const increment = () => alert("Hi everyone ");

  const renderdress = State.map((product, index) => {
    return (
      <div className="product_cart">
        <h4>{product.name}</h4>
        <b>{product.price}</b>
        <div className="counter">
          <span className="counter_output">{product.addCart}</span>
          {!product.addCart ? (
            <div className="btn_container">
              <button className="control_btn" onClick={() => handlecart(index)}>
                ADD TO CART
              </button>
            </div>
          ) : (
            <div className="btn_container">
              <button className="control_btn" onClick={() => eye(index)}>
                +
              </button>
              <button className="control_btn" onClick={() => nose(index)}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    );
  });

  const content = (
    <div className="cards">
      <h1>Cards</h1>
    </div>
  );

  const footer = (
    <div className="foot">
      <h1>Footer</h1>
    </div>
  );

  return (
    <React.Fragment>
      {hamBurgerOn && sidemenu}
      {header}
      {mainpage}
      <div className="proo">{renderpeople}</div>
      <div className="product_cat">{renderdress}</div>
      {content}
      <div className="change">
        {dress.map((dress, index) => {
          return <Card key={index} name={dress.name} price={dress.price} />;
        })}
      </div>
      <div className="tastee">{renderchips}</div>
      {footer}
      <Head />
      <Two />
      <div className="hi">
        <Hard />;
      </div>
      <Appp />
      <List />
    </React.Fragment>
  );
}
export default App;
