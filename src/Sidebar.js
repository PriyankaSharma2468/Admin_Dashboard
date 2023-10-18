import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar(){
    const [active, setActive] = useState(1);
    return(
        <div className="sidebar d-flex justify-content-between flex-column py-3 ps-3 pe-5 vh-100">
            <div>
                <a href="" className="p-3">
                    <i className="bi bi-laptop fs-4 me-4"></i>
                    <span className="fs-3"> Dashboard</span>
                </a>
                <hr className="text-secondary mt-2"/>
                <ul className="nav nav-pills flex-column mt-3">
                    <li className={active === 1 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(1)}>
                        <Link to="/" className="p-1">
                            <i className="bi bi-speedometer2 me-3 fs-5"></i>
                            <span className="fs-6">Dashboard</span>
                        </Link>
                    </li>
                    <li className={active === 2 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(2)}>
                        <Link to="/users" className="p-1">
                            <i className="bi bi-table me-3 fs-4"></i>
                            <span className="fs-6">Product</span>
                        </Link>
                    </li>
                    <li className={active === 3 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(3)}>
                        <Link to="/orders" className="p-1">
                            <i className="bi bi-people me-3 fs-4"></i>
                            <span className="fs-6">Customers</span>
                        </Link>
                    </li>
                    <li className={active === 4 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(4)}>
                        <Link to="" className="p-1">
                            <i className="bi bi-grid me-3 fs-4"></i>
                            <span className="fs-6">Income</span>
                        </Link>
                    </li>
                    <li className={active === 5 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(5)}>
                        <Link to="" className="p-1">
                            <i className="bi bi-percent me-3 fs-4"></i>
                            <span className="fs-6">Promote</span>
                        </Link>
                    </li>
                    <li className={active === 6 ? 'active nav-item p-2 m-1' : "nav-item p-2 m-1"}
                       onClick={e =>setActive(6)}>
                        <Link to="" className="p-1">
                            <i className="bi bi-question-circle me-3 fs-4"></i>
                            <span className="fs-6">Help</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <hr className="text-secondary"/>
                <div className="nav-item p-2">
                        <Link to="">
                            <i className="bi bi-person-circle me-3 fs-4"></i>
                            <span className="fs-4">Evano</span>
                            <p>Project Manager</p>
                        </Link>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;