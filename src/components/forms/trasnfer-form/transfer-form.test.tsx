import { render, screen, fireEvent } from '@testing-library/react';
import TransferForm from './'

const formMockdata ={
    fullname: 'John Dave',
    mobile: '+44 9986274880',
    arrivalDate: '11/11/21',
    flight: '6E134',
    airport: 'Heathrow',
    terminal: '1'
}

const submitForm = jest.fn

test('should not have terminal field by default', () => {
    render(<TransferForm submitForm={submitForm} />);
    expect(screen.queryByLabelText(/terminal/i)).not.toBeInTheDocument()
});

test('should show terminal field on selecting airport=Heathrow', () => {
    render(<TransferForm submitForm={submitForm} />);
    fireEvent.change(screen.getByLabelText(/airport/i), { target: { value: 'Heathrow' } })
    expect(screen.queryByLabelText(/terminal/i)).toBeInTheDocument()
});

test('should show error for missing required fields', () => {
    render(<TransferForm submitForm={submitForm} />);
    const submitButton = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(submitButton)

    const errorFields = screen.getAllByText(/is required/i)
    expect(errorFields.length).toBeGreaterThan(0)
});

test('should show error for invalid mobile number', () => {
    render(<TransferForm submitForm={submitForm} />);
    fireEvent.change(screen.getByLabelText(/mobile/i), { target: { value: '123' } })
    const submitButton = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(submitButton)

    screen.getByText(/Mobile number is invalid/i)
});

test('should show error for invalid date', () => {
    render(<TransferForm submitForm={submitForm} />);
    fireEvent.change(screen.getByLabelText(/arrival date/i), { target: { value: '21/21/21' } })
    const submitButton = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(submitButton)

    screen.getByText(/Invalid date/i)
});

test('should show error for invalid flight number', () => {
    render(<TransferForm submitForm={submitForm} />);
    fireEvent.change(screen.getByLabelText(/flight/i), { target: { value: '&^*&' } })
    const submitButton = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(submitButton)

    screen.getByText(/Incorrect flight number/i)
});
