import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";


function PostsList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="HomeFormDiv">
      <h1 className="HeadingText">All Business Ideas</h1>
      <h4 className="mb-5 mt-4 HeadingText">Click on a post to view</h4>
      {state.posts.length ? (
        <List>
          {state.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              {/* <DeleteBtn onClick={() => removePost(post._id)} /> */}
            </ListItem>
          ))}
        </List>
      ) : (
        <h3 className="HeadingText">You haven't added any posts yet!</h3>
      )}
      <div className="mt-5">
        <Link className="HeadingText LinkText" to="favorites">View Saved Posts</Link>
      </div>
    </div>
  );
}

export default PostsList;
