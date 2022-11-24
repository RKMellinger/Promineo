import React from "react";

let COMMENT_CALL =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/comments";

// Comment_API function to handle all api calls for comments
function CommentAPI() {
  //get comments
  const get = async () => {
    const response = await fetch(COMMENT_CALL);
    const data = await response.json();
    return data;
  };

  //post comments
  const post = async (comment) => {
    const response = await fetch(COMMENT_CALL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data;
  };

  //update comments
  const update = async (comment) => {
    const response = await fetch(`${COMMENT_CALL}/${comment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    return data;
  };

  //delete comments
  const deleteComment = async (id) => {
    const response = await fetch(`${COMMENT_CALL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  };

  return {
    get,
    post,
    update,
    delete: deleteComment,
  };
}

//create export for CommentAPI function to be used in other components
export default CommentAPI;
