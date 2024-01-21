import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        name: "John",
        role: "Manager",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        name: "Mikasa",
        role: "Intern",
        img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
      },
      {
        name: "Anna",
        role: "secretary",
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
      },
      {
        name: "Mickael",
        role: "DevOps",
        img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
      },
      {
        name: "Smith",
        role: "Developer",
        img: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?"
      },
      {
        name: "Emily",
        role: "Developer",
        img: "https://images.pexels.com/photos/2095544/pexels-photo-2095544.jpeg?"
      }
    ]
  );
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ?
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value); }} 
          />
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
              console.log(uuidv4());
              return (<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />);
            })}
          </div>
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
