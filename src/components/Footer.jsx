import { AiOutlineCopyright } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <div className="author">
        <span>Devolopped By <a href="https://github.com/MouadXD" target="_blank">Mouad Boufas</a></span>
      </div>
      <div className="logo">
        <h1>GlassBuy</h1>
        <span><AiOutlineCopyright /> 2023</span>
      </div>
      <div className="designFrom">
        <span>Original Design <a href="https://salinaka-ecommerce.web.app/" target="_blank">Here</a></span>
      </div>
    </footer>
  )
}

export default Footer