import React from "react";
import Notes from "./Notes";
import { NoteAPI } from "./apiFiles/NotesAPI";
import { Container } from "react-bootstrap";

export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.fetchNotes();
    this.setState({});
  }

  fetchNotes = async () => {
    const notes = await NoteAPI.get();
    this.setState({ notes });
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="note-list">
        <h2>View All Notes</h2>
        {this.state.notes.map((note) => (
          <Container
            className="container"
            key={note.id}>
            <Notes note={note} />
          </Container>
        ))}
      </div>
    );
  }
}
