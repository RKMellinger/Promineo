import { MdDeleteForever } from "react-icons/md";
const Notes = () => {
  return (
    <div className="note">
      <span>Notes</span>
      <div className="noteFooter">
        <small>
          <Date></Date>
        </small>
        <MdDeleteForever
          className="delete-icon"
          size="10px"
        />
      </div>
    </div>
  );
};
export default Notes;
