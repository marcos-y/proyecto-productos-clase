import React from 'react';

const Buscador = () => {
    return (
        <>
            <label></label>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">Buscador</span>
                </div>
                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>

            <ul className="list-group">
                <li className="list-group-item disabled" aria-disabled="true">ITEM</li>
            </ul>
        </>)
}

export default Buscador;