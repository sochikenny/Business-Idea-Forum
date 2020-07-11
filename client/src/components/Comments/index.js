import React, { useRef } from 'react';

function Comments() {

    return (
      <div>
        <section>
        <h2>Leave a Comment:</h2>
        <form className="form-group mt-5 mb-5" id="comment">
          <textarea className="form-control mb-5" placeholder="body" />
          <button className="btn btn-success mt-3 mb-5" type="submit">
            Save Post
          </button>
        </form>
        </section>
      </div>
    );
  }
  
  export default Comments;