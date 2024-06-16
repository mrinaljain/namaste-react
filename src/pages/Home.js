import React, { useState } from "react";
import { Link } from "react-router-dom";
import pageData from "../utils/pageData";

function Home() {
  const [inputText, setInputText] = useState("");
  const [routeData, setRouteData] = useState(pageData);
  let filteredPageData = routeData;
  function handleChange(e) {
    setInputText(e.target.value);
  }
  if (inputText.length > 0) {
    filteredPageData = routeData.filter((item) => {
      return item.pageName.toLowerCase().includes(inputText.toLowerCase());
    });
    console.log(filteredPageData);
  } else {
    filteredPageData = routeData;
  }

  return (
    <div className="h-[100vh] p-5">
      <input
        type="text"
        className="border-red-400 border-2 rounded flex justify-around w-80 py-2 px-2 mx-auto"
        value={inputText}
        placeholder="Search"
        onChange={handleChange}
      />
      <div className="flex h-full flex-wrap gap-8 content-center justify-center">
        {filteredPageData.map((route) => (
          <Link
            className="px-2 py-1 bg-purple-300 rounded-md cursor-pointer"
            to={route.to}
          >
            {route.pageName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
