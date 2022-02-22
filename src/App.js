import React from 'react'
import { Button, Row, Col, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import BudgetCard from './components/BudgetCard'

const App = () => {
  return (
    <Container className='my-4'>
      <Stack direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expanse</Button>
      </Stack>
      <Container>
        <Row gap='4' className='mb-4'>
          <Col md>
            <BudgetCard name='Entertainment' amount={200} max={1000}></BudgetCard>
          </Col>
          <Col md>
            <BudgetCard name='Entertainment' amount={200} max={1000}></BudgetCard>
          </Col>
        </Row>
        <Row gap='4' className='mb-4'>
          <Col md>
            <BudgetCard name='Entertainment' amount={200} max={1000}></BudgetCard>
          </Col>
          <Col md>
            <BudgetCard name='Entertainment' amount={200} max={1000}></BudgetCard>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
