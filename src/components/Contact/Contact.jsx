import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { LuPhone } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import c from "./Contact.module.css";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const onDelete = () => dispatch(deleteContact(id)); 


  return (
    <>
    <div>
      <div className={c.contactText}>
        <GoPerson />
        <h4 className={c.title}>{name}</h4>
      </div>
      <div className={c.contactText}>
        <LuPhone />
        <p className={c.number}>{number}</p>
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



