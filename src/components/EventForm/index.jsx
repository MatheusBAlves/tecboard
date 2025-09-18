import './EventForm.css';

import FormFieldset from "../FormFieldset";
import FormInput from "../FormInput";
import FormLabel from "../FormLabel";
import FormTitle from "../FormTitle";
import FormButton from '../FormButton';
import DropdownList from '../DropdownList';

export default function EventForm({ themes, onSubmit }) {

  const onEventForm = (formData) => {
    const newEvent = {
      cover: formData.get('EventCover'),
      theme: themes.find(theme => { return theme.id === parseInt(formData.get('EventTheme')) }),
      date: new Date(formData.get('EventDate')),
      title: formData.get('EventName'),
    }
    onSubmit(newEvent);
  }

  return (
    <form className='form-event' action={onEventForm}>
      <FormTitle title={'Preencha para criar um evento:'} />
      <div className="fields">
        <FormFieldset>
          <FormLabel htmlFor="EventName">Qual o nome do evento?</FormLabel>
          <FormInput type="text" name="EventName" id="EventName" placeholder='Summer dev hits' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="EventCover">Qual o endereço da imagem de capa?</FormLabel>
          <FormInput type="text" name="EventCover" id="EventCover" placeholder='https://...' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="EventDate">Data do evento</FormLabel>
          <FormInput type="date" name="EventDate" id="EventDate" placeholder='XX/XX/XXXX' />
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="EventTheme">Tema do evento</FormLabel>
          <DropdownList id="EventTheme" name="EventTheme" itens={themes} />
        </FormFieldset>
      </div>
      <div className="actions">
        <FormButton>Criar evento</FormButton>
      </div>
    </form>
  )
}