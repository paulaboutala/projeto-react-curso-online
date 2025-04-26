// SearchProvider.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchContext from "./SearchContext";

function Provider({ children }) {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
