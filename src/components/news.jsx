import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";


const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-02-25&sortBy=publishedAt&apiKey=061340a272864862b5d860161b76bec9"
    );
    let data = await response.json();
    setMyNews(data.articles);
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Enjoy Daily Top - Headlines</h1>
      <Carousel responsive={responsive}>
        {mynews.map((ele, index) => (
          <div key={index} className="card">
            <img
              src={
                ele.urlToImage == null
                  ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*"
                  : ele.urlToImage
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {ele.author === "" ? "Janelle Ash" : ele.author}
              </h5>
              <p className="card-text">{ele.title}</p>
              <a
                href={ele.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default News;
