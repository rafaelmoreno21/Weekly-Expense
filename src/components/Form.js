import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({ saveSpending, saveCreateSpending }) => {

    const [name, saveName] = useState('');
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);


    // cuando el usuario agrega un gasto
    const addAmount = e => {
        e.preventDefault();

        // validar
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // construir el gasto
        const spending = {
            name,
            amount,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        saveSpending(spending);
        saveCreateSpending(true);

        saveName('');
        saveAmount('');


    }

    return (
        <form
            onSubmit={addAmount}
        >
            <h2>Add your expenses here</h2>

            { error ? <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}


            <div className="campo">
                <label>Name Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    pattern=".{1,20}[A-Za-z]"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Amount Expense</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
            />

        </form>

    );
}

Form.propTypes = {
    saveSpending: PropTypes.func.isRequired,
    saveCreateSpending: PropTypes.func.isRequired
}



export default Form;