import styles from "@styles/opertunities.module.scss";
import Image from "next/image";

const Opportunities = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img_section}>
                <img src="/images/illus_2.svg" alt="img" />
            </div>
            <div className={styles.content}>
                <h1>Opportunities</h1>
                <p>
                The EEE department offers extensive career opportunities in research, power electronics, 
                industrial automation, electric vehicles, and the energy sector. Graduates can pursue 
                advanced studies or roles in industries like IT, electronic circuit design, and 
                power systems. With hands-on experience from state-of-the-art labs in control 
                systems, robotics, and power systems, students are well-prepared for real-world 
                challenges. The department's IEEE Student Branch, along with workshops and 
                expert talks, further enriches their practical skills and industry readiness, 
                fostering well-rounded professionals.
                </p>
            </div>
        </div>
    );
};

export default Opportunities;
