import React from 'react'
import './login.css'
import { Container, Paper, Typography } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    
    <Container > 

    <Row>
        <Col md={6} className='mx-auto mt-5 '>
<Paper  className='p-4'>
<Typography className="text-center text-primary mb-3"
                variant="h5">
    Login Here
</Typography>

<Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Typography  style={{ color: "GrayText" }} variant="subtitle2">Don't have an Account?  <span className='text-primary'>Register here</span></Typography>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
</Paper>

        </Col>
    </Row>
    </Container>

  )
}

export default Login