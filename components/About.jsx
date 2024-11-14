import Image from "next/image";
import about from "@styles/about.module.scss";

const About = () => {
    return (
        <section className={about.main}>
            <div className={`container ${about.wrapper}`}>
                <div className={about.one}>
                    <h2>About us</h2>
                    <p className={about.text}>
                    Founded in 2016, the Department of 
                    Electrical Engineering at Government
                    Engineering College, Sreekrishnapuram 
                    provides undergraduate and graduate degree 
                    programs. Beyond these core programs, the
                    Department offers faculty development 
                    workshops, short-term training sessions tailored
                    for job seekers, and continuing education
                    opportunities for industry professionals and 
                    academic staff. The Department’s laboratories and 
                    research facilities are continuously updated with state-of-the-
                    art technology.
                    </p>
                </div>
                <div className={about.two}>
                    <Image
                        className={about.desktop}
                        loading="lazy"
                        src="/images/2446237_338492-PADRO2-866.jpg"
                        width={375}
                        height={700}
                        alt="image"
                    />
                    <Image
                        className={about.mobile}
                        loading="lazy"
                        src="/images/illus_1_mobile.svg"
                        width={300}
                        height={280}
                        alt="image"
                    />
                </div>

                <div className={about.three}>
                    <div>
                        <h3>Mission</h3>
                        <p className={about.text}>
                        ❖ To impart high quality education to meet the challenges 
                        in the field of Electrical and Electronics Engineering. <br />
                        ❖ To nurture creativity and transform the 
                        young minds to become competent electrical 
                        engineers. <br />
                        ❖ To inculcate a sense of commitment to 
                        ethical values and a passion to serve
                        the society. <br />
                        ❖ To foster research, innovation 
                        and entrepreneurship 
                        skills.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h3>Vision</h3>
                        <p className={about.text}>
                        To become a Centre of Excellence in Electrical Engineering and allied 
                        disciplines for the service of the society.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
