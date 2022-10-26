// Imports required files for use in the functions below.
import React, { useRef } from 'react'
import {Form, Button, Card, NavLink} from 'react-bootstrap'

{/* Exports the login requirements including layout to the index.js page to be rendered on the user 
 login page via the function */}
 
export default function Login() {
  let emailRef = useRef()
  let passwordRef = useRef()
  let confirmPasswordRef = useRef()
    
  return (
    <> 
    {/* Creates the greeting login card message and boxes for your information. */}
<Card className='border border-secondary rounded' id='LoginCard' >
    <Card.Body> 
        <h3 className='text-center mb-4'>Not a member of our Frequent Diner's club?</h3>
        <h5 className='text-center mb-4'>Sign Up for exclusive deals and <br></br>notificatins on our daily specials!</h5>
        <Form>
        <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required/>
        </Form.Group>
        <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required/>
        </Form.Group>
        <Form.Group id='confirm-password'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='confirm-password' ref={confirmPasswordRef} required/>
        </Form.Group>
        <Button className='w-100' type='submit'>Sign Up</Button>
        </Form>
    </Card.Body>
</Card>
{/* Creates the link at the end giving the user a chance to log into their account if one exists.*/}
<div className='w-100 text-center mt2'>
    Already have an account? <NavLink>Log in</NavLink> 
</div>
</>
  )
}
