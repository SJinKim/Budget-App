import { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext'

const AddExpenseModal = ({ show, handleClose, defaultBudgetId }) => {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useBudgets()

  const handleSubmit = (e) => {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      budgetId: budgetIdRef.current.value,
      amount: parseFloat(amountRef.current.value),
    })
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control ref={descriptionRef} type='text' required placeholder='Enter Description' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='amount'>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type='number'
              required
              placeholder='Enter amount'
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='budgetId'>
            <Form.Label>Budget</Form.Label>
            <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
              <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
              {budgets.map((budget) => (
                <option key={budget.id} value={budget.id}>
                  {budget.name}
                </option>
              ))}
            </Form.Select>
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

export default AddExpenseModal
