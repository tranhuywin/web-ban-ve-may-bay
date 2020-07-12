import React, { Component } from "react";

export class EditUsers extends Component {
  
  render() {
    return (
      <div className="manage-users-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 mr-auto">
              <h3>Manage Users</h3>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr className="table-secondary align-items-start text-uppercase">
                <th className="align-middle">First Name</th>
                <th className="align-middle">Last Name</th>
                <th className="align-middle">Email</th>
                <th className="align-middle">Roles</th>
                <th className="align-middle">Rank</th>
                <th className="align-middle">Points</th>
                <th className="align-middle">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="font-weight-normal align-middle">Admin</th>
                <td className="align-middle">Admin</td>
                <td className="align-middle">admin@admin.com</td>
                <td className="align-middle">Admin</td>
                <td className="align-middle">Diamond</td>
                <td className="align-middle">999999</td>
                <td>
                  <a className="btn btn-primary btn-sm" role="button" href='#'>
                    Edit User
                  </a>
                  
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal align-middle">Customer1</th>
                <td className="align-middle">Customer1</td>
                <td className="align-middle">Customer1@customer.com</td>
                <td className="align-middle">Customer</td>
                <td className="align-middle">Gold</td>
                <td className="align-middle">300</td>
                <td>
                  <a className="btn btn-primary btn-sm" role="button" href='#'>
                    Edit User
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal align-middle">Customer2</th>
                <td className="align-middle">Customer2</td>
                <td className="align-middle">Customer2@Customer2.com</td>
                <td className="align-middle">Customer</td>
                <td className="align-middle">silver</td>
                <td className="align-middle">200</td>
                <td>
                  <a className="btn btn-primary btn-sm" role="button" href='#'>
                    Edit User
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
              <tr>
                <th className="font-weight-normal align-middle">Customer3</th>
                <td className="align-middle">Customer3</td>
                <td className="align-middle">Customer3@Customer3.com</td>
                <td className="align-middle">Customer</td>
                <td className="align-middle">Iron</td>
                <td className="align-middle">0</td>
                <td>
                  <a className="btn btn-primary btn-sm" role="button" href='#'>
                    Edit User
                  </a>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EditUsers;
