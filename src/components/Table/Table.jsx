import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container" style={{marginTop:'85px'}}>
      <h2>Our Range Of Raw Cotton</h2>
      <table id="customers">
       <thead>
       <tr>
          <th className="center">Variety</th>
          <th>Grade</th>
          <th>General Specifications</th>
        </tr>
       </thead>
        <tbody>
          {/* Row 1 */}
        <tr> 
          <td>Shankar – 6 (S-6)</td>
          <td>Midling to good midling</td>
          <td>
            <ul> 
              <li><span>Staple Length</span> <span>28 – 30 mm</span></li>
              <li><span>UR</span> <span>48 – 49</span></li>
              <li><span>Micronaire</span> <span>3.8-4.3</span></li>
              <li><span>Strength</span> <span>28-29 GPT</span></li>
              <li><span>Trash %</span> <span>2.5</span></li>
            </ul>
          </td>
        </tr>
        {/* Row 2 */}
        <tr>
          <td>MECH</td>
          <td>Lower to midling</td>
          <td>
          <ul> 
              <li><span>Staple Length</span> <span>28 – 30 mm</span></li>
              <li><span>UR</span> <span>47 – 48</span></li>
              <li><span>Micronaire</span> <span>3.5 – 4.3</span></li>
              <li><span>Strength</span> <span>27 – 28 GPT</span></li>
              <li><span>Trash %</span> <span>3.0</span></li>
            </ul>
          </td>
        </tr>
        {/* Row 3 */}
        <tr>
          <td>MCU-5</td>
          <td>Midling to good midling</td>
          <td>
          <ul> 
              <li><span>Staple Length</span> <span>32 – 33 mm</span></li>
              <li><span>UR</span> <span>48 – 49</span></li>
              <li><span>Micronaire</span> <span>3.5 – 4.0</span></li>
              <li><span>Strength</span> <span>30 – 31 GPT</span></li>
              <li><span>Trash %</span> <span>3.0</span></li>
            </ul>
          </td>
        </tr>
        {/* Row 4 */}
        <tr>
          <td>BUNNY</td>
          <td>Midling to good midling</td>
          <td>
          <ul> 
              <li><span>Staple Length</span> <span>29 – 31 mm</span></li>
              <li><span>UR</span> <span>48 – 49</span></li>
              <li><span>Micronaire</span> <span>3.5 – 4.5</span></li>
              <li><span>Strength</span> <span>29-30 GPT</span></li>
              <li><span>Trash %</span> <span>3.0</span></li>
            </ul>
          </td>
        </tr>
        {/* Row 5 */}
        <tr>
          <td>J-34</td>
          <td>Midling to good midling</td>
          <td>
          <ul> 
              <li><span>Staple Length</span> <span>27 – 28 mm</span></li>
              <li><span>UR</span> <span>47 – 48</span></li>
              <li><span>Micronaire</span> <span>3.9 – 4.6</span></li>
              <li><span>Strength</span> <span>27- 29</span></li>
              <li><span>Trash %</span> <span>3.5- 4.5</span></li>
            </ul>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
