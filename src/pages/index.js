import React from 'react';

import Layout from '../components/Layout';
import { Card, Heading } from '../components/ArgonKit';

const IndexPage = () => {
  return (
    <Layout>
      <Card
        p={4}
        py={6}
        backgroundImage="
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(https://source.unsplash.com/random/1024x768)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={0}
        color="white"
        bg="darkgray"
        css={{
          height: '100vh',
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Lung Vang
        </Heading>
      </Card>
      <Card
        p={4}
        py={6}
        backgroundImage="
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(https://source.unsplash.com/random/1024x768)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={0}
        color="white"
        bg="darkgray"
        css={{
          height: '100vh',
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Consulting
        </Heading>
      </Card>
      <Card
        p={4}
        py={6}
        backgroundImage="
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(https://source.unsplash.com/random/1024x768)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={0}
        color="white"
        bg="darkgray"
        css={{
          height: '100vh',
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Studio
        </Heading>
      </Card>
      <Card
        p={4}
        py={6}
        backgroundImage="
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(https://source.unsplash.com/random/1024x768)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        borderRadius={0}
        color="white"
        bg="darkgray"
        css={{
          height: '100vh',
        }}
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Craftsman
        </Heading>
      </Card>
    </Layout>
  );
};

export default IndexPage;
