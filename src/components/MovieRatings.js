import React from "react";

export default props => {
  return (
    <div>
      {props.rating.Source === "Rotten Tomatoes" && (
        <img
          width={70}
          src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Rotten_Tomatoes_2.svg/revision/latest?cb=20160706062736"
          alt="Poster"
        />
      )}
      {props.rating.Source === "Internet Movie Database" && (
        <img
          width={70}
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          alt="Poster"
        />
      )}
      {props.rating.Source === "Metacritic" && (
        <img
          width={70}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2000px-Metacritic.svg.png"
          alt="Poster"
        />
      )}
      {props.rating.Value}
    </div>
  );
};
