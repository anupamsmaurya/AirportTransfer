import { FormValuesType, ObjectMap } from "./typeDefinitions"

/**
 * Matches     +447222555555   | +44 7222 555 555 | (0722) 5555555 #2222
 * Non-Matches (+447222)555555 | +44(7222)555555  | (0722) 5555555 #22
 */
const regexUKPhone = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
const regexUKDate = /^(([0-9])|([0-2][0-9])|(3[0-1]))\/(([1-9])|(0[1-9])|(1[0-2]))\/(([0-9][0-9])|([1-2][0,9][0-9][0-9]))$/
const regexFlight = /^[A-Z0-9]{3,}$/i //https://gist.github.com/yectep/4372d1166a192d5e9754

export default function validateForm(
  values: FormValuesType, 
  field: string = 'all', 
  errors: ObjectMap = {}
): ObjectMap {

  if (!values.fullname && (field === 'all' || field === 'fullname')) {
    errors.fullname = 'Fullname is required'
  } else {
    delete errors.fullname
  }

  if(field === 'all' || field === 'mobile') {
    if (!values.mobile) {
      errors.mobile = 'Mobile number is required'
    } else if (!regexUKPhone.test(values.mobile)) {
      errors.mobile = 'Mobile number is invalid'
    } else {
      delete errors.mobile
    }  
  } 

  if(field === 'all' || field === 'arrivalDate') {
    if (!values.arrivalDate) {
      errors.arrivalDate = 'Arrival date is required'
    } else if (!regexUKDate.test(values.arrivalDate)) {
      errors.arrivalDate = 'Invalid date. dd/mm/yy or dd/mm/yyyy'
    } else {
      delete errors.arrivalDate
    }
  }

  if(field === 'all' || field === 'airport') {
    if (!values.airport) {
      errors.airport = 'Airport selection is required'
      if (values.airport === 'Heathrow' && !values.terminal) {
        errors.terminal = 'Terminal selection is required'
      }
    } else {
      delete errors.airport
    }  
  }

  if(field === 'all' || field === 'flight') {
    if (!values.flight.trim()) {
      errors.flight = 'Flight number required'
    } else if (!regexFlight.test(values.flight)) {
      errors.flight = 'Incorrect flight number'
    } else {
      delete errors.flight
    }  
  }
  console.log(errors)
  return errors
}

const validateRequiredField = (value: string): boolean => {
  return !value.trim()
}

type validateBlurType = (name: string, value: string) => boolean
export const validateOnBlur: validateBlurType = (name: string, value: string) => {
  const result = true
  switch (name) {
    case 'mobile':
      if (!value) {
        //errors.mobile = 'Mobile number required'
      } else if (!regexUKPhone.test(value)) {
        //errors.mobile = 'Mobile number is invalid'
      }

      break;

    default:
      break;
  }
  return result
}