import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_COMMENT, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function Comments({postId}) {
  const bodyRef = useRef();
  // const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveComment({
      postId,
      body: bodyRef.current.value,
      // author: bodyRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_COMMENT,
          comment: result.data,
        });
      })
      .catch((err) => console.log(err));

    bodyRef.current.value = "";
    // authorRef.current.value = "";
  };

  return (
    <div>
      <section>
        <form
          className="form-group mt-5 mb-5"
          id="comment"
          onSubmit={handleSubmit}
        >
          <h3 className="HeadingText" id="LeaveComment">Leave a Comment:</h3>
          <textarea
            className="form-control"
            ref={bodyRef}
            placeholder="Body"
          />
          {/* <input
            className="form-control mb-5"
            ref={authorRef}
            placeholder="Screen name"
          /> */}
          <button
            className="btn btn-success btn-lg mt-3 mb-5"
            disabled={state.loading}
            type="submit"
          >
            Submit
          </button>
          </form>
      </section>
    </div>
  );
}

export default Comments;
