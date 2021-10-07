import React from 'react';
import './InfoModalData_table.css';

const InfoModalData_wc_table = () => {
  render() {
    return ( 
      <div className="infoModalData_wc_table_container"> 
          <table>
              <thead>
                  <tr>
                      <th colspan="3" className="infoModalData_table_head infoModalData_table_top">
                          <strong>Wall Connector</strong>
                          <br />
                          <div>Technical Details</div>
                      </th> 
                      <th colspan="4" className="infoModalData_table_head infoModalData_table_top">
                          <strong>Charge Speed</strong>
                          <br />
                          <div>Max miles of range per hour of charge</div>
                      </th>
                  </tr>
                  <tr>
                      <th className="infoModalData_table_head">
                          <strong>Circuit Breaker</strong>
                          <br />
                          <div>(amps)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Maximum output</strong>
                          <br />
                          <div>(amps)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Power at 240 volts</strong>
                          <br />
                          <div>(kilowatt)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Model S</strong>
                          <br />
                          <div>(mph)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Model 3</strong>
                          <br />
                          <div>(mph)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Model X</strong>
                          <br />
                          <div>(mph)</div>
                      </th>
                      <th className="infoModalData_table_head">
                          <strong>Model Y</strong>
                          <br />
                          <div>(mph)</div>
                      </th>
                  </tr> 
              </thead>
              <tbody>
                  <tr className="table-charging-details-th">
                      <td>60</td>
                      <td>48</td>
                      <td>11.5kW</td>
                      <td>34</td>
                      <td>44</td>
                      <td>30</td>
                      <td>42</td>
                  </tr> 
                  <tr className="table-charging-details-th">
                      <td>50</td>
                      <td>40</td>
                      <td>9.6 kW</td>
                      <td>29</td>
                      <td>37</td>
                      <td>25</td>
                      <td>36</td>
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>40</td>
                      <td>32</td>
                      <td>7.7 kW</td>
                      <td>23</td>
                      <td>30</td>
                      <td>20</td>
                      <td>29</td>
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>30</td>
                      <td>24</td>
                      <td>5.7 kW</td>
                      <td>17</td>
                      <td>22</td>
                      <td>14</td>
                      <td>21</td>
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>20</td>
                      <td>16</td>
                      <td>3.8 kW</td>
                      <td>11</td>
                      <td>15</td>
                      <td>8</td>
                      <td>14</td>
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>15</td>
                      <td>12</td>
                      <td>2.8 kW</td>
                      <td>7</td>
                      <td>11</td>
                      <td>5</td>
                      <td>10</td>
                  </tr>
              </tbody>
          </table>
          <div className="app_source_footer"><a href="https://www.tesla.com/support/home-charging-installation/wall-connector" target="_blank" rel="noopener noreferrer">Source</a></div>
      </div>
    );
  }
}

export default InfoModalData_wc_table;