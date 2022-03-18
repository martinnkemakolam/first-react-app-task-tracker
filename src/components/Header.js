import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return ( <
        header className = "header" >
        <h1> { title } </h1>    
        <Button text = {showAdd ? 'Close' : 'Add'} color = {showAdd ? 'red' : 'green'} onClick = { onAdd }/> 
        </header>
    )
}

Header.defaultProps = {
    title: "TASK TRACKER",
}

Header.propTypes = {
        title: PropTypes.string.isRequired
    }
    // using css in react js
    //const headingStyle = {
    //    color: "blue",
    //    backgroundColor: "black"
    //}
export default Header