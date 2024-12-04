import React from 'react';

function ShortBanner(props) {
  return (
    <div className="heading-page header-text">
      <section className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-content">
                <h4>{props.name}</h4>
                <h2>{props.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShortBanner;
