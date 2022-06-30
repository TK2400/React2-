import './modal.css'


export default function Modal(props) {
   

    return (
        <div className="modal">
            <h3> {props.name}</h3>
            <p> {props.location}</p>
            <p> Street name and number: <br>
            </br>{props.street}</p>
            <div> <img src={props.image} alt="#" /> </div>
            <button onClick ={props.click}> X </button>
                      
        </div>)
}

