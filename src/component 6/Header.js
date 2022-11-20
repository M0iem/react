import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1 style={headingStyle} >{title}</h1>
      <button className='btn alert-green'>Add</button>
    </header>
  )
}
Header.defaultProps ={
  title:'hllo from header'
}
Header.propTypes ={
  title:PropTypes.string.isRequired,
}
const headingStyle ={
color:'green' ,backgroundColor:'black'
}
export default Header
