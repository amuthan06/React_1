import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Value from './value';
import Parent from './passsingData/props/Parent2Child/Parent';
import Parent1 from './passsingData/props/Child2ParentMethod2/Parent1';
import Child1 from './passsingData/props/Child2ParentMethod2/Child1';
import Parent2 from './passsingData/props/GranChild/Parent2';
import PractiseParent from './passsingData/props/Practise/PractiseParent';
import ParentUseContext from './passsingData/useContext/ParentUseContext';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Value/>}></Route> {/* child to parent method1 */}
        <Route path='/parent-child' element={<Parent/>}></Route>
        <Route path='/child-parent2' element={<Parent1/>}></Route>
        <Route path='/child' element={<Child1/>}></Route>
        <Route path='/granchild' element={<Parent2/>}></Route>
        <Route path='/practise' element={<PractiseParent/>}></Route>
        <Route path='/usecontext' element={<ParentUseContext/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
