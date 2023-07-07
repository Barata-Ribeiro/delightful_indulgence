import React from 'react';
import Image from './utils/Image';
import styles from '../styles/components/missionandvalues.module.css';

// MISSION AND VALUES IMAGE
import MissionImage from '/assets/images/photos/home/mission&values.jpg';
import { ReactComponent as TargetIcon } from '/src/assets/icons/target.svg';
import { ReactComponent as DiamondIcon } from '/src/assets/icons/diamond.svg';

const MissionAndValues = () => {
  const [activeText, setActiveText] = React.useState(false);

  const handleClick = () => setActiveText((current) => !current);

  return (
    <section
      aria-label="Company's Mission and Values"
      id='mission-and-values'
      className={`${styles.missionValues} container`}
    >
      <div className={styles.missionValuesWrapper}>
        <div className={styles.selectors}>
          <p
            onClick={handleClick}
            className={activeText ? '' : `${styles.activeText}`}
          >
            <TargetIcon /> Our Mission
          </p>
          <p
            onClick={handleClick}
            className={activeText ? `${styles.activeText}` : ''}
          >
            <DiamondIcon /> Our Values
          </p>
        </div>
        <div className={styles.missionValuesText}>
          <p className={activeText ? '' : `${styles.activeText}`}>
            Our mission at <span>Delightful</span> Indulgence is to create
            memorable moments through our range of delectable desserts. We
            strive to offer the highest quality, using only the finest
            ingredients to craft our unique, secret recipes.
          </p>
          <ol className={activeText ? `${styles.activeText}` : ''}>
            <li>
              <strong>Quality:</strong> We believe in using only the best
              ingredients to create our desserts. Quality is not just a standard
              - it&apos;s our promise.
            </li>
            <li>
              <strong>Innovation:</strong> We continually seek to bring new,
              exciting flavors to our customers, blending traditional techniques
              with modern culinary trends.
            </li>
            <li>
              <strong>Customer Delight:</strong> Our aim is not just to satisfy
              but to delight our customers with our desserts and our service.
            </li>
            <li>
              <strong>Integrity:</strong> We are committed to running our
              business based on honesty, transparency, and respect for our
              customers and team members.
            </li>
          </ol>
        </div>
      </div>
      <Image
        src={MissionImage}
        alt='Several chocolate truffles being covered in chocolate powder.'
        className={styles.missionValuesImage}
      />
    </section>
  );
};

export default MissionAndValues;
