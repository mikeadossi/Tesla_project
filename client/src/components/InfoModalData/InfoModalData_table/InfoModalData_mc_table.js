import React, { Component } from 'react';
import './InfoModalData_table.css';

class InfoModalData_mc_table extends Component {
  render() {
    return ( 
      <div className="infoModalData_mc_table_container">
          <table>
              <thead>
                  <tr>
                      <th rowspan="2" className="infoModalData_table_head infoModalData_table_top">
                          <strong>Outlets</strong> 
                      </th> 
                      <th colspan="3" className="infoModalData_table_head infoModalData_table_top">
                          <strong>Charge Speed</strong>
                          <br />
                          <div>Max miles of range per hour of charge</div>
                      </th>
                  </tr>
                  <tr>
                      <th className="infoModalData_table_head">Model 3</th>
                      <th className="infoModalData_table_head">Model S</th>
                      <th className="infoModalData_table_head">Model X</th>
                  </tr>
              </thead>
              <tbody>
                   <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 5-15 <br />
                          240 volt / 50 amp breaker <br/>
                          Common household outlet
                      </td>
                      <td>3</td>
                      <td>3</td>
                      <td>2</td> 
                  </tr> 
                  <tr className="table-charging-details-th">
                  <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 6-50 <br />
                          240 volt / 50 amp breaker <br/>
                          Maximum 32 amp output
                      </td>
                      <td>30</td>
                      <td>23</td>
                      <td>20</td> 
                  </tr> 
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 14-50 <br />
                          240 volt / 50 amp breaker <br/>
                          Maximum 32 amp output
                      </td>
                      <td>30</td>
                      <td>23</td>
                      <td>20</td> 
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 14-30 <br />
                          240 volt / 50 amp breaker
                      </td>
                      <td>22</td>
                      <td>17</td>
                      <td>14</td> 
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 10-30 <br />
                          240 volt / 50 amp breaker
                      </td>
                      <td>22</td>
                      <td>17</td>
                      <td>14</td> 
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 6-20 <br />
                          240 volt / 50 amp breaker
                      </td>
                      <td>15</td>
                      <td>11</td>
                      <td>8</td> 
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 6-15 <br />
                          240 volt / 50 amp breaker
                      </td>
                      <td>11</td>
                      <td>7</td>
                      <td>5</td> 
                  </tr>
                  <tr className="table-charging-details-th">
                      <td>
                          <img className="infoModalData_table_mc_img"></img>
                          NEMA 5-20 <br />
                          120 volt / 20 amp breaker <br/>
                          Common household outlet
                      </td>
                      <td>4</td>
                      <td>4</td>
                      <td>3</td> 
                  </tr>
              </tbody>
          </table>
          <div className="app_source_footer"><a href="https://www.tesla.com/support/home-charging-installation/mobile-connector" target="_blank">Source</a></div>
      </div>
    );
  }
}

export default InfoModalData_mc_table;