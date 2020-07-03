import React from "react";

export default ({ name }) => {
  const [foo] = React.useState(10);
  return (
    <h1>
      Adopt {name} today! Because she is soooo cute! {foo}
    </h1>
  );
};
