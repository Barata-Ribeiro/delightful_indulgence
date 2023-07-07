import React, { lazy } from 'react';
import styles from '../styles/Story.module.css';
import story1 from '/assets/images/photos/story/story1.jpg';
import story2 from '/assets/images/photos/story/story2.jpg';
import Image from '../components/utils/Image';
import Head from '../components/utils/Head';

const MissionAndValues = lazy(() => import('../components/MissionAndValues'));

const Story = () => {
  return (
    <>
      <section className={`${styles.story} container`}>
        <Head
          title='Story'
          description='Learn about how Delightful Indulgence came to be. It is a sweet story, rooted in a shared passion for culinary artistry and a common vision to delight people with our delectable creations.'
        />
        <h1 className='title'>Our Story</h1>
        <div className={styles.grid1}>
          <Image src={story1} alt='Woman decorating sweet rose with honey' />
          <p className={styles.paragraph1}>
            Our journey at <span>Delightful</span> Indulgence is a sweet story,
            rooted in a shared passion for culinary artistry and a common vision
            to delight people with our delectable creations.
            <br />
            <br /> Ella Simpson and Samuel Davis first crossed paths at the
            prestigious Le Cordon Bleu culinary institute in Paris. Samuel, an
            aspiring entrepreneur with a deep appreciation for gourmet food, was
            intrigued by Ella&apos;s unique ability to turn simple ingredients
            into extraordinary desserts. Ella, on the other hand, was drawn to
            Samuel&apos;s sharp business acumen and shared love for food.
            <br />
            <br /> Their mutual respect grew into a strong friendship, and they
            spent countless hours discussing how they could transform their
            passion into a venture that others could also enjoy. The dream of
            Delightful Indulgence began to take shape.
            <br />
            <br /> Upon graduation, they decided to bring their vision to life
            and established Delightful Indulgence. Starting from a small home
            kitchen, they worked tirelessly to perfect their secret recipes,
            focusing on quality and innovation. They aspired to create not just
            desserts, but experiences - little indulgences to make life&apos;s
            everyday moments more delightful.
          </p>
        </div>
        <div className={styles.grid2}>
          <div className={styles.paragraphs2}>
            <p className={styles.paragraph2}>
              Ella and Samuel decided to focus on couples because they noticed a
              gap in the market for upscale, gourmet desserts that catered to
              intimate experiences. They believed that sharing food, especially
              dessert, has a unique way of deepening connections. Whether
              it&apos;s an anniversary, a quiet date night in, or simply a
              shared moment of indulgence, they aimed to create desserts that
              make these moments even more memorable.
              <br />
              <br /> Their determination paid off, and Delightful Indulgence is
              now a renowned name, recognized for its commitment to quality and
              customer delight. Ella&apos;s creativity in the kitchen and
              Samuel&apos;s strategic direction have made the company a favorite
              among dessert-loving couples across the country.
            </p>
            <p className={styles.paragraphCall}>
              This is our story, and we are delighted to invite you on our
              journey, one <span>dessert</span> at a time.
            </p>
          </div>
          <Image src={story2} alt='Woman decorating sweet rose with honey' />
        </div>
      </section>
      <MissionAndValues />
    </>
  );
};

export default Story;
