import styles from "@styles/programs.module.scss";
import Image from "next/image";

const Programs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image_section}>
                <Image src="/images/ellipse.svg" width={370} height={370} />
            </div>
            <div className={styles.content}>
                <h1>Programs</h1>
                <br />
                <h2> B.Tech. in Electrical & Electronics Engineering</h2>
                <br />
                <p>
                The Bachelor's of Technology in Electrical and Electronics Engineering 
                (B.Tech in EEE) is a four-year undergraduate program that delves into the 
                design, analysis, and application of electrical and electronic systems. 
                Students gain expertise in power generation and distribution, circuit design, 
                electronics, and control systems.
                </p>
                <br />
                <br />
                <h2>M.Tech. in Electrical Drives & Control</h2>
                <br />
                <p>
                The M.Tech. programme in Electrical Drives and Control is designed to provide 
                students with a thorough understanding of both theoretical and practical aspects 
                of electrical drives and control systems. It aims to equip them with advanced 
                skills required for pursuing research in the field, as well as for employment 
                in industries related to power electronics, drive systems development, and 
                industrial automation. Additionally, the programme prepares students for 
                opportunities in the rapidly growing electric vehicle and energy sectors. 
                Graduates are also well-positioned for academic careers, qualifying them for 
                faculty positions at prestigious institutions.
                </p>
            </div>
            <div className={styles.card_section}>
                <h3>Bachelor</h3>
                <div className={styles.card}>
                    <p>Bachelor</p>
                    <h3>Bachelor’s of Technology in Electrical & Electronics Engineering</h3>
                </div>
                <br />
                <br />
                <h3>Master</h3>
                <div className={styles.card}>
                    <p>Master</p>
                    <h3>Master’s of Technology in Electrical & Electronics Engineering</h3>
            </div>
            </div>
        </div>
    );
};

export default Programs;
