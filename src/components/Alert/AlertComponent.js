import './AlertComponent.css';
const AlertComponent = (props) => {
  return (
    <div className="alert-background" onClick={props.clickHandle}>
      <div>
        <h1>{props.items}</h1>
        <button onClick={props.clickHandle}>OK</button>
      </div>
    </div>
  );
};
export default AlertComponent;
