import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import './Page.css';

const Page = ({ children, title, columns = 1 }) =>
  (<div>
    <Grid columns={columns} padded>
      <Grid.Column>
        {title && <Header as="h1" color="red" floated="left">{title}  </Header>}
        {children}
      </Grid.Column>
    </Grid>
  </div>);

export default Page;
