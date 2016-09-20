import React, {PropTypes} from 'react';

class Container extends React.Component {

  render() {
    return (<div className="container">
        <div className="blog-header">
          <h1 className="blog-title">The Bootstrap Blog</h1>
          <p className="lead blog-description">The official example template of creating a blog with Bootstrap.</p>
        </div>

        <div className="row">
          <div className="col-sm-8 blog-main">
            <div className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">January 1, 2014 by <a
                href="#">Mark</a>
              </p>

              <p>This blog post shows a few different types of content that's supported and styled with Bootstrap.
                Basic typography, images, and code are all supported.</p>
              <hr/>
              <p>Cum sociis natoque penatibus et magnis <a href="#">dis
                parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
                lacinia
                quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur
                purus
                sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                  ornare
                  vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <h2>Heading</h2>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.</p>
              <h3>Sub-heading</h3>
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <pre><code>Example code block</code></pre>
              <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
              <h3>Sub-heading</h3>
              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                lacinia
                bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus.</p>
              <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                augue.</p>
              <ol>
                <li>Vestibulum id ligula porta felis euismod semper.</li>
                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
              </ol>
              <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
            </div>
            {/*End of the blog post*/}

            <div className="blog-post">
              <h2 className="blog-post-title">Another blog post</h2>
              <p className="blog-post-meta">December 23, 2013 by <a
                href="#">Jacob</a></p>

              <p>Cum sociis natoque penatibus et magnis <a href="#">dis
                parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
                lacinia
                quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur
                purus
                sit amet fermentum.</p>
              <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong>
                  ornare
                  vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              </blockquote>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.</p>
            </div>
            {/*/.blog-post*/}

            <div className="blog-post">
              <h2 className="blog-post-title">New feature</h2>
              <p className="blog-post-meta">December 14, 2013 by <a
                href="#">Chris</a></p>

              <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                lacinia
                bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus.</p>
              <ul>
                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
              </ul>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
              <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                augue.</p>
            </div>
            {/*End of the blog post*/}

            <nav>
              <ul className="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </nav>

          </div>
          {/*End of Blog main*/}

          <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div className="sidebar-module sidebar-module-inset">
              <h4>About</h4>
              <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet
                fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
            <div className="sidebar-module">
              <h4>Archives</h4>
              <ol className="list-unstyled">
                <li><a href="#">March 2014</a></li>
                <li><a href="#">February 2014</a></li>
                <li><a href="#">January 2014</a></li>
                <li><a href="#">December 2013</a></li>
                <li><a href="#">November 2013</a></li>
                <li><a href="#">October 2013</a></li>
                <li><a href="#">September 2013</a></li>
                <li><a href="#">August 2013</a></li>
                <li><a href="#">July 2013</a></li>
                <li><a href="#">June 2013</a></li>
                <li><a href="#">May 2013</a></li>
                <li><a href="#">April 2013</a></li>
              </ol>
            </div>
            <div className="sidebar-module">
              <h4>Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>
          {/*/.blog-sidebar*/}

        </div>
        {/*End of row*/}
      </div>
    );
  }

}

Container.propTypes = {};

Container.defaultProps = {};

export default Container;
