import styles from "@styles/facultyCard.module.scss";

const AssociationCard = ({ name, designation, image, email, phone }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt="faculty" />
      <div className={styles.details_section}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{designation}</p>
        <hr />
      </div>
    </div>
  );
};

export default AssociationCard;
