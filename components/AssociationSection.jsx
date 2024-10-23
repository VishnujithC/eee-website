import styles from "@styles/acheivementsSection.module.scss";
import FacultyCard from "./FacultyCard";
import getDetailsFromFirebase from "@util/getDetailsFromFirebase";
import { cookies } from "next/headers";

const AssociationSection = async () => {
  const cookieStore = cookies()

  const faculties = await getDetailsFromFirebase("association");

  console.log("hello")

  return (
    <div className={styles.main_wrapper}>
      <h3 className={styles.heading}>Core Team</h3>
      <div className={styles.wrapper}>
        {/* {faculties.map((faculty) => { */}
          {/* return ( */}
            <FacultyCard
              // name={faculty.facultyName}
              // image={faculty.image}
              // designation={faculty.facultyDesignation}
            />
          {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
};

export default AssociationSection;
