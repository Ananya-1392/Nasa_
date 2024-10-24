import React, { useEffect } from "react";

const participants = [
  { institution: "DSU Overall", count: "1500+" },
  { institution: "DSATM", count: "368" },
  { institution: "DSCE", count: "314" },
  { institution: "BGS", count: "1271" },
  { institution: "Edify Schools", count: "50+" },
  { institution: "New Horizon", count: "50+" },
  { institution: "Gopalan", count: "50+" },
  { institution: "CMR and Ekya", count: "50+" },
  { institution: "Other Schools", count: "100+" },
];

const Statistics = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll(".blocks");

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-block");
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the element is visible
    });

    blocks.forEach((container) => {
      observer.observe(container);
    });

    return () => {
      blocks.forEach((container) => {
        observer.unobserve(container);
      });
    };

  }, []);
  return (
    <section id="stats" className="stats-section">
      <h1>Statistics</h1>
      <p className="description">
        The NASA Space Apps event, held over two days, was a huge success with
        3,701 participants from around the world forming 468 teams. Schools and
        colleges from India, as well as GEMS International School in Dubai,
        joined, with 350 participants at Harohalli and over 800 at BGS
        Institutions in Bangalore. A panel of 18 judges, including ISRO
        scientists B. Sankar Madaswamy and Amit Kumar Singh, evaluated the
        submissions. Awards such as the “People’s Choice Awards,” “DSU x NASA
        Awards,” and “Global Nominations” were presented, with winning teams
        from DSU, BGS, CMRIT, and Jain University.
      </p>

      <div className="participant-section">
        <h2>Participant Breakdown by Institutions</h2>
        <div className="grid-container">
          {participants.map((participant, index) => (
            <div key={index} className="blocks">
              <h3>{participant.institution}</h3>
              <p>{participant.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
