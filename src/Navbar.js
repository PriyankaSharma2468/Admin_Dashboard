import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Navbar({Toggle}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className='container-fluid'>
                <b className="navbar-brand d-none d-md-block text-dark" href="#">Hello Priyanka</b>
                <a className="navbar-brand d-block d-md-none" onClick={Toggle}>
                    <i className="bi bi-justify fs-3"></i>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item border rounded">
                            <a className="nav-link text-dark" aria-current="page" href="#">
                                <i className="bi bi-search text-dark"></i> Search
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
