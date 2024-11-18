import "./styles.css";

//function Button({ buttonName = "Get" }) {
//console.log(props); см - как объект показывает при вызове
//console.log(props.buttonName) ;-  см как свайства
//const isGetButton = false;
// const{buttonName}= props;

function Button({ name, type = "button" }) {
  return (
    <button className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
