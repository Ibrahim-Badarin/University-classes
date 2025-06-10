import React from 'react';
import type { CollegeClass } from './collegeClasses';
import './ClassBox.css';

interface ClassBoxProps {
  collegeClass: CollegeClass;
  selected: boolean;
  onClick: () => void;
}

const ClassBox: React.FC<ClassBoxProps> = ({ collegeClass, selected, onClick }) => {
  return (
    <div className={`class-box${selected ? ' selected' : ''}`} onClick={onClick}>
      <div className="class-title">{collegeClass.code}: {collegeClass.name}</div>
      <div className="class-gpa">Avg GPA: {collegeClass.averageGPA ?? 'N/A'}</div>
      <div className="class-description">{collegeClass.description}</div>
      {collegeClass.prerequisites && collegeClass.prerequisites.length > 0 && (
        <div className="class-prereq">Prerequisites: {collegeClass.prerequisites.join(', ')}</div>
      )}
      <div className="class-credits">Credits: {collegeClass.credits}</div>
    </div>
  );
};

export default ClassBox;
