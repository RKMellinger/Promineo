import React from "react";

let COMMENT_CALL =
  "https://63502b28df22c2af7b657cd0.mockapi.io/current/comments";

class COMMENT_API {
  //makes the api call to get the comments
  get = async () => {
    try {
      const response = await fetch(COMMENT_CALL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the get method", error);
    }
  };

  update = async (comment) => {
    //updates the comments
    try {
      const response = await fetch(COMMENT_CALL + "/" + comment.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: comment.comment }),
      });
      return await response.json();
    } catch (error) {
      console.log("There is an error in the update method", error);
    }
  };

  post = async (comment) => {
    //posts the comments
    console.log("line 33", comment);
    try {
      const response = await fetch(COMMENT_CALL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the post method", error);
    }
  };

  delete = async (id) => {
    //deletes the comments
    try {
      const response = await fetch(COMMENT_CALL + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the delete method", error);
    }
  };
}
export const Comment_API = new COMMENT_API();
console.log(Comment_API.name);
