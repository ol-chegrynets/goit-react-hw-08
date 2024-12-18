import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <section className={s.section}>
      <div className={s.sectionWrapper}>
        <h1 className={s.title}>Welcome to Phonebook!</h1>
        <p className={s.text}>Create your own personal book of contacts</p>
      </div>
    </section>
  );
};

export default HomePage;
