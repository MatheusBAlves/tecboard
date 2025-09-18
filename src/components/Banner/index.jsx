import './Banner.css';

export default function Banner({ src }) {
  return (
    <section className='banner'>
      <img src={src} alt="" />
    </section>
  )
}