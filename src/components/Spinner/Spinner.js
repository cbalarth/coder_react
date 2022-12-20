import React from 'react'
import './Spinner.css'

const Spinner = () => {
    return (
    <div className="spinner1 fixed bg-danger w-100 vh-100 d-flex justify-content-center align-items-center position-absolute top-0 left-0">
        <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>

    )
}

export default Spinner