import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import css from "./Contact.module.css";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id));

  return (
    <>
    <div>
      <div className={css.contactText}>
        <GoPerson />
        <h4>{name}</h4>
      </div>
      <div className={css.contactText}>
        <LuPhone />
        <p className={css.number}>{number}</p>
      </div>
    </div>
    <button className="contactButton"
      onClick={onDelete}
      type='button'
      aria-label='delete button'
    >
      Delete
    </button>
  </>
  );
};

export default Contact;
