import React from 'react';
import PropTypes from 'prop-types';
const Spending = ({ spending }) => (
    <li className="gastos">
        <p>
            {spending.name}
            <span className="gasto">$ {spending.amount}</span>
        </p>

    </li>
)

Spending.propTypes = {
    spending: PropTypes.object.isRequired
}

export default Spending;