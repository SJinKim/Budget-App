import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BudgetsProvider } from './context/BudgetContext'

ReactDom.render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
