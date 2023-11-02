import React, { Component } from "react";

export default class NewsItem extends Component {
  // articles = [
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: { id: "espn-cric-info", name: "ESPN Cric Info" },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  render() {
    let { title, discription, image, url, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "300px" }}>
          <img
            src={
              !image
                ? "https://c.ndtvimg.com/2023-07/qrsjr5tg_helicopter-crash-manang-air-crash_625x300_11_July_23.jpg"
                : image
            }
            className="card-img-top"
            alt="..."
            style={{ height: '200px' }}
          ></img>
          <div className="card-body">
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-dark"
              style={{ zIndex: "0", left: "90%" }}
            >
              {source}
            </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-primary">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
