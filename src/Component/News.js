import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from "react-top-loading-bar";


export default class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "science",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `News - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updatedata() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=525cea8bffce4154b7e3c751d12dedc8&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  }

  //API call
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=525cea8bffce4154b7e3c751d12dedc8&page=1&pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    //updatedata function with comment clear
    this.updatedata();
  }
  previousclick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=525cea8bffce4154b7e3c751d12dedc8&page=${
    //   this.state.page - 1
    // }
    // &pagesize=${this.props.pagesize}`;
    // this.setState({ loading: true });

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });

    //updatedata function with comment clear
    this.setState({
      page: this.state.page - 1,
    });
    this.updatedata();
  };
  nextclick = async () => {
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pagesize)
    //   )
    // ) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${this.props.category}&apiKey=525cea8bffce4154b7e3c751d12dedc8&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pagesize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }

    //updatedata function with comment clear
    this.setState({
      page: this.state.page + 1,
    });
    this.updatedata();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=525cea8bffce4154b7e3c751d12dedc8&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>
          News-Top {this.capitalizeFirstLetter(this.props.category)} Headline
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          style={{ overflowX: "hidden" }}
        >
          <div className="hlo">
            {/* this is uncomment when u need spinner */}
            {/* !this.state.loading && */}
            {this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 20) : ""}
                    discription={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    image={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0px 20px 0px",
          }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.previousclick}
          >
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark "
            onClick={this.nextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
