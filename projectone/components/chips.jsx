import React from "react";

const Hard = () => {
  const [addfoll, setAddfoll] = React.useState(false);
  return (
    <div className="taste">
      <h4>CHIPS</h4>

      {!addfoll ? (
        <div className="red">
          <button onClick={() => setAddfoll(true)}>Follow</button>
        </div>
      ) : (
        <div className="green">
          <button onClick={() => setAddfoll(false)}>Unfollow</button>
        </div>
      )}
    </div>
  );
};

export default Hard;
