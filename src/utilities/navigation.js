import React from 'react';

export const isNavigationRaady = React.createRef();
export const navigationRef = React.createRef();

export function push(screenName, params) {
  navigationRef.current.navigate(screenName, params);
}
export function goBack() {
  navigationRef.current.goBack();
}
export function restRoot(routeStack, params) {
  navigationRef.current.resetRoot({index: 0, routes: [{name: routeStack}]});
}
