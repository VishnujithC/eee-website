import FacilityCard from "./FacilityCard";
import styles from "@styles/facilitySection.module.scss";
import getDetailsFromFirebase from "@util/getDetailsFromFirebase";
import { cookies } from 'next/headers'


const AssociationSection = async () => {
  const cookieStore = cookies()
  const achievements = await getDetailsFromFirebase("association");
  return (
    <div className={`container py-4 ${styles.wrapper}`}>
      {achievements.map((achievement) => (
        <FacilityCard
        key={achievement.id}
          image={achievement.image}
          heading={achievement.title}
          text={achievement.para}
        />
      ))}
    </div>
  );
};

export default AssociationSection;
