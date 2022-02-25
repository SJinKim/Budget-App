import { useState } from 'react'
import { Button, Row, Col, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal'
import ViewExpensesModal from './components/ViewExpnsesModal'
import BudgetCard from './components/BudgetCard'
import TotalBudgetCard from './components/TotalBudgetCard'
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './context/BudgetContext'

import './App.css'

const App = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  const openAddExpenseModal = (budgetId) => {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <>
      <Container className='my-4'>
        <Stack direction='horizontal' gap='2' className='mb-4'>
          <h1 className='me-auto'>Budgets</h1>
          <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant='outline-primary' onClick={openAddExpenseModal}>
            Add Expense
          </Button>
        </Stack>
        <Container>
          <Row>
            {budgets.map((budget) => {
              const amount = getBudgetExpenses(budget.id).reduce((total, expense) => {
                total += expense.amount
                return total
              }, 0)
              return (
                <Col lg={4} md={6} className='mb-4' key={budget.id}>
                  <BudgetCard
                    key={budget.id}
                    name={budget.name}
                    amount={amount}
                    max={budget.max}
                    onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                    onViewExpenseClick={() => setViewExpensesModalBudgetId(budget.id)}
                  />
                </Col>
              )
            })}
          </Row>
          <div className='divider' />
          <Row gap='4' className='mb-4'>
            <Col lg={6} className='mb-3'>
              <UncategorizedBudgetCard
                onAddExpenseClick={openAddExpenseModal}
                onViewExpenseClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
              />
            </Col>
            <Col lg={6}>
              <TotalBudgetCard />
            </Col>
          </Row>
        </Container>
      </Container>
      <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false)}
        defaultBudgetId={addExpenseModalBudgetId}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </>
  )
}

export default App
