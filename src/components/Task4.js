import React, { forwardRef, useImperativeHandle } from 'react';

const Task4 = (props, ref) => {
  function power(base, exp) {
    if (exp === 0) return 1;

    let result = base;

    result = result * power(base, exp - 1)

    return result
  }

  useImperativeHandle(ref, () => ({
    pow(a, b) {
      return power(a, b);
    }
  }));

  return (
    <>
    </>
  );
};

export default forwardRef(Task4);
