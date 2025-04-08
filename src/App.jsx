import React from 'react';
import InsertForm from './components/InsertForm';
import SearchForm from './components/SearchForm';
import DeleteForm from './components/DeleteForm';
import PieChart from './components/PieChart';

function App() {
  return (
    <div>
      <h1>Criminal Database Management</h1>
      <InsertForm />
      <hr />
      <SearchForm />
      <hr />
      <DeleteForm />
      <hr />
      <PieChart />
    </div>
  );
}

export default App;
