import React from 'react'
import { render } from '@testing-library/react'

import { Button } from '../components/Button'

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button variant="default">{'button'}</Button>)
  })
})
