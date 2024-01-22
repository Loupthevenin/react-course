import '../../index.css';
import Employee from '../Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../AddEmployee';
import EditEmployee from '../EditEmployee';
import Header from '../Header';

function Employees() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: "John",
        role: "Manager",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        id: 2,
        name: "Mikasa",
        role: "Intern",
        img: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg"
      },
      {
        id: 3,
        name: "Anna",
        role: "secretary",
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
      },
      {
        id: 4,
        name: "Mickael",
        role: "DevOps",
        img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
      },
      {
        id: 5,
        name: "Smith",
        role: "Developer",
        img: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?"
      },
      {
        id: 6,
        name: "Emily",
        role: "Developer",
        img: "https://images.pexels.com/photos/2095544/pexels-photo-2095544.jpeg?"
      }
    ]
  );
  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if(id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployee);
  };

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }

    setEmployees([...employees, newEmployee])
  };

  const showEmployees = true;

  return (
    <div className="App bg-gray-300 min-h-screen">
      {showEmployees ?
        <>
          <div className='flex flex-wrap justify-center my-2'>
            {employees.map((employee) => {
              const editEmployee = (<EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee} />);
              return (<Employee key={employee.id} id={employee.id} name={employee.name} role={employee.role} img={employee.img} editEmployee={editEmployee} />);
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default Employees;
