import React, { useState } from 'react';
import './style.css';
import { StudentsList as List } from './components/StudentsList/StudentsList';

export default function App() {
  const studentsList = [
    {
      id: 1,
      name: 'Daniel',
      group: 'React',
    },
    {
      id: 2,
      name: 'Damaris',
      group: 'Javascript',
    },
    {
      id: 3,
      name: 'Julia',
      group: 'Python',
    },
    {
      id: 4,
      name: 'Carlos',
      group: 'Fullstack',
    },
    {
      id: 5,
      name: 'Kim',
      group: 'Fullstack',
    },
  ];

  return (
    <div>
      <h1>Lista de estudiantes</h1>
      <StudentsList studentsList={studentsList} />
    </div>
  );
}

function StudentsList({ studentsList }) {
  return (
    <div>
      {studentsList.map((student) => (
        <IndividualStudent data={student} />
      ))}
    </div>
  );
}

const IndividualStudent = ({ data }) => {
  const { name, group } = data;

  return (
    <div>
      <p>
        {name} - <span>{group}</span>
      </p>
    </div>
  );
};
