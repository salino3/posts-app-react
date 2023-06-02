import React from 'react';
import { Footer, Header } from '@/common';
import { InfoComponent } from '@/pods';
import * as classes from "./info.styles";

export const InfoScene: React.FC = () => {
  
  return (
    <div className={classes.root}>
      <Header />
      <InfoComponent />
      <Footer />
    </div>
  );
}
