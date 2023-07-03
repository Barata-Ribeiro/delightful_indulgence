import React from 'react';
import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import GradientButton from '../components/utils/GradientButton';
import MenuItem from '../components/MenuItem';
import Image from '../components/utils/Image';
import MissionImage from '../assets/images/photos/home/mission&values.jpg';
import { ReactComponent as TargetIcon } from '../assets/images/icons/target.svg';
import { ReactComponent as DiamondIcon } from '../assets/images/icons/diamond.svg';
import Head from '../components/utils/Head';

const Home = () => {
  const [activeText, setActiveText] = React.useState(false);

  const handleClick = () => {
    setActiveText((current) => !current);
  };

  const dessertMenu = [
    {
      id: 'truffle',
      name: ['Gourmet', 'Chocolate Truffle'],
      description: 'Luxuriously rich and smooth chocolate truffle',
      src: '/src/assets/images/photos/home/menu/menuTruffle.jpg',
    },
    {
      id: 'cheesecake',
      name: ['Ruby Berry', 'Cheesecake'],
      description: 'Creamy cheesecake infused with tart, fresh berries',
      src: '/src/assets/images/photos/home/menu/menuCheesecake.jpg',
    },
    {
      id: 'cake',
      name: ['Emerald Enchantment', 'Layer Cake'],
      description:
        'Our Emerald Enchantment Layer Cake combines a vibrant, pistachio-infused sponge with a creamy filling and fresh strawberry topping - a truly enchanting indulgence.',
      src: '/src/assets/images/photos/home/menu/menuCake.jpg',
    },
    {
      id: 'tiramisu',
      name: ['Decadent', 'Tiramisu'],
      description: 'Heavenly, rich and fluffy tiramisu with a hint of espresso',
      src: '/src/assets/images/photos/home/menu/menuTiramisu.jpg',
    },
    {
      id: 'tart',
      name: ['Tropical', 'Coconut Tart'],
      description: 'Creamy, rich tropical coconut tart for a touch of sunshine',
      src: '/src/assets/images/photos/home/menu/menuTart.jpg',
    },
  ];

  const teamMembers = [
    {
      id: 'ella-simpson',
      name: ['Ella', 'Simpson'],
      role: 'Co-founder and Head Chef',
      description:
        "Ella is a culinary genius whose passion lies in crafting irresistible dessert recipes. She ensures every treat shipped from our kitchen is a piece of pure delight. Ella loves hiking when she's not in the kitchen.",
      src: '/src/assets/images/photos/home/team/ella-simpson.jpg',
    },
    {
      id: 'samuel-davis',
      name: ['Samuel', 'Davis'],
      role: 'Co-founder and Operations Manager',
      description:
        'Samuel’s expertise lies in ensuring the smooth running of the business and that our delicious creations reach your doorstep in perfect condition. Samuel is a certified coffee aficionado and enjoys reading in his spare time.',
      src: '/src/assets/images/photos/home/team/samuel-davis.jpg',
    },
    {
      id: 'oliver-thompson',
      name: ['Oliver', 'Thompson'],
      role: 'Marketing',
      description:
        'Oliver is the creative brain behind our brand image. He’s always on the lookout for innovative ways to share the joy of our desserts with the world. Oliver enjoys photography and running during his time off.',
      src: '/src/assets/images/photos/home/team/oliver-thompson.jpg',
    },
    {
      id: 'ava-wilson',
      name: ['Ava', 'Wilson'],
      role: 'Customer Success Manager',
      description:
        'Ava’s warm and inviting personality shines through as she provides top-notch support to our valued customers. She ensures your experience with Delightful Indulgence is nothing short of perfect. Ava is a dedicated yoga practitioner.',
      src: '/src/assets/images/photos/home/team/ava-wilson.jpg',
    },
  ];

  const testimonials = [
    {
      id: 'ethan-&-mia',
      testimonial: `We ordered the Emerald Layered Extravaganza for our anniversary, and it was nothing short of divine. The blend of flavors was just perfect - a testament to Delightful Indulgence's commitment to quality. Their desserts have become a staple in our special moments.`,
      coupleName: ['Ethan', 'Mia'],
      src: '/src/assets/images/photos/home/clients/clients1.jpg',
    },
    {
      id: 'lucas-&-sophia',
      testimonial: `The Decadent Tiramisu is an absolute must-try! It brought a little piece of Italy to our doorstep. From the seamless ordering process to the delicious dessert, our experience with Delightful Indulgence was top-notch.`,
      coupleName: ['Lucas', 'Sophia'],
      src: '/src/assets/images/photos/home/clients/clients2.jpg',
    },
    {
      id: 'jill-&-ava',
      testimonial: `We're in love with Delightful Indulgence's Ruby Berry Cheesecake. The perfect balance of creaminess and tangy berries had us savouring every bite. Their attention to detail truly shows in the taste and presentation of their desserts.`,
      coupleName: ['Jill', 'Ava'],
      src: '/src/assets/images/photos/home/clients/clients3.jpg',
    },
    {
      id: 'liam-&-olivia',
      testimonial: `The Tropical Coconut Tart from Delightful Indulgence is a game changer. It's a delightful treat that brings a touch of the tropics to our home. We're definitely looking forward to trying more of their indulgent creations.`,
      coupleName: ['Liam', 'Olivia'],
      src: '/src/assets/images/photos/home/clients/clients4.jpg',
    },
  ];

  return (
    <main id='home' aria-label='Home Page' className={styles.home}>
      <Head
        title='Home'
        description='Welcome! Discover the joy of gourmet desserts with the Delightful Indulgence. The best ones that will certainly sweeten your heart.'
      />
      <section aria-label='Hero' className={styles.hero}>
        <div className={styles.heroContent}>
          <p>
            Discover the joy of gourmet desserts with the{' '}
            <span>Delightful</span> Indulgence!
          </p>
          <Link to='/story'>
            <GradientButton text='How it Began' />
          </Link>
        </div>
      </section>
      <section
        aria-label='Dessert Menu'
        id='menu'
        className={`${styles.menu} container`}
      >
        <h1 className='title'>Menu</h1>
        <p className={styles.description}>
          We are dedicated to crafting indulgent treats made with our secret
          recipes, which are sure to delight and surprise. Let us help you
          create memorable moments with our curated selection of desserts,
          shipped right to your doorstep.
        </p>
        <ul className={styles.menuList}>
          {dessertMenu.map((dessert) => (
            <li key={dessert.id} className={styles.menuListItem}>
              <MenuItem
                dessert={dessert}
                dessertSrc={dessert.src}
                dessertAlt={dessert.description}
              />
            </li>
          ))}
        </ul>
      </section>
      <hr className='separator' />
      <section
        aria-label='Team Members'
        id='team'
        className={`${styles.team} container`}
      >
        <h1 className='title'>Team</h1>
        <ul className={styles.teamContainer}>
          {teamMembers.map((member) => (
            <li key={member.id} className={styles.teamMember}>
              <Image
                src={member.src}
                alt={`Profile picture of ${member.name[0]} ${member.name[1]}`}
                className={styles.teamMemberImage}
              />
              <div className={styles.teamContent}>
                <div className={styles.teamMember}>
                  <h2 className={styles.teamMemberName}>
                    <span className={styles.firstName}>{member.name[0]}</span>{' '}
                    {member.name[1]}
                  </h2>
                  <p className={styles.teamMemberRole}>{member.role}</p>
                </div>
                <p className={styles.teamMemberDescription}>
                  {member.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <hr className='separator' />
      <section
        aria-label='Clients Testimonials'
        id='testimonials'
        className={`${styles.testimonials} container`}
      >
        <h1 className='title'>What clients are saying...</h1>
        <div className={styles.testimonialsContainer}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <Image
                className={styles.testimonialImage}
                src={testimonial.src}
                alt={`Profile picture of ${testimonial.coupleName[0]} & ${testimonial.coupleName[1]}`}
              />
              <p className={styles.testimonialDescription}>
                {testimonial.testimonial}
              </p>
              <h2 className={styles.testimonialName}>
                {testimonial.coupleName[0]}
                <span className={styles.testimonialNameSep}>&</span>
                {testimonial.coupleName[1]}
              </h2>
            </div>
          ))}
        </div>
      </section>
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
                ingredients to create our desserts. Quality is not just a
                standard - it&apos;s our promise.
              </li>
              <li>
                <strong>Innovation:</strong> We continually seek to bring new,
                exciting flavors to our customers, blending traditional
                techniques with modern culinary trends.
              </li>
              <li>
                <strong>Customer Delight:</strong> Our aim is not just to
                satisfy but to delight our customers with our desserts and our
                service.
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
    </main>
  );
};

export default Home;
