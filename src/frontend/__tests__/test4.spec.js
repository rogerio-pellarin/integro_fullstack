import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Palindrome from '../test4'

test('should render palindrome component', () => {
  render(<Palindrome />)
  const textInput = screen.getByPlaceholderText('Type something...')
  const validateBtn = screen.getByRole('button', { name: 'Validate' })
  const cleanBtn = screen.getByRole('button', { name: 'Clean' })
  expect(textInput).toBeInTheDocument()
  expect(validateBtn).toBeInTheDocument()
  expect(cleanBtn).toBeInTheDocument()
})
