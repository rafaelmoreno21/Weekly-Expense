import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import Control from './components/Control';
function App() {

  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showquestion, updateQuestion] = useState(true);
  const [spendings, saveSpendings] = useState([]);
  const [spending, saveSpending] = useState({});
  const [createSpending, saveCreateSpending] = useState(false);

  //UseEffect

  useEffect(() => {
    if (createSpending) {
      //add budget

      saveSpendings([
        ...spendings,
        spending
      ]);

      //remaining  budget
      const budgetRema = remaining - spending.amount
      saveRemaining(budgetRema);

      saveCreateSpending(false);
    }
  }, [spending, createSpending, remaining, spendings]);




  return (
    <div className="container">
      <header>
        <h1>Weekly Expense</h1>

        <div className="contenido-principal contenido">
          {showquestion ?
            (
              <Question
                saveBudget={saveBudget}
                saveRemaining={saveRemaining}
                updateQuestion={updateQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    saveSpending={saveSpending}
                    saveCreateSpending={saveCreateSpending}
                  />
                </div>
                <div className="one-half column">
                  <List
                    spendings={spendings}
                  />
                  <Control
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>

            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;









