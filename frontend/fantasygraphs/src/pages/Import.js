import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import url from "../assets/images/import/LeagueId.png";
import settings from "../assets/images/import/ChangeView.png";

export default function Import() {
  const isDesktop = useMediaQuery({ minWidth: 800 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leagueId, setLeagueId] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("League ID:", leagueId);
    console.log("Year:", year);
    setIsSubmitted(true);
  };

  return (
    <div className="importContainer">
      <div className="instructions">
        <h1>Instructions</h1>
        <p>
          This page allows you to import a league from ESPN. It should be prefaced that as of right
          now website only works with ESPN's fantasy football website. There are plans in the future
          to implement Yahoo and Sleeper as well. In order for you to import your league, you will
          need a couple of requirements as listed below.
        </p>

        <h2>Setting your league view to Public</h2>
        <p>
          In order for our API to be able to pull data from your league, the league must be set to
          public. Note that changing this setting will still keep your league private to prevent
          random people from joining
        </p>
        <p>
          This can be done by a League Manager. Go to LM Tools {">"} Edit League Settings {">"}{" "}
          Basic Settings {">"} Make League Viewable to Public and change that setting to yes if it
          isn't already
        </p>
        <img src={settings} alt="settings to change the league view" />

        <h2>Getting your League ID</h2>
        <p>
          You will need to also get your league ID. This information is normally inside of the URL
          at the top
        </p>
        <img src={url} alt="url of the league showing the id" />

        <h2>Setting your Year</h2>
        <p>
          The year you set the website to will be the year of the league that the api pulls the
          information from. For example if you want the most recent year you will set it to 2023.
        </p>
      </div>

      <div className="submissionForm">
        {!isSubmitted && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="leagueId">Enter your League ID </label>
              <input
                type="text"
                id="leagueId"
                value={leagueId}
                onChange={(e) => setLeagueId(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="year">Year </label>
              <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
        {isSubmitted && <h1>Changes Saved!</h1>}
      </div>
    </div>
  );
}
