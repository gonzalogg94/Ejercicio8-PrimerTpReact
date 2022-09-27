import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    return (
        <Form className='mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Dni</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su D.N.I" />
        </Form.Group>
        <Button  variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    );
};

export default Formulario;