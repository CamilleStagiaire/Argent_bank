// Importer les images en haut de votre fichier
import iconChat from '../../assets/icon-chat.png';
import iconMoney from '../../assets/icon-money.png';
import iconSecurity from '../../assets/icon-security.png';

const Features = () => {
  const featuresData = [
    {
      icon: iconChat,
      iconAlt: 'Chat Icon',
      title: 'You are our #1 priority',
      description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      icon: iconMoney,
      iconAlt: 'Money Icon',
      title: 'More savings means higher rates',
      description: 'The more you save with us, the higher your interest rate will be!'
    },
    {
      icon: iconSecurity,
      iconAlt: 'Security Icon',
      title: 'Security you can trust',
      description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-item">
          <img src={feature.icon} alt={feature.iconAlt} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
