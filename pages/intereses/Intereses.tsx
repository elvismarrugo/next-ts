import { Button, Container, Grid, Image, Input, Label } from 'semantic-ui-react';

export default function Intereses() {

  function sum() {
    
  }
  return (
    <div className="interes">
      <h1>ese es interes</h1>
      <Input labelPosition='right' type='text' placeholder='Amount'>
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>

      <br/>

      <Input labelPosition='right' type='text' placeholder='Amount' name="num1">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>

      <br/>

      <Input labelPosition='right' type='text' placeholder='Amount' name="num2">
        <Label basic>$</Label>
        <input />
        <Label>.00</Label>
      </Input>

      <br/>

      <Button onClick={sum} primary>Primary</Button>
    </div>
  )
}
