const Notification = props => {
  //  Write your code here.
  const {color,text,image} = props;

  return(<div>
  <h1>Notifications</h1>
  <img src={image}/>>
<p className={color}>{text}</p>
  </div>)
}

const element = (
  //  Write your code here.
  <Notification color="blue" text="Informational message" image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
  <Notification color="green" text="success message" image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/> 
  <Notification color="orange" text="warning message" image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/> 
  <Notification color="red" text="error message" image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>


)

ReactDOM.render(element, document.getElementById('root'))
