import './EventCard.css';

export default function EventCard({ event }) {
  return (
    <div className='card-event'>
      <img src={event.capa} alt={event.titulo} />
      <div className="body">
        <p className="tag">
          {event.tema.nome}
        </p>
        <p>{event.data.toLocaleDateString()}</p>
        <h4 className="titulo">
          {event.titulo}
        </h4>
      </div>
    </div>
  )
}