// CONFIGURACION	USUARIOS| SEGURIDAD  | CONTACTOS	
// TRANSACCIONES	VENTAS |COMPRAS|PRODUCTOS |SERVICIOS	
// FINANCIEROS	TESORERIA	
// CONTABLES		
// TRIBUTARIOS	SANCIONES | RENTA | INDUSTRIA Y COMERCIO	
// NOMINA		
// REPORTES		
// CORE		
// UTILIDADES		
// SALIR		
import {useState} from 'react';
import { Grid, Menu, Sidebar, } from 'semantic-ui-react'

export default function  SidebarWeb () {
  
  return (
    <div className="ui vertical menu">
    <div className="item">
      <div className="header">CONFIGURACION</div>
      <div className="menu">
        <a className="item">USUARIOS</a>
        <a className="item active">Consumidor</a>
      </div>
    </div>
    <div className="item">
      <div className="header">TRANSACCIONES</div>
      <div className="menu">
        <a className="item">VENTAS</a>
        <a className="item">COMPRAS</a>
        <a className="item">PRODUCTOS</a>
        <a className="item">SERVICIOS</a>
      </div>
    </div>
    <div className="item">
      <div className="header">FINANCIEROS</div>
      <div className="menu">
        <a className="item">TESORERIA</a>
        <a className="item">CONCILIACION</a>
      </div>
    </div>
    <div className="item">
      <div className="header">TRIBUTARIOS</div>
      <div className="menu">
        <a className="item">SANCIONES</a>
        <a className="item">RENTA</a>
      </div>
    </div>
  </div> 
    
  )
}

