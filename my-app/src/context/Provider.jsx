import React from "react";
import propTypes from "prop-types";
import SearchContext from "./SearchContext";

function Provider({children}) {
    return(
        <SearchContext.Provider>
            {children}
        </SearchContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;