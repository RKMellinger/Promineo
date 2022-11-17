import React from "react";
import Notes from "./Notes";
import { NoteAPI } from "./apiFiles/NotesAPI";
import { Container } from "react-bootstrap";

// Creates the notes list for display
export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [props],
      // re-render if notes value changes
      notes: this.props.newNotes,
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
    console.log("NL line 8 state notes", this.state.notes);
    console.log("NL line 9 props", this.props);
    if (this.state.notes !== this.props.newNotes) {
      this.setState({ notes: this.props.newNotes });
    }

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
