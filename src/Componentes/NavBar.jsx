import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import {Button} from '@mui/material'
import {ShoppingCartRounded} from '@mui/icons-material'


function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <>
            <Button variant="text" startIcon={<ShoppingCartRounded />}>
              Add to Cart
            </Button>
            </>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default NavBar
