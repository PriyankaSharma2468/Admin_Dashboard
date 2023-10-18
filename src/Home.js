import React from "react";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

function Home() {
    return (
        <div className="p-5 bg-light">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                        <div className="d-flex justify-content-between p-4 align-items-center  bg-white border border-secondary shadow-sm">
                            <i className="bi bi-currency-dollar fs-1 text-success"></i>
                            <div>
                                <span>Earning</span>
                                <h4>$198k</h4>
                                <p><i className="bi bi-arrow-up text-success"></i><span className="text-success">37.8% </span>this month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                        <div className="d-flex justify-content-between p-4 align-items-center  bg-white border border-secondary shadow-sm">
                            <i className="bi bi-file-text fs-1 text-primary"></i>
                            <div>
                                <span>Orders</span>
                                <h4>$2.4k</h4>
                                <p><i className="bi bi-arrow-down text-danger"></i><span className="text-danger">2% </span>this month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                        <div className="d-flex justify-content-between p-4 align-items-center  bg-white border border-secondary shadow-sm">
                            <i className="bi bi-coin fs-1 text-danger"></i>
                            <div>
                                <span>Balance</span>
                                <h4>$2.4k</h4>
                                <p><i className="bi bi-arrow-down text-danger"></i><span className="text-danger">2% </span>this month</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                        <div className="d-flex justify-content-between p-4 align-items-center  bg-white border border-secondary shadow-sm">
                            <i className="bi bi-handbag fs-1 text-warning"></i>
                            <div>
                                <span>Total Sales</span>
                                <h4>$89k</h4>
                                <p><i className="bi bi-arrow-up text-success"></i><span className="text-success">11% </span>this week</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 p-3">
                         <Linechart/>
                    </div>
                    <div className="col-12 col-md-4 p-3">
                         <Piechart/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;