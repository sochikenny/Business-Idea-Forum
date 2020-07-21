import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <div className="jumbotron jumbotron-fluid HomePageHero  kenburns-top">
      </div> 
      <Row tag="Gradient">
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
