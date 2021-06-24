import React from 'react';
import { NavBar } from '../components/NavBar'

export function LayoutNavOnly({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
