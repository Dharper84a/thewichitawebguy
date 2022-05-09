import React from 'react';
import Image from 'next/image';

import styles from '../../styles/modules/components/SiteHeader.module.scss';

import abstractHeader from '../../public/purple-pink-blue-abstract-header.jpg';

const SiteHeader = (props) => {

  return(
    <header className={styles.container}>
     
      <div className={styles.centerContainer}>
        <h1>The Wichita Web Guy</h1>
      </div>
      
    </header>
  )
}

export default SiteHeader;