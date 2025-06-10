import { useState } from 'react';
import './App.css';
import ClassBox from './ClassBox';
import { classes } from './collegeClasses';

function App() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const handleToggle = (code: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });
  };

  const totalCredits = classes
    .filter(cls => selected.has(cls.code))
    .reduce((sum, cls) => sum + cls.credits, 0);

  return (
    <div>
      <h1>Computer Engineering Major Requirements</h1>
      <div style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>
        Total Selected Credits: <b>{totalCredits}</b>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {classes.map(cls => (
          <ClassBox
            key={cls.code}
            collegeClass={cls}
            selected={selected.has(cls.code)}
            onClick={() => handleToggle(cls.code)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
