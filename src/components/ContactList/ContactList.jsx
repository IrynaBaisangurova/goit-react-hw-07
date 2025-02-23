import { useSelector } from "react-redux";
import { selectError,
	selectFilteredContacts,
	selectLoading,
 } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";
import Loader from '../Loader/Loader';
 import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const ContactList = () => {
  const loading = useSelector(selectLoading);
	const error = useSelector(selectError);
	const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={c.list}>
      {loading && <Loader />}
      {!loading && contacts && ! error &&
      contacts.map((contact) => (
        <li className={c.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
      {error && < ErrorMessage /> }
    </ul>
 
  );
};

export default ContactList;
