import React from "react";
import Notes from "./Notes";
import { NoteAPI } from "./apiFiles/NotesAPI";
import { Container } from "react-bootstrap";

// Creates the notes list for display
export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  // gets the notes from the api
  componentDidMount() {
    this.fetchNotes();
    this.setState({});
  }
  fetchNotes = async () => {
    const notes = await NoteAPI.get();
    this.setState({ notes });
  };
  //renders the notes and creates the css grid
  render() {
    console.log(this.state.notes);
    return (
      <div className="note-list">
        <h2>View All Notes</h2>
        <Container className="col">
          {this.state.notes.map((note) => (
            <Notes
              key={note.id}
              note={note}
            />
          ))}
        </Container>
      </div>
    );
  }
}
