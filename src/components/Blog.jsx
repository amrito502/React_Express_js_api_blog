import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Blog() {
  let [data, setData] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    let response = await fetch(
      "https://jsonplaceholder.org/posts"
    );
    let responseData = await response.json();
    setData(responseData);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <section className="blog-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <h4 className="mb-3">BLOG POSTS : </h4>
              <hr />
              <div className="row">
                {data.slice(0, 6).map((item, index) => {
                  return (
                    <div key={index} className="col-lg-4">
                      <div className="card mb-4" style={{height: "330px"}}>
                        <img className="card-img-top" src="/assets/images/banner-item-05.jpg" alt="" style={{height:"170px"}} />
                        <div className="card-body">
                          <span className="text-warning mb-1" style={{fontSize:"12px"}}>{item.publishedAt}</span>
                          <h6 className="card-title">TK {item.title}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link to="/blogs" className="btn btn-info w-100">View More</Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sidebar-item search">
                    <form id="search_form" name="gs" method="GET" action="#">
                      <input
                        type="text"
                        name="q"
                        className="searchText"
                        placeholder="type to search..."
                      />
                    </form>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="sidebar-item categories">
                    <div className="sidebar-heading">
                      <h2>Categories</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <a href="#">- Nature Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">- Awesome Layouts</a>
                        </li>
                        <li>
                          <a href="#">- Creative Ideas</a>
                        </li>
                        <li>
                          <a href="#">- Responsive Templates</a>
                        </li>
                        <li>
                          <a href="#">- HTML5 / CSS3 Templates</a>
                        </li>
                        <li>
                          <a href="#">- Creative &amp; Unique</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item tags">
                    <div className="sidebar-heading">
                      <h2>Tag Clouds</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <a href="#">Lifestyle</a>
                        </li>
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">HTML5</a>
                        </li>
                        <li>
                          <a href="#">Inspiration</a>
                        </li>
                        <li>
                          <a href="#">Motivation</a>
                        </li>
                        <li>
                          <a href="#">PSD</a>
                        </li>
                        <li>
                          <a href="#">Responsive</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
