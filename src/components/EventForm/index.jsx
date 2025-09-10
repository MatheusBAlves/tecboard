import './EventForm.css';

import FormFieldset from "../FormFieldset";
import FormInput from "../FormInput";
import FormLabel from "../FormLabel";
import FormTitle from "../FormTitle";
import FormButton from '../FormButton';
import DropdownList from '../DropdownList';

export default function EventForm() {
  return (
    <form className='form-event'>
      <FormTitle title={'Preencha para criar um evento:'} />
      <div className="fields">
        <FormFieldset>
          <FormLabel htmlFor="nome">Qual o nome do evento?</FormLabel>
          <FormInput type="text" name="nome" id="nome" placeholder='Summer dev hits' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="EventDate">Data do evento</FormLabel>
          <FormInput type="date" name="EventDate" id="EventDate" placeholder='XX/XX/XXXX' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel></FormLabel>
          <DropdownList>

          </DropdownList>
        </FormFieldset>
      </div>
      <div className="actions">
        <FormButton>Criar evento</FormButton>
      </div>
    </form>
  )
}