import c from  './App.module.css';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';

export default function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);
  return (
    <div className={c.container}>
      <h1 className={c.title}>Phone-book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
