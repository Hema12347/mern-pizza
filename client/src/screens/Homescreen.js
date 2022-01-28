// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter"


import Pizza from "../components/Pizza";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went wrong' />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-3 m-3" key={pizza._id}>
                <div >
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
