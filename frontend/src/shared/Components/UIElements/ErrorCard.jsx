import React from 'react'

const ErrorCard = props => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-sm relative mx-4 mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {props.error}</span>
        </div>
    )
}

export default ErrorCard