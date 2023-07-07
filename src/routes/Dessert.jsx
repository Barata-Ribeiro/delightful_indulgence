import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/Dessert.module.css';
import Image from '../components/utils/Image';
import { IoHeart } from 'react-icons/io5';
import Loading from '../components/utils/Loading';

// Images
import Cake from '/assets/images/photos/desserts/cake.jpg';
import Truffle from '/assets/images/photos/desserts/truffle.jpg';
import Cheesecake from '/assets/images/photos/desserts/cheesecake.jpg';
import Tart from '/assets/images/photos/desserts/tart.jpg';
import Tiramisu from '/assets/images/photos/desserts/tiramisu.jpg';

const Dessert = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const dessertId = pathname.split('/')[2];

  const [dessert, setDessert] = React.useState({});

  React.useEffect(() => {
    const desserts = [
      {
        id: 'cake',
        src: Cake,
        name: ['Emerald Enchantment', 'Layer Cake'],
        desc: 'The Emerald Layered Extravaganza is a luxurious three-layered matcha cake, filled with lush cream cheese frosting, and topped with vibrant fresh strawberries. Its distinctive green and white palette offers a visual treat, with flavors that are equally delightful.',
        sweetness: 4,
        ingredients:
          'Green Tea Matcha Powder, All-purpose Flour, Baking Powder, Salt, Unsalted Butter, Granulated Sugar, Eggs, Vanilla Extract, Whole Milk, Cream Cheese, Powdered Sugar, Lemon Zest, Fresh Strawberries.',
        size: 'Slice — 2.5-3 inches wide and 3-4 inches tall, Cake — 6-10 inches in diameter and 2-4 inches tall',
        priceTag1: '$3.50',
        priceTag2: '$175',
      },
      {
        id: 'truffle',
        src: Truffle,
        name: ['Gourmet', 'Chocolate Truffle'],
        desc: "Our Gourmet Chocolate Truffle is a true chocolate lover's delight. Encased in high-quality cocoa powder, this truffle is filled with luscious, silky chocolate ganache crafted from premium dark chocolate, fresh cream, and a hint of pure vanilla extract. Perfectly sized for two, this dessert is an indulgence worth sharing.",
        sweetness: 4,
        ingredients:
          'Dark Chocolate, Heavy Cream, Vanilla Extract, Cocoa Powder',
        size: 'Truffle — 0.5-1 inch in diameter',
        priceTag1: '$2.50',
        priceTag2: '$50',
      },
      {
        id: 'cheesecake',
        src: Cheesecake,
        name: ['Ruby Berry', 'Cheesecake'],
        desc: 'Our Ruby Berry Cheesecake is a modern twist on a classic dessert. A buttery, crisp graham cracker crust holds a velvety layer of rich cheesecake, perfectly balanced by a topping of fresh, tart berries. Ideal for a cozy date night, this cheesecake is sweet without being overly rich.',
        sweetness: 3,
        ingredients:
          'Graham Crackers, Unsalted Butter, Cream Cheese, Sugar, Eggs, Vanilla Extract, Fresh Berries',
        size: 'Slice — 2.5-3 inches wide and 1.5-2.5 inches tall, Whole Dessert — 8-10 inches in diameter and 1.5-3 inches tall',
        priceTag1: '$4.00',
        priceTag2: '$32',
      },
      {
        id: 'tiramisu',
        src: Tiramisu,
        name: ['Decadent', 'Tiramisu'],
        desc: 'Our Decadent Tiramisu pays tribute to the timeless Italian dessert. It features espresso-dipped ladyfingers interlaid with a creamy mascarpone mixture, topped off with a dusting of cocoa powder. This dessert, rich in flavor yet light in texture, is an excellent end to a romantic dinner.',
        sweetness: 2,
        ingredients:
          'Ladyfingers, Espresso, Mascarpone Cheese, Egg Yolks, Sugar, Cocoa Powder',
        size: 'Slice — 2.5-3.5 inches wide and 1.5-2.5 inches tall, Whole Dessert — 8-9 inches by 8-9 inches and 2-3 inches tall',
        priceTag1: '$3.75',
        priceTag2: '$30',
      },
      {
        id: 'tart',
        src: Tart,
        name: ['Tropical Coconut', 'Tart'],
        desc: 'The Tropical Coconut Tart brings a touch of the tropics to your day. A rich, creamy coconut filling is encased in a buttery, crisp tart shell, topped with a final dusting of toasted coconut flakes. Perfect for a summer dessert on the patio or a cozy winter indulgence by the fireplace.',
        sweetness: 3,
        ingredients:
          'Flour, Unsalted Butter, Sugar, Salt, Coconut Cream, Shredded Coconut, Vanilla Extract',
        size: 'Slice — 2.5-3.5 inches wide and 1.5-2.5 inches tall, Whole Dessert — 8-10 inches in diameter and 1-2 inches tall',
        priceTag1: '$3.25',
        priceTag2: '$26',
      },
    ];

    const currentDessert = desserts.find((dessert) => dessert.id === dessertId);

    if (currentDessert) setDessert(currentDessert);
  }, [dessertId]);

  const heartColor = dessert.sweetness ? '#C78C0E' : '#B0B5B3';
  const hearts = new Array(5)
    .fill(0)
    .map((_, i) => (
      <IoHeart
        size={20}
        key={`heart-${i}`}
        color={i < dessert.sweetness ? heartColor : '#B0B5B3'}
      />
    ));

  return (
    <section className={`container ${styles.section}`}>
      {dessert.id ? (
        <div>
          <div className={styles.grid1}>
            <Image src={dessert.src} alt={`photo}`} />
            <div className={styles.dessert}>
              <h2 className={styles.name}>
                <span className={styles.firstName}>{dessert.name[0]}</span>{' '}
                {dessert.name[1]}
              </h2>
              <div className={styles.info}>
                <p className={styles.desc}>{dessert.desc}</p>
                <div className={styles.sweetness}>
                  <p className={styles.sweetnessHearts}>
                    {hearts}
                    <span>Sweetness</span>
                  </p>
                </div>
                <div className={styles.ingredientsWrapper}>
                  <p className={styles.ingredientsTitle}>Ingredients</p>
                  <p className={styles.ingredients}>{dessert.ingredients}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid2}>
            <div className={styles.info2}>
              <div className={styles.size}>
                <p>Size</p>
                <p>{dessert.size}</p>
              </div>
              <div className={styles.rec}>
                <p>Recommendation</p>
                <p>
                  Consume within 03 days, store under refrigeration, accepts
                  freezing.
                </p>
              </div>
            </div>
            <div className={styles.price}>
              <div className={styles.priceTags}>
                <p>
                  $3.50<span>/unit</span>
                </p>
                <p>
                  $175<span>/full</span>
                </p>
              </div>
              <p className={styles.priceDesc}>
                Make your order through our contact form or directly with us by
                phone!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Dessert;
