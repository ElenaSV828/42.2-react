import "./styles.css";

function Input({ name, id, type, placeholder, label }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        classname="input-element"
        name={name}
        type={type}
        placeholder={placeholder}
        label={label}
      />
    </div>
  );
}

export default Input;