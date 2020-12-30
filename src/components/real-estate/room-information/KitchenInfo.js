import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.min.css';

const KitchenInfo = () => {
  return (
    <div>
      <table class='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Kitchen Room Type:</th>
            <th scope='col'>Column heading</th>
            <th scope='col'>Column heading</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class='table-primary'>
            <th scope='row'>Primary</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KitchenInfo;
