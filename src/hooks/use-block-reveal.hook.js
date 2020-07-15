import React from "react";

export const useBlockReveal = (WrappedComponent) => {
  console.log(WrappedComponent)

  return (
    <div className="c-block-reveal">
      <div className="c-block-reveal__block">
        <WrappedComponent />
        {/* <WrappedComponent className={wrappedClass} /> */}
      </div>
    </div>
  )
}