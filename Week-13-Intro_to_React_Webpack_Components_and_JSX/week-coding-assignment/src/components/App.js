import React from 'react';
import Signup from './login'
import {Container} from 'react-bootstrap'

function App() { 
  return (
  <Container className='d-flex align-items-top justify-content-center mt-5' style={{ minHeight: '100vh'}}>
    <div className='w-100'style={{maxWidth: '400px'}}>
  <Signup />
    </div>
  </Container>
  )
}

export default App;



