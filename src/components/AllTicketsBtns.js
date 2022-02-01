import {
  AddNote,
  Close,
  Delete,
  Forward,
  Merge,
  More,
  Reply,
  Star,
} from "./Svg";

const ButtonGroup = () => {
  //star, Reply, Add Note, Forward, Close, Merge, Delete, More
  return (
    <div className="flex">
      <button className="btn-svg mx-10">
        <Star />
      </button>

      <button className="btn-svg no-right-border">
        Reply
        <Reply />
      </button>

      <button className="btn-svg no-right-border">
        Add Note
        <AddNote />
      </button>

      <button className="btn-svg no-right-border">
        Forward
        <Forward />
      </button>

      <button className="btn-svg no-right-border">
        Close
        <Close />
      </button>

      <button className="btn-svg no-right-border">
        Merge
        <Merge />
      </button>

      <button className="btn-svg">
        Delete
        <Delete />
      </button>

      <button className="btn-svg mx-10">
        <More />
      </button>
    </div>
  );
};

export default ButtonGroup;
