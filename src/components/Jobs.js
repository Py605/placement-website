import React from 'react';
import { useState } from 'react';
import Footer from './Footer';
import '../css/jobs.css';
function Jobs() {
  const [title, settitle] = useState('');
  const [location, setlocation] = useState('');
  const [jobdata, setjobdata] = useState([]);
  // var jobdata =[]
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae0d218fd1mshc4d35a4bd0d7ebbp142732jsn4da17f4a66dd',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  async function find(e) {
    e.preventDefault();
    console.log(title);
    console.log(location);
    const response = await fetch(
      `https://jsearch.p.rapidapi.com/search?query=${title}%2C%20${location}&num_pages=3`,
      options
    );
    const json = await response.json();
    console.log("Json is :- ", json);
    await setjobdata(json.data);
  }

  return (
    <>
      {/* jobs find panel */}
      <div className="search-design">
        <input
          type="text"
          id="jobs"
          placeholder="Jobs or Title"
          onChange={e => settitle(e.target.value)}
        />
        <input
          type="text"
          id="location"
          placeholder="City or Country"
          onChange={e => setlocation(e.target.value)}
        />
        <button type="button" id="search-btn" onClick={find}>
          Find
        </button>
      </div>
      <hr />

      <div className="contain">
      {
        jobdata.map(data => (
          <div className="upper" key={data.job_id}>
            <h4>{data.job_title}</h4>
            <p className="company-name">{data.employer_name}</p>

            <span className="company-address">{`${data.job_city} ${data.job_state} ${data.job_country}`}</span>
            <p className="same">{data.job_employment_type}</p>
            <ul>
              <li>`*{data.job_description.slice(0, 200) + '.....'}`</li>
            </ul>

            <div className="active">{data.job_posted_at_datetime_utc}</div>

            <div className="apply_btn">

                  <a
                    href={data.job_apply_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Konw
                  </a>

            </div>
          </div>
        ))
      }
      </div>
      <Footer />
    
    </>
  );
}

export default Jobs;
