import React from "react";
import Movies from "./Movies";
import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";

export default props => {
  return (
    <div>
      {!props.searchClicked && (
        <Jumbotron>
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <h1>
                  Welcome to MovieDex!
                  <img
                    src={require("../img/Fake-logo.png")}
                    responsive
                    width="100"
                    className="slight-right"
                    alt="logo"
                  />
                </h1>
                <p>
                  This is a simple site built using the OMDb API. Feel free to
                  use the search bar above to access a huge database of movies
                </p>
                <p>
                  <Button
                    bsStyle="primary"
                    href="http://www.omdbapi.com/"
                    target="_blank">
                    Learn more
                  </Button>
                </p>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
      )}
      <Movies movies={props.movies} searchClicked={props.searchClicked} />
    </div>
  );
};
