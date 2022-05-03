import React from "react";
import "./Weather.css"

export default function Weather(){
    return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                <input type="submit" placeholder="Search" className="btn btn-primary w-100"/>
                </div>
                </div>
            </form>
            <h1>Barcelona</h1>
            <ul>
              <li>Tuesday 18:00</li>
              <li>Mostly Cloudy</li>
            </ul>
        <div className="row mt-3">
        <div className="col-2">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"/></div>
            <div className="col-4">
                <div className="clearfix">
                <div className="float-left">
                <span className="temperature">18</span>
                <span className="unit">ºC</span>
                </div>
                </div>
            </div>

            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 2%
                    </li>
                    <li>
                        Humidity: 69%
                    </li>
                    <li>
                        Wind: 13 km/h
                    </li>
                </ul>
            </div>
        </div>
            </div>
    )
}