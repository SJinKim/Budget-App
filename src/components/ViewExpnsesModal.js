import { Modal, Button, Stack } from 'react-bootstrap'
import { UNCATEGORIZED_BUDGET_ID } from '../context/BudgetContext'
import { useBudgets } from '../context/BudgetContext'
import { currencyFormatter } from '../utils'

const ViewExpnsesModal = ({ budgetId, handleClose }) => {
  const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()

  const expenses = getBudgetExpenses(budgetId)

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: 'Uncategorized', id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find((b) => b.id === budgetId)

  return (
    <Modal show={budgetId} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction='horizontal' gap='3'>
            <div>Expenses - {budget?.name}</div>
            {budgetId !== UNCATEGORIZED_BUDGET_ID && (
              <Button
                variant='outline-danger'
                onClick={() => {
                  deleteBudget(budget)
                  handleClose()
                }}
              >
                Delete
              </Button>
            )}
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack direction='vertical' gap='2'>
          {expenses.map((expense) => (
            <Stack direction='horizontal' gap='2' key={expense.id}>
              <div className='me-auto fs-4'>{expense.description}</div>
              <div className='fs-5 px-1'>{currencyFormatter.format(expense.amount)}</div>
              <Button size='sm' variant='outline-danger' onClick={() => deleteExpense(expense)}>
                &times;
              </Button>
            </Stack>
          ))}
        </Stack>
      </Modal.Body>
    </Modal>
  )
}

export default ViewExpnsesModal
