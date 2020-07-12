import React, { Component } from "react";
import "../../css/Filter.css"
export class FilterStatistical extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="primary">
            <h1>Filter</h1>
            <div className="filter-menu">
              <form>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <a
                      className="panel-title accordion-toggle visible-sm-block"
                      role="button"
                      data-toggle="collapse"
                      href="#collapseFilters"
                      aria-expanded="false"
                      aria-controls="collapseFilters"
                    >
                      Filter
                    </a>
                    <div className="panel-title hidden-sm">Filter</div>
                    {/* /.panel-title */}
                    <div className="panel-body">
                      <button className="btn btn-default" type="submit">
                        Apply Filters
                      </button>
                      <a
                        className="btn btn-sm btn-link pull-right visible-sm-inline"
                        href="/"
                      >
                        Clear Selections
                      </a>
                      <a
                        className="btn btn-default pull-right"
                        href="/"
                      >
                        Reset
                      </a>
                    </div>
                    {/* /.panel-body */}
                  </div>
                  {/* /.panel-heading */}
                  <div className="panel-body">
                    <div
                      className="panel-group"
                      id="filter-menu"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingOne"
                        >
                          <a
                            className="panel-title accordion-toggle"
                            role="button"
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Airline
                          </a>
                          {/* /.panel-title */}
                        </div>
                        {/* /.panel-heading */}
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="panel-body">
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="career_state[]"
                                  defaultValue="recent_graduate"
                                />
                                Viet Nam Airlines
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="career_state[]"
                                  defaultValue="imposter_syndrome"
                                />
                                Vietjet Air
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="career_state[]"
                                  defaultValue="wise_old_head"
                                />
                                Jetstart
                              </label>
                            </div>
                          </div>
                          {/* /.panel-body */}
                        </div>
                        {/* /.panel-collapse */}
                      </div>
                      {/* /.panel */}
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <a
                            className="panel-title accordion-toggle collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                          Time
                          </a>
                          {/* /.panel-title */}
                        </div>
                        {/* /.panel-heading */}
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                January
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                February
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"

                                />
                                March 
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                April 
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                May  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                June  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                July  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                August  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                September   
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                October   
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                November  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                December  
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="topic[]"
                                />
                                2020  
                              </label>
                            </div>
                          </div>
                          
                          {/* /.panel-body */}
                        </div>
                        {/* /.panel-collapse */}
                      </div>
                      {/* /.panel */}
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <a
                            className="panel-title accordion-toggle collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Price
                          </a>
                          {/* /.panel-title */}
                        </div>
                        {/* /.panel-heading */}
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="format[]"
                                />
                                0 - 500.000 VND
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="format[]"
                                />
                                500.000 - 1.500.000 VND
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="format[]"
                                />
                                1.500.000 - 3.000.000 VND
                              </label>
                            </div>
                            <div className="checkbox">
                              <label>
                                <input
                                  className="CB"
                                  type="checkbox"
                                  name="format[]"
                                  defaultValue="tweet"
                                />
                                &gt; 3.000.000 VND
                              </label>
                            </div>
                          </div>
                          {/* /.panel-body */}
                        </div>
                        {/* /.panel-collapse */}
                      </div>
                      {/* /.panel */}
                      
                      {/* /.panel */}
                    </div>
                    {/* /.panel-group */}
                  </div>
                  {/* /.panel-body */}
                </div>
                {/* /.panel */}
              </form>
            </div>
            {/* /.filter-menu */}
          </div>
          {/* -------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default FilterStatistical;
