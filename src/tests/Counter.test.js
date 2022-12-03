// import necessary react testing library helpers here
// import the Counter component here
import Counter from '../components/Counter';
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
 
 
beforeEach(() => {
  // Render the Counter component here
  render(<Counter />)
})
 
test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});
 
test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countNumber = screen.getByText("0");
  expect(countNumber).toBeInTheDocument();
});
 
test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementBtn = screen.getByRole("button", { name: "+" });
  userEvent.click(incrementBtn);
  const countNumber = screen.getByText("1");
  expect(countNumber).toBeInTheDocument();
});
 
test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementBtn = screen.getByRole("button", { name: "-" });
  userEvent.click(decrementBtn);
  const countNumber = screen.getByText("-1");
  expect(countNumber).toBeInTheDocument();
});
 

