import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default (props) => {
  return (
    <Container>
      <Head>
        {/*
          <Head> is used to add new feature to head tag.
          Here it is used to add the semantic CSS style
          to the header defined here.
          In this way, other web pages who are using this
          header, do not need to include this semantic CSS
          style. Otherwise they will have to.
        */}
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
      </Head>
      <Header />
      {props.children}
    </Container>
  );
};
