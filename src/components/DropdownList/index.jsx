import './DropdownList.css';

export default function DropdownList({ itens, ...rest }) {
  return (
    <select className='form-dropdown-list' defaultValue="" {...rest}>
      <option value="" disabled>Selecione uma opção</option>
      {
        itens.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))
      }
    </select >
  );
}