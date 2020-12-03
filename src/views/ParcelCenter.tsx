import React from 'react';

import { Layout, StyledText, TabBarView } from 'components';

const ParcelCenter = () => {
  return (
    <Layout headingBig="Parcel centers">
      <TabBarView
        labels={['Tab 1', 'Tab 2222222']}
        icons={['flash', 'camera']}
        contents={[
          <StyledText variant="bodyPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro iusto,
            consequuntur itaque perspiciatis placeat sint, nostrum officiis adipisci similique a?
            Nesciunt magni pariatur vel mollitia nulla nam consectetur culpa. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Architecto, saepe incidunt. Iusto eos quia impedit
            fugiat temporibus et, nam, dicta labore veritatis, rem recusandae doloremque obcaecati
            animi! Expedita, suscipit iusto? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tempore libero, soluta praesentium perspiciatis accusamus veritatis alias
            voluptatibus consequuntur eveniet est odit quia ea dolor cumque doloribus aspernatur!
            Ducimus, dolore veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Corporis tempora optio aperiam sint a sequi consequuntur assumenda! Sapiente possimus
            expedita odio, laboriosam maxime eaque id consequatur unde iste dolores veniam!
          </StyledText>,
          <StyledText variant="bodyPrimary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi accusamus corporis ea
            cum doloremque, magnam cupiditate fuga odit expedita tempore laudantium. Praesentium
            deleniti eum quibusdam assumenda consequuntur soluta architecto fugiat. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Corporis magni quam eaque amet fuga, fugiat
            deserunt culpa inventore totam cumque nisi incidunt modi dolore eveniet qui aspernatur
            est perspiciatis quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque aliquid incidunt, exercitationem dolore magnam atque numquam expedita quia
            aperiam, dignissimos optio commodi laborum. Eos, iste voluptatem vitae itaque
            reprehenderit voluptatibus? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Delectus amet officiis, voluptates, ipsum veritatis eum sapiente possimus maiores
            facilis, minima optio perspiciatis libero ratione temporibus! Alias eaque optio
            consequatur. Iure!
          </StyledText>,
        ]}
      />
    </Layout>
  );
};

export default ParcelCenter;
