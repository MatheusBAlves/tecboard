import { useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import EventForm from './components/EventForm'
import Theme from './components/Theme'
import EventCard from './EventCard';

function App() {

  const temas = [
    {
      id: 1,
      name: 'Front-End'
    },
    {
      id: 2,
      name: 'Back-End'
    },
    {
      id: 3,
      name: 'Devops'
    },
    {
      id: 4,
      name: 'Inteligência Artificial'
    },
    {
      id: 5,
      name: 'Data Science'
    },
    {
      id: 6,
      name: 'Cloud'
    }
  ];

  const [events, setEvents] = useState([{
    cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    theme: temas[0],
    date: new Date(),
    title: 'Mulheres no Front',
  }]);

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <main>
      <header>
        <img src={'/logo.png'} alt="" />
      </header>
      <Banner src={'./banner.png'} />
      <EventForm themes={temas} onSubmit={addEvent} />
      <section className="container">
        {temas.map(theme => {
          if (!events.some(event => (event.theme.id === theme.id))) return null;
          return (
            <section key={theme.id}>
              <Theme theme={theme} />
              <div className="events">
                {events.filter(event => event.theme.id === theme.id).map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default App
