import React from 'react';

import Layout from '../components/Layout';
import { Card, Heading, Box } from '../components/ArgonKit';

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
      >
        <Heading textAlign="center" fontSize={[5, 6]}>
          Welcome to Lung Vang
        </Heading>
      </Card>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra
        varius odio sit amet faucibus. Morbi in fringilla metus, eget lobortis
        felis. Nullam sit amet tempor neque, non euismod odio. Nulla nec massa
        porta, vestibulum massa eleifend, consectetur sem. Nullam condimentum
        hendrerit metus. Aenean tincidunt, eros ac maximus convallis, eros risus
        accumsan ligula, sit amet interdum eros magna quis ante. Aliquam a
        maximus justo. Sed efficitur tristique quam quis molestie. Nulla in
        semper magna. Donec malesuada purus at purus auctor pharetra. Quisque
        convallis, tortor eget tempus dignissim, quam nibh viverra libero, ac
        pulvinar elit diam id orci. Phasellus a dui gravida eros facilisis
        convallis ut in elit. Aliquam gravida ut lorem nec porta. Curabitur
        congue neque sit amet risus mollis ullamcorper a id purus. Aliquam
        consectetur pulvinar justo at venenatis. Curabitur nunc quam, pharetra
        ac ipsum a, placerat facilisis nunc. Aliquam vulputate erat erat, eget
        facilisis ante hendrerit vel. Sed tincidunt, massa a vehicula blandit,
        risus lacus molestie quam, vel laoreet nulla eros a dui. Sed feugiat
        lorem scelerisque consectetur ullamcorper. Sed mollis faucibus arcu ac
        blandit. Suspendisse a consequat est, ac lacinia felis. Aenean hendrerit
        consequat ligula. Nullam elementum lobortis tellus. Nam vehicula
        vestibulum nisi, non consequat lectus pretium vitae. Nulla facilisi.
        Etiam porta orci suscipit ex tempus, ac gravida urna ultricies. Sed
        eleifend odio non lobortis maximus. Proin ultricies tincidunt massa.
        Nullam quis nibh lorem. Vivamus in ex vitae nulla tincidunt placerat
        eget ac justo. Fusce vitae ex a dui sagittis luctus sed id dolor. Proin
        euismod ligula eu velit malesuada ullamcorper. Nullam tempor lobortis
        maximus. Integer aliquam purus nibh, vel sodales turpis maximus vitae.
        Cras imperdiet sollicitudin dolor, at suscipit nisl interdum dapibus.
        Nulla vehicula, eros a vestibulum eleifend, enim ex ornare nunc, non
        convallis arcu eros at magna. Vivamus vel eleifend risus. Aliquam massa
        lacus, scelerisque accumsan dictum eu, sagittis vitae augue. Aenean
        vulputate quam eget lacinia ultrices. Nullam nunc nibh, scelerisque
        vitae hendrerit sed, tempus a tellus. Suspendisse convallis ut magna non
        fringilla. Curabitur sed porttitor purus, in suscipit turpis. Praesent
        lectus libero, condimentum non tortor et, sodales vestibulum nulla.
        Maecenas rutrum maximus elit, cursus placerat nulla pulvinar tempor. Sed
        neque tellus, mollis commodo erat ac, vulputate cursus diam. Integer
        tincidunt nulla ut elit bibendum accumsan. Maecenas quam felis, accumsan
        quis ligula non, mollis ullamcorper elit. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. In hac
        habitasse platea dictumst. Quisque molestie nunc id dolor facilisis, in
        egestas urna luctus. Ut in blandit eros. Proin nec posuere arcu, ut
        consectetur turpis. Proin auctor, lacus nec consectetur consequat, ipsum
        est elementum nisi, nec tristique ipsum elit sed metus.
      </Box>
    </Layout>
  );
};

export default IndexPage;
