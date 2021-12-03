import Button from "./Button";

const Header = ({title}) => {
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
           <Button color="green" text="WasssaUPP" />
            </header>
            
        </div>
    )
}

Header.defaultProps = {
title :"Task Manager",
};
/*
const headerStyle = {

  color :"blue",
  backgroundColor :"yellow",  
}*/
/*
Header.propTypes = {
    title: PropTypes.string.isRequired,
     
};*/
export default Header
