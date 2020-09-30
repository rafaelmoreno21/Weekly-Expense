import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {

    //definition state
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);

    const defineBudget = e => {
        saveAmount(parseInt(e.target.value, 10));
    };

    //Submit
    const addBudget = e => {
        e.preventDefault();

        //Validate
        if (amount < 1 || isNaN(amount)) {
            saveError(true);
            return;
        }
        // finish
        saveError(false);
        saveBudget(amount);
        saveRemaining(amount);
        updateQuestion(false)
    }
    return (<Fragment>
        <h2>Put your budget</h2>
        {error ? <Error message="The budget is wrong" /> : null}


        <form
            onSubmit={addBudget}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="Put your budget"
                onChange={defineBudget}
                min="1"
                max="999999999"

            />

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add your budget"

            />
        </form>
    </Fragment>);
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}


export default Question;