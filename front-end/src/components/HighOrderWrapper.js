import React from "react";

export default function HigherOrderWrapper(Component, injectedProps = {}) {
  return props => <Component {...injectedProps} {...props} />;
}
