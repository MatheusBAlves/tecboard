import './Theme.css';

export default function Theme({ theme }) {
  return (
    <h3 className='theme-title'>{theme.name}</h3>
  )
}