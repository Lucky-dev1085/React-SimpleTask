import React, { forwardRef, useImperativeHandle } from 'react';

const Task2 = (props, ref) => {
  useImperativeHandle(ref, () => ({
    pow (a, b) {
      let r = 1;
      for (let i = 0; i < b; i++) {
        r *= a;
      }
      return r;
    }
  }));

  return (
    <>
    </>
  );
};

export default forwardRef(Task2);
