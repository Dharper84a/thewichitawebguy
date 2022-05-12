import React from 'react';

import '../styles/global.css';

const Website = (props) => {

  return (
    <main>
      {props.children}
    </main>
  )
}

export default Website;