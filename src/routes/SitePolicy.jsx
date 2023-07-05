import React from 'react';
import Head from '../components/utils/Head';
import styles from '../styles/SitePolicy.module.css';

const SitePolicy = () => {
  return (
    <section className='container'>
      <Head
        title='Privacy Policy'
        description='Learn about the privacy policy of Delightful Indulgence and how we use your personal information.'
      />
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.paragraph}>
          At Delightful Endulgence, accessible from delightfulindulgence.com,
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by Delightful Endulgence and how we use it.
          <br />
          <br />
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
          <br />
          <br />
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in Delightful Endulgence. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
        <div>
          <h2 className={styles.title2}>Information we collect</h2>
          <p className={styles.paragraph}>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
            <br />
            <br />
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
            <br />
            <br />
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </p>
        </div>
        <div>
          <h2 className={styles.title2}>Exchange of Products</h2>
          <p className={styles.paragraph}>
            Delightful Indulgence products can only be exchanged or canceled
            before the order has been prepared. The request must be made 24
            hours (twenty-four hours) before the delivery date directly at the
            store or by calling +1 505-655-6192.
          </p>
        </div>
        <div>
          <h2 className={styles.title2}>Deadline</h2>
          <p className={styles.paragraph}>
            The deadline starts to be considered from the confirmation of
            payment and release of your order through our channels. You will
            receive an email informing you of payment approval for delivery. We
            remind you that our delivery service serves only the region of our
            store.
          </p>
        </div>
        <div>
          <h2 className={styles.title2}>Changes to This Privacy Policy</h2>
          <p className={styles.paragraph}>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SitePolicy;
