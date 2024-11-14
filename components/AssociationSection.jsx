import styles from "@styles/acheivementsSection.module.scss";
import FacultyCard from "./FacultyCard";
import Image from "next/image";
import getDetailsFromFirebase from "@util/getDetailsFromFirebase";
import { cookies } from "next/headers";

const AssociationSection = async () => {
  const cookieStore = cookies();
  const faculties = await getDetailsFromFirebase("association");

  return (
    <div className={styles.main_wrapper}>
      <h3 className={styles.heading}>Core Team</h3>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img
            src="./images/Association.jpg"
            alt="faculty"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AssociationSection;