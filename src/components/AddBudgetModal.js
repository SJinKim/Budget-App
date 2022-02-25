import { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets } from '../context/BudgetContext'

const AddBudgetModal = ({ show, handleClose }) => {
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudgets } = useBudgets()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.value)
    addBudgets({ name: nameRef.current.value, max: parseFloat(maxRef.current.value) })
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' contralId='formAddBudgetName'>
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type='text' required placeholder='Enter Name' />
          </Form.Group>
          <Form.Group className='mb-3' contralId='formAddBudgetMax'>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              ref={maxRef}
              type='number'
              required
              placeholder='Enter maximum spending'
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button type='submit' variant='primary'>
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}

export default AddBudgetModal
