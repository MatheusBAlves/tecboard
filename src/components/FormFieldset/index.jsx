import './FormFieldset.css'

export default function FormFieldset({ children }) {
  return (
    <fieldset className='form-fieldset'>
      {children}
    </fieldset>
  )
}