import React from "react";
import { SearchContainerDiv, SearchedTextDiv } from "./SearchStyle";

const Search = ({ data, handleData, from }) => {
  return (
    <SearchContainerDiv $isData={data.length > 0} $from={from}>
      {data.map((item, idx) => (
        <SearchedTextDiv
          key={`${item}_${idx}`}
          onClick={() => handleData(from, item)}
        >
          {item}
        </SearchedTextDiv>
      ))}
    </SearchContainerDiv>
  );
};

export default Search;
