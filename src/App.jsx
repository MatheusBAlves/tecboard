import './App.css'
import Banner from './components/Banner'
import EventForm from './components/EventForm'
import Theme from './components/Theme'
import EventCard from './EventCard';

function App() {

  const temas = [
    {
      id: 1,
      nome: 'Front-End'
    },
    {
      id: 2,
      nome: 'Back-End'
    },
    {
      id: 3,
      nome: 'Devops'
    },
    {
      id: 4,
      nome: 'Inteligência Artificial'
    },
    {
      id: 5,
      nome: 'Data Science'
    },
    {
      id: 6,
      nome: 'Cloud'
    }
  ];

  const events = [
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front',
    }
  ]

  return (
    <main>
      <header>
        <img src={'/logo.png'} alt="" />
      </header>
      <Banner src={'./banner.png'} />
      <EventForm />
      {temas.map(tema => (
        <section key={tema.id}>
          <Theme tema={tema} />
          <EventCard event={events[0]} />
        </section>
      ))}
    </main>
  )
}

export default App
