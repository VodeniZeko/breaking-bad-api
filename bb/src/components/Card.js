import React from "react";

const Card = ({ ch }) => {
  const styles = {
    width: "100px",
    height: "100px"
  };
  return (
    <div>
      <img
        key={ch.char_id}
        style={styles}
        src={ch.img}
        alt={`${ch.name} from breaking bad`}
      />
      <h1>name:{ch.name}</h1>
      <h1>birthday:{ch.birthday}</h1>
      <h1>status:{ch.status}</h1>
      <h1>appeared: {ch.appearance.length} times</h1>
    </div>
  );
};

export default Card;
