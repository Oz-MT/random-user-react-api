import "./Card.scss";
import cell from "../assets/phone.svg";
import mail from "../assets/email.svg";
import location from "../assets/location.svg";

const Card = ({ user }) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    phone,
    location: { country, city },
    dob: { age },
    registered: { date },
  } = user;

  return (
    <div className="content">
      <div className="photo">
        <img src={medium} alt="img" />
        <p>
          {title} {first} {last}
        </p>
      </div>
      <div className="info">
        <p>
          <img src={mail} alt="mail" /> {email}
        </p>
        <p>
          <img src={cell} alt="phone" /> {phone}
        </p>
        <p>
          <img src={location} alt="location" /> {country} {city}
        </p>
      </div>
      <div className="age">
          <p>
            Age : <span>{age}</span>{" "}
          </p>
          <p>
            Register Date : <span>{date.slice(0, 10)}</span>{" "}
          </p>
      </div>
      
    </div>
  );
};

export default Card;
