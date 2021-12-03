

const Header = ({title}) => {
    return (
        <div>
            <header>
                <h1 style ={headerStyle}>{title}</h1>
            </header>
            
        </div>
    )
}

Header.defaultProps = {
title :"Task Manager",
};
const headerStyle = {

  color :"blue",
  backgroundColor :"yellow",  
}
/*
Header.propTypes = {
    title: PropTypes.string.isRequired,
     
};*/
export default Header
