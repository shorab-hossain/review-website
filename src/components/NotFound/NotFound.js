import React from 'react';

const NotFound = () => {
    return (
        <div className="card text-center container d-flex justify-content-center w-50  mt-5">
             <div className="card-header text-light bg-danger w-100">
                !!!Error
             </div>
             <div className="card-body">
                <h5 className="card-title">Page is Not Found</h5>
                <p className="card-text">Try Again and Come back before page</p>
                <a href="#" className="btn btn-primary">Come back</a>
                    </div>
            </div>
    );
};

export default NotFound;