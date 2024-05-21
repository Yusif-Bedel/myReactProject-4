import React, { useContext, useState } from "react";
import "./Section1.scss";
import MainContext from "../../context/context";
import Card from "../Card/Card";
const Section1 = () => {
  const { data, setData } = useContext(MainContext);
  const [inpVal, setInpVal] = useState("");
  const [sortBy, setSortBy] = useState(null);
  return (
    <section className="section1">
      <div className="container">
        <div className="section-heading">
          <div className="section-item"></div>
          <h2 className="heading black">Subscribe to Newslater</h2>
        </div>
        <div className="section1Body">
          <input
            value={inpVal}
            onChange={(e) => {
              setInpVal(e.target.value);
            }}
            type="text"
            placeholder="Search "
          />
          <button
            onClick={() => setSortBy({ field: "title", asc: true })}
            className="btn btn-warning mx-3  "
          >
            A-Z
          </button>
          <button
            onClick={() => setSortBy({ field: "title", asc: false })}
            className="btn btn-warning mx-3 "
          >
            Z-A
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: false })}
            className="btn btn-warning v"
          >
            Low To High
          </button>
          <button
            onClick={() => setSortBy({ field: "price", asc: true })}
            className="btn btn-warning mx-3 "
          >
            High To Low
          </button>
          {data
            .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
            .sort((a, b) => {
              if (!sortBy) {
                return 0;
              } else if (sortBy.asc == true) {
                return a[sortBy.field] > b[sortBy.field]
                  ? 1
                  : b[sortBy.field] > a[sortBy.field]
                  ? -1
                  : 0;
              } else if (sortBy.asc == false) {
                return a[sortBy.field] < b[sortBy.field]
                  ? 1
                  : b[sortBy.field] < a[sortBy.field]
                  ? -1
                  : 0;
              }
            })
            .map((item, index) => {
              return <Card key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Section1;
