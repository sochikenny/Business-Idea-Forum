import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, ADD_COMMENT } from "../../utils/actions";
import API from "../../utils/API";

function CommentsList({postId, comments}) {
  const [state, dispatch] = useStoreContext();

  const getComments = () => {
    dispatch({ type: LOADING });
    API.getComments()
      .then(results => {
        dispatch({
         postId,
          type: ADD_COMMENT,
          comments: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getComments();
  }, []);
//  console.log(state)
  return (
    
    <div>
      <h1>Comments:</h1>
        <section>
         {state.currentPost.comments&&state.currentPost.comments.map(comment => 
         <p>{comment.body}</p>)}
        </section>
     
    </div>
  );
}

export default CommentsList;
