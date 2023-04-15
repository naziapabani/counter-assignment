// import necessary react testing library helpers here
// import the Counter component here
import React from React; 
import render from '@testing-library/react';
import Counter from './Counter';

beforeEach(() => {
  // Render the Counter component here
  let component;
  component = render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(component.getByText('Counter Component')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  expect(component.getByText('Count: 0')).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(component.getByText('+'));
  expect(component.getByText('Count: 1')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(component.getByText('-'));
  expect(component.getByText('Count: -1')).toBeInTheDocument();
});
