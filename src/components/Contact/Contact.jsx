import s from './Contact.module.css';
import { ImPhone, ImUser } from 'react-icons/im';

const Contact = ({ name, phone, deleteContacts, id }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.textWrap}>
        <div className={s.dataWrap}>
          <ImUser className={s.icon} size="24" />
          <p className={s.contactName}>{name}</p>
        </div>
        <div className={s.dataWrap}>
          <ImPhone className={css.icon} size="20" />
          <p className={s.contactPhone}>{phone}</p>
        </div>
      </div>
      <button
        type="button"
        className={s.deleteContactBtn}
        onClick={() => deleteContacts(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
