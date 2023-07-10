import React from 'react';
import styles from '../styles/Contact.module.css';
import Input from '../components/utils/Input';
import TextArea from '../components/utils/TextArea';
import useForm from '../Hooks/useForm';
import {
  IoLocationOutline,
  IoTimeOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import Head from '../components/utils/Head';

const Contact = () => {
  const name = useForm();
  const surname = useForm();
  const email = useForm('email');
  const phone = useForm('phone');
  const subject = useForm();
  const message = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();

    const alertMessage = `Thank you for contacting us. But this is all fake. The form doesn't work!`;
    alert(alertMessage);
    location.reload();
  };

  return (
    <section className={`container ${styles.section}`}>
      <Head
        title='Contact Us'
        description='This is the best way to contact us. Be it to order, complain, get in touch, or just want to say hi. Do not hesitate to reach out to us.'
      />
      <h1 className='title'>Contact</h1>
      <div className={styles.grid}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input type='text' name='name' placeholder='First Name' {...name} />
          <Input
            type='text'
            name='surname'
            placeholder='Last Name'
            {...surname}
          />
          <Input
            type='email'
            name='email'
            placeholder='contact@email.com'
            {...email}
          />
          <Input
            type='text'
            name='subject'
            placeholder='Subject'
            {...subject}
          />
          <Input type='text' name='phone' placeholder='Phone' {...phone} />
          <TextArea
            name={message}
            placeholder='Message'
            rows={5}
            cols={10}
            {...message}
          />
          <button className={styles.button}>Send</button>
        </form>
        <div className={styles.separator}></div>
        <article className={styles.info}>
          <div className={styles.address}>
            <IoLocationOutline size={25} fill='#EFC620' color='#EFC620' />
            <ul>
              <li>495 Prospect Ave - #510</li>
              <li>West Orange, New Mexico</li>
              <li>07052</li>
            </ul>
          </div>
          <hr aria-hidden='true' className={styles.listSeparator} />
          <div className={styles.phone}>
            <IoPhonePortraitOutline size={25} fill='#EFC620' color='#EFC620' />
            <p>+1 505-655-6192</p>
          </div>
          <hr aria-hidden='true' className={styles.listSeparator} />
          <div className={styles.workTime}>
            <IoTimeOutline size={25} fill='#EFC620' color='#EFC620' />
            <ul>
              <li>
                <strong>Monday</strong> - 10:00 am to 6:30 pm
              </li>
              <li>
                <strong>Tuesday to Friday</strong> - 9:00 am to 6:30 pm
              </li>
              <li>
                <strong>Saturday</strong> - 9:00 am to 2:00 pm
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
