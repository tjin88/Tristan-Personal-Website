import React, { useState, useEffect } from 'react';
import './LightNovels.css'
import axios from '../Components/axios';
import { DatabaseData } from '../Assets/databases/lightNovelDatabase';

function LightNovels() {
  const [data, setData] = useState([]);

  // const instance = axios.create({
  //   baseURL: "http://localhost:8000"
  // });

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {

        console.log(`Error Message: ${error}`);
        console.log(`Error Message #2: ${error.response.data}`);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Input Date</th>
          {/* <th>Date</th> */}
          <th>Type</th>
          <th>Name</th>
          <th>Last Chapter Read</th>
          <th>Last Date Read (Default: March 25)</th>
          <th>Reading (Completed, Ongoing, Stopped)</th>
          <th>Source (A)</th>
          <th>Source (B)</th>
          <th>Typical Update Period</th>
        </tr>
      </thead>
      <tbody>
        {DatabaseData.map((item,index) => (
          <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item["Input Date"] ? item["Input Date"] : "N/A"}</td>
            <td>{item["Type"] ? item["Type"] : "N/A"}</td>
            <td>{item["Name"] ? item["Name"] : "N/A"}</td>
            <td>{item["Last Chapter Read"] ? item["Last Chapter Read"] : "N/A"}</td>
            <td>{item["Last Date Read (Default: March 25 --> Date made this table)"] ? item["Last Date Read (Default: March 25 --> Date made this table)"] : "N/A"}</td>
            <td>{item["Reading: Completed/Ongoing/Stopped"] ? item["Reading: Completed/Ongoing/Stopped"] : "N/A"}</td>
            <td>{item["Source (A)"] ? <a href={`${item["Link (A)"]}`}>{item["Source (A)"]}</a> : "N/A"}</td>
            <td>{item["Source (B)"] ? <a href={`${item["Link (B)"]}`}>{item["Source (B)"]}</a> : "N/A"}</td>
            <td>{item["Update Period"] ? item["Update Period"] : "N/A"}</td>
          </tr>
        ))}
        {/* {data.map((item,index) => (
          <tr key={item._id}>
            <td>{index+1}</td>
            <td>{item.inputDate ? item.inputDate : "N/A"}</td>
            <td>{item.type ? item.type : "N/A"}</td>
            <td>{item.name ? item.name : "N/A"}</td>
            <td>{item.lastChapterRead ? item.lastChapterRead : "N/A"}</td>
            <td>{item.lastDateRead ? item.lastDateRead : "N/A"}</td>
            <td>{item.ongoingCompleted ? item.ongoingCompleted : "N/A"}</td>
            <td>{item.sourceA ? item.sourceA : "N/A"}</td>
            <td>{item.linkA ? item.linkA : "N/A"}</td>
            <td>{item.updatesA ? item.updatesA : "N/A"}</td>
            <td>{item.sourceB ? item.sourceB : "N/A"}</td>
            <td>{item.linkB ? item.linkB : "N/A"}</td>
            <td>{item.updatesB ? item.updatesB : "N/A"}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

export default LightNovels;
