import React, { useEffect } from "react";
import { useState } from "react";

const ENUM_TEXT = {
  DEFAULT: "Defualt Value",
  COUNTING: "Counting!",
  MAXVALUE: "Max Value!",
};

const ENUM_ACTION = {
  DECRESE: "-",
  INCREASE: "+",
};

const Home = () => {
  const numberArr = [1, 2, 3, 4, 5, 6, 7];

  const multiplyEvensNumber = (numberList) => {
    if (numberList.length) {
      let evenNumbersForMultiply = numberList.filter((num) => num % 2 === 0);
      return console.log(
        "multiplay Number is",
        evenNumbersForMultiply.map((even) => even * 2)
      );
      //return console.log('multiplay Number is', evenNumbersForMultiply)
    }
    return console.log("Error");
  };

  multiplyEvensNumber(numberArr);

  const userData = [
    {
      name: "Win",
      age: 25,
    },
    {
      name: "Ton",
      age: 25,
    },
    {
      name: "Jeff",
      age: 33,
    },
    {
      name: "Boat",
      age: 26,
    },
  ];

  const getAgeByName = (name) => {
    let result = {
      age: 0,
      name: "",
    };
    userData.filter((data) => {
      if (data.name === name) {
        result = data;
      }
      return result;
    });
    return console.log(name, "Age is :", result.age);
  };

  const groupUserByAge = () => {
    const groupAge = userData.reduce(
      (prev, cur) => ({
        ...prev,
        [cur.age]: (prev[cur.age] || []).concat(cur.name),
      }),
      {}
    );
    return console.log("groupAge", groupAge);
  };

  const getUserByMaxAndMinAge = (action) => {
    let result = {
      name: "",
      age: 0,
    };

    if (action === "max") {
      result = userData.reduce((prev, current) =>
        prev.age > current.age ? prev : current
      );
      return console.log("maxAge!!!!", result.name);
    }

    if (action === "min") {
      result = userData.reduce((prev, current) =>
        prev.age < current.age ? prev : current
      );
      return console.log("minAge!!!!", result.name);
    }
    return console.log("ERROR");
  };

  getUserByMaxAndMinAge("min");
  getUserByMaxAndMinAge("max");
  getAgeByName("Boat");
  getAgeByName("Jeff");
  groupUserByAge();

  const [count, setCount] = useState(0);
  const [text, setText] = useState(ENUM_TEXT.DEFAULT);

  const handleTotal = (action) => {
    if (action === ENUM_ACTION.DECRESE) {
      setCount(count - 1);
    }

    if (action === ENUM_ACTION.INCREASE) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (count >= 1) {
      setText(ENUM_TEXT.COUNTING);
    }
    if (count === 10) {
      setText(ENUM_TEXT.MAXVALUE);
    }
    if (count === 0) {
      setText(ENUM_TEXT.DEFAULT);
    }
  }, [count]);

  return (
    <div>
      <button
        onClick={() => handleTotal(ENUM_ACTION.DECRESE)}
        disabled={count <= 0}
      >
        -
      </button>
      <span>{count}</span> <span>{text}</span>
      <button
        onClick={() => handleTotal(ENUM_ACTION.INCREASE)}
        disabled={count === 10}
      >
        +
      </button>
    </div>
  );
};

export default Home;
