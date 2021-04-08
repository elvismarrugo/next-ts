import { Container, Menu, Grid, Icon, Label,  Sidebar  } from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {


//   CONFIGURACION	USUARIOS| SEGURIDAD  | CONTACTOS	
// TRANSACCIONES	VENTAS |COMPRAS|PRODUCTOS |SERVICIOS	
// FINANCIEROS	TESORERIA	
// CONTABLES		
// TRIBUTARIOS	SANCIONES | RENTA | INDUSTRIA Y COMERCIO	
// NOMINA		
// REPORTES		
// CORE		
// UTILIDADES		
// SALIR		

  return (
    <div className='menu'>
      <Container>
        <Grid>
          <Grid.Column className='menu-left' width={6}>
          </Grid.Column>
          <Grid.Column className='menu-right' width={6}>
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