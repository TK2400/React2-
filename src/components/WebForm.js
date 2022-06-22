import { useState } from 'react';



/*function handleFormSubmit(e) {
    e.preventDefault();
    if (button.textContent === 'Edit Profile') {
      button.textContent = 'Save Profile';
      hide(firstNameText);
      hide(lastNameText);
      show(firstNameInput);
      show(lastNameInput);
    } else {
      button.textContent = 'Edit Profile';
      hide(firstNameInput);
      hide(lastNameInput);
      show(firstNameText);
      show(lastNameText);
    }
  }
  
  function handleFirstNameChange() {
    firstNameText.textContent = firstNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function handleLastNameChange() {
    lastNameText.textContent = lastNameInput.value;
    helloText.textContent = (
      'Hello ' +
      firstNameInput.value + ' ' +
      lastNameInput.value + '!'
    );
  }
  
  function hide(el) {
    el.style.display = 'none';
  }
  
  function show(el) {
    el.style.display = '';
  }
  
  let form = document.getElementById('form');
  let profile = document.getElementById('profile');
  let editButton = document.getElementById('editButton');
  let firstNameInput = document.getElementById('firstNameInput');
  let firstNameText = document.getElementById('firstNameText');
  let lastNameInput = document.getElementById('lastNameInput');
  let helloText = document.getElementById('helloText');
  form.onsubmit = handleFormSubmit;
  firstNameInput.oninput = handleFirstNameChange;
  lastNameInput.oninput = handleLastNameChange;
*/  

  export default function WebForm() {
    const [name, setName] = useState('Jane')
    const [lname, setLname] = useState('Jacob')
    const [isEdit, setIsEdit] = useState(false)

    
    return (
      <form>
        <label>
          First name:
          {!isEdit? <b>{name}</b>
          :<input value = {name} onChange ={(e)=>setName(e.target.value)}/>
          }
          <br></br>
        </label>
        <label>
          Last name:
          {!isEdit ?<b>{lname}</b>
          :<input value ={lname} onChange ={(e)=>setLname(e.target.value)}/>
          }

        </label>
        <br></br>
        <button type="submit" onClick ={(e)=>{e.preventDefault(); setIsEdit(!isEdit)}}>
          {isEdit ? "Save profile" : "Edit Profile"}
        </button>
        <p><i>Hello, {name} {lname} </i></p>
      </form>
    );
  }
  

/*  export default function EditProfile() {
    const [name, setName] = useState('Jan');
    const [lname, setLname] = useState('Jacob');
    const [isEdit, setIsEdit] =useState(false);
    return (
      <form>
        <label>
          First name:
          {!isEdit? <b>{name}</b>
            : <input value = {name} onChange={(e)=>setName(e.target.value)}/>
       };
         </label>
        <label>
          Last name:
            {!isEdit ? <b>{lname}</b>
              :<input value = {lname} onChange ={(e) => setLname(e.target.value)}/>
        }
        </label>
        <button type="submit" onClick ={(e)=>{e.preventDefault();setIsEdit(!isEdit)}}>
          {isEdit? "Save profile" : "Edit profile"}
        </button>
        <p><i>Hello, {name} {lname}!</i></p>
      </form>
    );
  }
  */