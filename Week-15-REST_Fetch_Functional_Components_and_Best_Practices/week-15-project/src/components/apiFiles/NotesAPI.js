let API_CALL = "https://63502b28df22c2af7b657cd0.mockapi.io/current/notepad";

class NotesApi {
  //makes the api call to get the notes
  get = async () => {
    try {
      const response = await fetch(API_CALL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the get method", error);
    }
  };

  update = async (note) => {
    //updates the notes
    try {
      const response = await fetch(API_CALL + "/" + note.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ note: note.note }),
      });
      return await response.json();
    } catch (error) {
      console.log("There is an error in the update method", error);
    }
  };

  post = async (note) => {
    //posts the notes
    try {
      const response = await fetch(API_CALL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("There is an error in the post method", error);
    }
  };

  delete = async (id) => {
    //deletes the notes
    try {
      const response = await fetch(API_CALL + "/" + id, {
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

export const NoteAPI = new NotesApi();
