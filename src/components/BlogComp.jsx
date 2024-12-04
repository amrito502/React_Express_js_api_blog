import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
function BlogComp() {
  let [data, setData] = useState(null);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    let response = await fetch("https://jsonplaceholder.org/posts");
    let responseData = await response.json();
    setData(responseData);
  };

  if (!data) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="blog-posts">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="all-blog-posts">
              <strong className="mb-3">ALL BLOG POSTS : </strong>
              <hr />
              <div className="row mt-2">
                {data.map((item, index) => {
                  return (
                    <div className="col-lg-12" key={index}>
                      <div className="blog-post">
                        <div className="blog-thumb">
                          {/* <img src="assets/images/blog-post-01.jpg" alt="" /> */}
                          <img src="/assets/images/banner-item-05.jpg" alt="" />
                        </div>
                        <div className="down-content">
                          <span>{item.slug}</span>
                          <a href="post-details.html">
                            <h4>{item.title}</h4>
                          </a>
                          <ul className="post-info">
                            <li>
                              <a href="#">Admin</a>
                            </li>
                            <li>
                              <a href="#">{item.publishedAt}</a>
                            </li>
                            <li>
                              <a href="#">{item.status}</a>
                            </li>
                          </ul>
                          <p>
                            {item.content}
                          </p>
                          <div className="post-options">
                            <div className="row">
                              <div className="col-6">
                                <ul className="post-tags">
                                  <li>
                                    <i className="fa fa-tags"></i>
                                  </li>
                                  <li>
                                    <a href="#">Beauty</a>,
                                  </li>
                                  <li>
                                    <a href="#">Nature</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-6">
                                <ul className="post-share">
                                  <li>
                                    <i className="fa fa-share-alt"></i>
                                  </li>
                                  <li>
                                    <a href="#">Facebook</a>,
                                  </li>
                                  <li>
                                    <a href="#"> Twitter</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                        autocomplete="on"
                      />
                    </form>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="sidebar-item recent-posts">
                    <div className="sidebar-heading">
                      <h2>Recent Posts</h2>
                    </div>
                    <div className="content">
                      <ul>
                        <li>
                          <a href="post-details.html">
                            <h5>
                              Vestibulum id turpis porttitor sapien facilisis
                              scelerisque
                            </h5>
                            <span>May 31, 2020</span>
                          </a>
                        </li>
                        <li>
                          <a href="post-details.html">
                            <h5>
                              Suspendisse et metus nec libero ultrices varius
                              eget in risus
                            </h5>
                            <span>May 28, 2020</span>
                          </a>
                        </li>
                        <li>
                          <a href="post-details.html">
                            <h5>
                              Swag hella echo park leggings, shaman cornhole
                              ethical coloring
                            </h5>
                            <span>May 14, 2020</span>
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default BlogComp;
