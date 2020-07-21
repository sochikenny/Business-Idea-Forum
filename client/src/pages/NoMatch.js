import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";


const NoMatch = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h3>Oops! Page not found</h3>
				<h1><span>4</span><span>0</span><span>4</span></h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
		</div>
	</div> 
      </Jumbotron>
        </Col>
      </Row>
              <Link className="pb-3 LinkText btn btn-outline-success" to="/home" type="button">← Back to Login</Link>
    </Container>
  );
};

export default NoMatch;
