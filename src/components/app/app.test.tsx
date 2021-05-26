import { MockedProvider } from '@apollo/react-testing';
import { render, screen, fireEvent } from '@testing-library/react';
import { CREATE_BOOKING_MUTATION } from '../../graphql/mutations'
import App from './'

const formMockdata ={
    fullname: 'John Dave',
    mobile: '+44 9986274880',
    arrivalDate: '11/11/21',
    flight: '6E134',
    airport: 'Heathrow',
    terminal: '1'
}

const mocks = [
    {
      request: {
        query: CREATE_BOOKING_MUTATION,
        variables: formMockdata,
      },
      result: {
        data: {
          createBooking: {
              id: 'test'
          }
        },
      },
    },
  ];

  test('renders without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );
  });

  test('should show loading state while submitting form', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    fillForm()
    const button = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(button)
    const loading = await screen.findByText(/loading/i)
    expect(loading).toBeInTheDocument()
  });

  test('should show success popup after submit', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );
    fillForm()
    const button = screen.getByRole('button', {name: /submit/i})
    fireEvent.click(button)
    const successMsg = await screen.findByText(/Successfully Submitted/i)
    expect(successMsg).toBeInTheDocument()

  });

  const fillForm = () => {
    fireEvent.change(screen.getByLabelText(/fullname/i), { target: { value: formMockdata.fullname } })
    fireEvent.change(screen.getByLabelText(/mobile/i), { target: { value: formMockdata.mobile } })
    fireEvent.change(screen.getByLabelText(/arrival date/i), { target: { value: formMockdata.arrivalDate } })
    fireEvent.change(screen.getByLabelText(/flight/i), { target: { value: formMockdata.flight } })
    fireEvent.change(screen.getByLabelText(/airport/i), { target: { value: formMockdata.airport } })
    fireEvent.change(screen.getByLabelText(/terminal/i), { target: { value: formMockdata.terminal } })    
  }
