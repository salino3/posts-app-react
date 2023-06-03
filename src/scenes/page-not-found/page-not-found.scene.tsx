import React from 'react';
import { Footer, Header } from '@/common';
import { PageNotFound } from '@/pods';
import * as classes from "./page-not-found.styles";


export const PageNotFoundScene: React.FC = () => {
  return (
    <div className={classes.container}>
       <Header />
       <PageNotFound />
       <Footer />
    </div>
  )
}
