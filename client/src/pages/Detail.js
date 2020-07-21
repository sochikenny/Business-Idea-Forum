import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Comments from "../components/Comments";
import CommentsList from "../components/CommentsList";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {
  SET_CURRENT_POST,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../utils/actions";

const Detail = (props) => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then((res) => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch((err) => console.log(err));
  }, []);

  const addFavorite = () => {
    dispatch({
      type: ADD_FAVORITE,
      post: state.currentPost,
    });
  };

  const removeFavorite = () => {
    dispatch({
      type: REMOVE_FAVORITE,
      _id: state.currentPost._id,
    });
  };

  return (
    <>
      {state.currentPost ? (
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron id="DetailHero">
                <h1 className="HeadingText"
                    id="DetailTitle">
                  {state.currentPost.title} by {state.currentPost.author}
                </h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row tag="DetailBody">
            <Col size="md-10 md-offset-1">
              <article>
                <h1 className="HeadingText" id="Description">Description:</h1>
                <p className="HeadingText"
                  style={{
                    listStyleType: "none",
                    border: "1px solid #2F4F4F",
                    padding: "8px",
                    margin: "20px 0",
                    position: "relative",
                    justifyContent: "space-between",
                    borderRadius: "5px",
                    lineHeight: "1.8rem",
                    backgroundColor: "aliceblue"
                  }}
                >
                  {state.currentPost.body}
                </p>
            {state.favorites.indexOf(state.currentPost) !== -1 ? (
              <button className="btn btn-danger" onClick={removeFavorite}>
                Remove from Saved!
              </button>
            ) : (
              <button className="btn btn-info btn-lg" onClick={addFavorite}>
                Add to Saved
              </button>
            )}
              </article>
              <hr />
              <CommentsList postId={state.currentPost._id} />
              <br />
              <Comments postId={state.currentPost._id} />
            </Col>
          </Row>
          <Row tag="Footer">
            <Col size="md-2" tag="FooterDiv">
              <Link className="pb-3 LinkText btn btn-outline-success" to="/home" type="button">← Back to Home</Link>
            </Col>
          </Row>
        </Container>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Detail;
