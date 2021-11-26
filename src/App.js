import './App.css';
import { useRef, useState } from 'react';
import BaseFunc from './components/BaseFunc';
import Task2 from './components/Task2';
import Task4 from './components/Task4';
import Task5 from './components/Task5';

function App() {
  //**************************************************************** */
  //************ Task 1 ******************************************** */
  //**************************************************************** */
  const baseFuncRef = useRef();
  const [mulValA, setMulValA] = useState(1);
  const [mulResult, setMulResult] = useState(0);

  const [SHLValA, setSHLValA] = useState(1);
  const [SHLValB, setSHLValB] = useState(1);
  const [SHLResult, setSHLResult] = useState(0);

  const [addValA, setAddValA] = useState(1);
  const [addValB, setAddValB] = useState(1);
  const [addResult, setAddResult] = useState(0);

  const [subValA, setSubValA] = useState(1);
  const [subValB, setSubValB] = useState(1);
  const [subResult, setSubResult] = useState(0);

  const Mult27 = () => {
    setMulResult(baseFuncRef.current.Mult27(mulValA));
  };

  const SHL = () => {
    setSHLResult(baseFuncRef.current.SHL(SHLValA, SHLValB));
  };

  const ADD = () => {
    setAddResult(baseFuncRef.current.ADD(addValA, addValB));
  };

  const SUB = () => {
    setSubResult(baseFuncRef.current.SUB(subValA, subValB));
  };

  //**************************************************************** */
  //************ Task 2 ******************************************** */
  //**************************************************************** */
  const task2Ref = useRef();

  const [t2PowValA, setT2PowValA] = useState(1);
  const [t2PowValB, setT2PowValB] = useState(1);
  const [t2PowResult, setT2PowResult] = useState(1);

  const Task2Pow = () => {
    setT2PowResult(task2Ref.current.pow(t2PowValA, t2PowValB));
  };

  //**************************************************************** */
  //************ Task 4 ******************************************** */
  //**************************************************************** */
  const task4Ref = useRef();

  const [t4PowValA, setT4PowValA] = useState(1);
  const [t4PowValB, setT4PowValB] = useState(1);
  const [t4PowResult, setT4PowResult] = useState(1);

  const Task4Pow = () => {
    setT4PowResult(task4Ref.current.pow(t4PowValA, t4PowValB));
  };

  //**************************************************************** */
  //************ Task 5 ******************************************** */
  //**************************************************************** */
  const order = [
    {
      id: "3277",
      name: "Alex Wilson",
      age: 30,
      cart: [
        {
          productId: "js7a8a",
          price: 23.99,
          quantity: 3
        },
        {
          productId: "113aad",
          price: 3.99,
          quantity: 4
        }
      ]
    },
    {
      id: "4183",
      name: "Jeremy Dunder",
      age: 21,
      cart: [
        {
          productId: "das35fas",
          price: 10.99,
          quantity: 4
        }
      ]
    },
    {
      id: "3145",
      name: "Jennifer Townsend",
      age: 30,
      cart: undefined
    }
  ];

  const task5Ref = useRef();

  const [id, setId] = useState('3277');
  const [name, setName] = useState('Alex Wilson');
  const [age, setAge] = useState(30);
  const [valForCustomer, setValForCustomer] = useState(0);
  const [total, setTotal] = useState(0);

  const invoiceForCustomer = () => {
    setValForCustomer(task5Ref.current.invoiceForCustomer(order, id, name, age));
  };

  const getTotal = () => {
    setTotal(task5Ref.current.getTotal(order));
  }

  //**************************************************************** */
  //************ Task 6 ******************************************** */
  //**************************************************************** */
  const orgArr = [2, 5, 10, 4, 3, 6, 13, 9, 5, 4];

  const sort = (list) => {
    var numArr = list.map(item => item);
    numArr.sort(function (a, b) {
      return a - b;
    });

    return numArr;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Task 1</h2>
        <div className="func-area">
          <label htmlFor={mulValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setMulValA(e.target.value)}
            name='mulValA'
            value={mulValA} />
          <button onClick={Mult27}>
            Mult27
          </button>
          <label>Result : {mulResult} </label>
        </div>

        <div className="func-area">
          <label htmlFor={SHLValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setSHLValA(e.target.value)}
            name='SHLValA'
            value={SHLValA} />
          <label htmlFor={SHLValB}>B : </label>
          <input
            type='text'
            onChange={(e) => setSHLValB(e.target.value)}
            name='SHLValB'
            value={SHLValB} />
          <button onClick={SHL}>
            SHL
          </button>
          <label>Result : {SHLResult} </label>
        </div>

        <div className="func-area">
          <label htmlFor={addValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setAddValA(e.target.value)}
            name='addValA'
            value={addValA} />
          <label htmlFor={addValB}>B : </label>
          <input
            type='text'
            onChange={(e) => setAddValB(e.target.value)}
            name='addValB'
            value={addValB} />
          <button onClick={ADD}>
            ADD
          </button>
          <label>Result : {addResult} </label>
        </div>

        <div className="func-area">
          <label htmlFor={subValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setSubValA(e.target.value)}
            name='subValA'
            value={subValA} />
          <label htmlFor={subValB}>B : </label>
          <input
            type='text'
            onChange={(e) => setSubValB(e.target.value)}
            name='subValB'
            value={subValB} />
          <button onClick={SUB}>
            SHL
          </button>
          <label>Result : {subResult} </label>
        </div>

        <BaseFunc ref={baseFuncRef} />

        <h2>Task 2</h2>
        <div className="func-area">
          <label htmlFor={t2PowValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setT2PowValA(e.target.value)}
            name='t2PowValA'
            value={t2PowValA} />
          <label htmlFor={t2PowValB}>B : </label>
          <input
            type='text'
            onChange={(e) => setT2PowValB(e.target.value)}
            name='t2PowValB'
            value={t2PowValB} />
          <button onClick={Task2Pow}>
            POW
          </button>
          <label>Result : {t2PowResult} </label>
        </div>
        <Task2 ref={task2Ref} />

        <h2>Task 3</h2>

        <h2>Task 4</h2>
        <div className="func-area">
          <label htmlFor={t4PowValA}>A : </label>
          <input
            type='text'
            onChange={(e) => setT4PowValA(e.target.value)}
            name='t4PowValA'
            value={t4PowValA} />
          <label htmlFor={t4PowValB}>B : </label>
          <input
            type='text'
            onChange={(e) => setT4PowValB(e.target.value)}
            name='t4PowValB'
            value={t4PowValB} />
          <button onClick={Task4Pow}>
            POW
          </button>
          <label>Result : {t4PowResult} </label>
        </div>
        <Task4 ref={task4Ref} />

        <h2>Task 5</h2>
        <div className="func-area">
          <label htmlFor={id}>ID : </label>
          <input
            type='text'
            onChange={(e) => setId(e.target.value)}
            name='id'
            value={id} />
          <label htmlFor={name}>Name : </label>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            name='name'
            value={name} />
          <label htmlFor={age}>Age : </label>
          <input
            type='text'
            onChange={(e) => setAge(e.target.value)}
            name='age'
            value={age} />
          <button onClick={invoiceForCustomer}>
            GetForCustomer
          </button>
          <label>Result : {valForCustomer} </label>
        </div>
        <div className="func-area">
          <button onClick={getTotal}>
            Get Total
          </button>
          <label>Result : {total} </label>
        </div>
        <Task5 ref={task5Ref} />

        <h2>Task 6</h2>
        <div className="func-area">
          <label>origin : </label>
          <span>[</span>
          {orgArr.map(item => (<span>{item},</span>))}
          <span>]</span>

          <label>result : </label>
          <span>[</span>
          {sort(orgArr).map(item => (<span>{item},</span>))}
          <span>]</span>
        </div>
      </header>
    </div>
  );
}

export default App;
