import React from "react";

function User() {
    return (
        <>
            <div className="p-5 bg-light">
                <div className="bg-white rounded p-4">
                    <table className="table ">
                        <caption className="caption-top text-dark fs-4">Product Sell</caption>
                        
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Price</th>
                                <th scope="col">Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Abstract 3D</td>
                                <td>32 in stock</td>
                                <td>$ 45.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Sarphens Illustration</td>
                                <td>32 in stock</td>
                                <td>$ 45.99</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>Abstract 3D</td>
                                <td>32 in stock</td>
                                <td>$ 45.99</td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default User;