import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
 const [nombre, setNombre] = useState("");
 const [apellido, setApellido] = useState("");
 const [dni, setDni] = useState("");

 const handleSubmit=(e)=>{
  e.preventDefault();
  if(nombre===""||apellido===""||dni==="")
  alert("faltan completar algunos datos")
  else{
    alert("los datos fueron cargados")
  }
 }

    return (
        <Form  className='mt-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="inputNombre"onChange={(e)=>setNombre(e.target.value)}
          value={nombre}>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputApellido"onChange={(e)=>setApellido(e.target.value)}
          value={apellido}>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="inputDni"onChange={(e)=>setDni(e.target.value)}
          value={dni}>
          <Form.Label>Dni</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su D.N.I" />
        </Form.Group>
        <Button  variant="warning" type="submit">
          Enviar
        </Button>
      </Form>
    );
};

export default Formulario;