import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    };
  }

  handleItemClick = (id) => {
    this.setState({ activeItem: id });
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark" style={{ position: "fixed", width: "100%", zIndex: "1" }}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/general">
              News
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className={`nav-item ${this.state.activeItem === 'home' ? 'active' : ''}`} onClick={() => this.handleItemClick('home')}>
                  <Link className={`nav-link ${this.state.activeItem === 'home' ? 'text-danger' : 'text-white'}`} aria-current="page" to="/general">Home</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'business' ? 'active' : ''}`} onClick={() => this.handleItemClick('business')}>
                  <Link className={`nav-link ${this.state.activeItem === 'business' ? 'text-danger' : 'text-white'}`} to="/business">Business</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'entertainment' ? 'active' : ''}`} onClick={() => this.handleItemClick('entertainment')}>
                  <Link className={`nav-link ${this.state.activeItem === 'entertainment' ? 'text-danger' : 'text-white'}`} to="/entertainment">Entertainment</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'general' ? 'active' : ''}`} onClick={() => this.handleItemClick('general')}>
                  <Link className={`nav-link ${this.state.activeItem === 'general' ? 'text-danger' : 'text-white'}`} to="/general">General</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'health' ? 'active' : ''}`} onClick={() => this.handleItemClick('health')}>
                  <Link className={`nav-link ${this.state.activeItem === 'health' ? 'text-danger' : 'text-white'}`} to="/health">Health</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'science' ? 'active' : ''}`} onClick={() => this.handleItemClick('science')}>
                  <Link className={`nav-link ${this.state.activeItem === 'science' ? 'text-danger' : 'text-white'}`} to="/science">Science</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'sports' ? 'active' : ''}`} onClick={() => this.handleItemClick('sports')}>
                  <Link className={`nav-link ${this.state.activeItem === 'sports' ? 'text-danger' : 'text-white'}`} to="/sports">Sports</Link></li>
                <li className={`nav-item ${this.state.activeItem === 'technology' ? 'active' : ''}`} onClick={() => this.handleItemClick('technology')}>
                  <Link className={`nav-link ${this.state.activeItem === 'technology' ? 'text-danger' : 'text-white'}`} to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

// Same code to upper
// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg bg-dark" style={{ position: "fixed", width: "100%", zIndex: "1" }}>
//           <div className="container-fluid">
//             <Link className="navbar-brand text-white" to="/general">
//               News
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//               style={{ backgroundColor: "white" }}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item"><Link className="nav-link active text-white" aria-current="page" to="/general">Home</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/general">General</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/health">Health</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
//                 <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
//               </ul>
//               {/* <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </form> */}
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }