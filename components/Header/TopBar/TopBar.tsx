import { Container, Grid, Image, Input } from 'semantic-ui-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <h1>Matric</h1>
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
          <h1>Search</h1>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
