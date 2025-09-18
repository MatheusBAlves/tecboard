import './Theme.css';

export default function Theme({ tema }) {
  return (
    <h3 className='theme-title'>{tema.nome}</h3>
  )
}