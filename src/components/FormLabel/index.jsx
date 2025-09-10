import './FormLabel.css';

export default function FormLabel({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className='form-label'>{children}</label>
  )
}