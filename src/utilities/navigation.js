import React from 'react';

export const navigationRef = React.createRef();
export const isRef = React.createRef();

export function push(screenName, params) {
  navigationRef.current.navigate(screenName, params);
}
export function goBack() {
  navigationRef.current.goBack();
}
