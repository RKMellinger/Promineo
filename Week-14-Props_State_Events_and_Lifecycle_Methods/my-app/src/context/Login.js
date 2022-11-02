// Imports required files for use in the functions below.
import React, { useRef } from 'react'
import {Form, Button, Card} from 'react-bootstrap'

{/* Exports the login requirements including layout to the index.js page to be rendered on the user 
 login page via the function */}
 
export default function Login() {
  let userNameRef = useRef()
  let passwordRef = useRef()
    
  return (
    <> 
    {/* Creates the greeting login card message and boxes for your information. */}
<Card className='border border-secondary rounded' id='LoginCard' >
    <Card.Body> 
        <h3 className='text-center mb-4'>Greetings Program.</h3>
        <h5 className='text-center mb-4'>Please login to continue.</h5>
        <Form>
        <Form.Group id='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='name' ref={userNameRef} required/>
        </Form.Group>
        <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required/>
        </Form.Group>
        <Button className='w-100' type='submit'>Submit</Button>
        </Form>
    </Card.Body>
</Card>
</>
  )
}
