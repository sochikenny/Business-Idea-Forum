import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";


function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  // const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      // author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div className="HomeFormDiv">
      <h1 className="HeadingText">Post your business idea</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-4" required ref={bodyRef} placeholder="Body" rows="5"/>
        <button className="btn btn-success btn-lg mt-4 mb-1" disabled={state.loading} type="submit">
          Save Post
        </button>
      </form>
    
    </div>
  );
}

export default CreatePostForm;
