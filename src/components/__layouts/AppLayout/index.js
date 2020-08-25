// Core deps
import React from 'react'

function AppLayout(props) {
  return (
    <main className="layout layout--AppLayout">
      {props.children}
    </main>
  );
}

export default AppLayout;
