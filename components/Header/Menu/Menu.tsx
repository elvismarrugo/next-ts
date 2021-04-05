import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className='menu'>
      <Container>
        <Grid>
          <Grid.Column className='menu-left' width={6}>
            <MenuIzqu/>
          </Grid.Column>
          <Grid.Column className='menu-right' width={6}>
          <MenuDere/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}


function MenuIzqu() {
  return (
    <Menu>
      <Link href="/intereses">
        <Menu.Item as="a" >Intereses</Menu.Item>
      </Link>
    </Menu>
  )
}

function MenuDere() {
  return (
    <Menu>
      <Menu.Item>
        Intereses
      </Menu.Item>
    </Menu>
  )
}