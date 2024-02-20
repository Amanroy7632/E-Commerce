import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Loader from "../loader/Loader";
function Category() {
  const [repoData, setRepoData] = useState([]);
  useEffect(() => {
    //  fetch("https://dummyjson.com/products")
    fetch("https://dummyjson.com/carts")
      .then((res) => (res = res.json()))
      .then((data) => {
        console.log(data);
        setRepoData(data);
      })
      .catch((error) => console.log("Internet Error"));
  }, []);
  console.log(repoData.carts);
  return repoData && repoData.carts ? (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {repoData && repoData.carts
            ? repoData.carts.map((data) => (
                <CategoryCard
                  key={data.id}
                  data={data}
                //   onClick={() => {
                //     console.log("Say Hello ");
                //     navigator(`/category/${data.id}`);
                //   }}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Category;
