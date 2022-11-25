import React from 'react';

const Random = ({ min, max }) => {
  let result = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <p>
        value between {min} and {max}: {result}
      </p>
    </div>
  );
};

export default Random;
