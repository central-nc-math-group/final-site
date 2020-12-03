import React from 'react';

export default function IfDisplay(child, condition) {
  if (condition) return child;
  return <span />;
}
