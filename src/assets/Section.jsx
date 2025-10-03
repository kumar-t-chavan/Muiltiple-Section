import React, { useState } from "react";

const Section = () => {
  const [allOpen, setAllOpen] = useState(false);

  const toggleAll = () => {
    setAllOpen(!allOpen);
  };

  return (
    <div className="main-section p-3">
      {/* Enable Multi Section Button */}
      <div className="enable-multiple mb-3">
        <button className="btn btn-primary px-5" onClick={toggleAll}>
          {allOpen ? "Close All Sections" : "Open All Sections"}
        </button>
      </div>

      {/* Section 1 */}
      <div className="section-1 mb-2">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Section 1
        </button>

        <div
          className={`collapse ${allOpen ? "show" : ""}`}
          id="collapseExample"
        >
          <div className="card card-body" style={{ width: "500px" }}>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus iusto architecto deleniti quisquam error quibusdam veniam impedit saepe odit alias.
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-2 mb-2">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample-2"
          aria-expanded="false"
          aria-controls="collapseExample-2"
        >
          Section 2
        </button>

        <div
          className={`collapse ${allOpen ? "show" : ""}`}
          id="collapseExample-2"
        >
          <div className="card card-body" style={{ width: "500px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque, aut consequuntur nulla dolorum rem quod vel deserunt beatae ratione.
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-3 mb-2">
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample-3"
          aria-expanded="false"
          aria-controls="collapseExample-3"
        >
         Section 3
        </button>

        <div
          className={`collapse ${allOpen ? "show" : ""}`}
          id="collapseExample-3"
        >
          <div className="card card-body" style={{ width: "500px" }}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perspiciatis eum vel quo laborum error alias ad asperiores perferendis iure.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
