import React from "react";
import GitHubCalendar from "react-github-calendar";
import CodeforcesCard from "./CodeforcesCard";

function Github() {
  return (
    <div className="github-section">
      <span className="section-label section-label-center">Activity</span>
      <h1 className="project-heading">
        Days I <span className="purple">Code</span>
      </h1>

      <div className="coding-profiles-grid">
        <div className="coding-profile-item coding-profile-item-leetcode">
          <img
            src="https://leetcard.jacoblin.cool/ranjann_aankit28?theme=dark&font=Karma&ext=contest"
            alt="LeetCode stats for ranjann_aankit28"
            className="coding-profile-img"
          />
        </div>
        <div className="coding-profile-item coding-profile-item-cf">
          <CodeforcesCard />
        </div>
      </div>

      <div className="github-calendar-wrap">
        <GitHubCalendar
          username="ankitranjan1028-vedam"
          blockSize={14}
          blockMargin={4}
          color="#22d3ee"
          fontSize={14}
        />
      </div>
    </div>
  );
}

export default Github;
