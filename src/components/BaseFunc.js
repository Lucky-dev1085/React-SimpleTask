import React, { forwardRef, useImperativeHandle } from 'react';

const BaseFunc = (props, ref) => {
  useImperativeHandle(ref, () => ({
    Mult27 (a) {
      return a * 27;
    },
    SHL (a, b) {
      return a << b;
    },
    ADD (a, b) {
      return a + b;
    },
    SUB (a, b) {
      return a - b;
    }
  }));

  return (
    <>
    </>
  );
};

export default forwardRef(BaseFunc);
