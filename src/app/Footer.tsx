import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footercontent}>
        <div className={styles.footerheader}>
          <div className={styles.footercompanydetails}>
            <div className={styles.ourHeadOffice}>Our Head Office</div>
            <div className={styles.positionMarker1Parent}>
              <Image
                className={styles.positionMarker1Icon}
                alt=""
                src="/images/position-marker-1.svg"
              />
              <b className={styles.amlinoTechnologyPvt}>
                Amlino Technology Pvt. Ltd.
              </b>
            </div>
            <div className={styles.positionMarker1Parent}>
              <Image
                className={styles.positionMarker1Icon1}
                alt=""
                src="/images/position-marker-1.svg"
              />
              <b className={styles.newDelhiIndia}>New Delhi, India</b>
            </div>
            <div className={styles.positionMarker1Parent}>
              <b className={styles.infoamlinocom1}>info@amlino.com</b>
              <Image
                className={styles.mail3Icon}
                alt=""
                src="/images/mail.svg"
              />
            </div>
            <div className={styles.infoamlinocomGroup}>
              <b className={styles.infoamlinocom2}>info@amlino.com</b>
              <Image
                className={styles.phoneCall1Icon}
                alt=""
                src="/images/phone-call-1.svg"
              />
            </div>
            <div className={styles.socialMedia}>
              <Image
                className={styles.xLogoIcon}
                alt=""
                src="/images/x-logo.svg"
              />
              <Image
                className={styles.xLogoIcon}
                alt=""
                src="/images/facebook-logo.svg"
              />
              <Image
                className={styles.groupIcon}
                alt=""
                src="/images/youtube.svg"
              />
              <Image
                className={styles.xLogoIcon}
                alt=""
                src="/images/linkedin-logo.svg"
              />
            </div>
          </div>
          <div className={styles.footernavlinks}>
            <div className={styles.footercompanyservices}>
              <div className={styles.products}>Services</div>
              <div className={styles.libraryControlSystem}>
                Online Marketing
              </div>
              <div className={styles.webDevelopment}>Web Development</div>
              <div className={styles.payrollControlSystem}>
                Project Management
              </div>
            </div>
            <div className={styles.footeraboutcompany}>
              <div className={styles.products}>Products</div>
              <div className={styles.libraryControlSystem}>
                Library Control System
              </div>
              <div className={styles.webDevelopment}>
                Education Control System
              </div>
              <div className={styles.payrollControlSystem}>
                Payroll Control System
              </div>
            </div>
            <div className={styles.footercompanytechnology}>
              <div className={styles.products}>Technology</div>
              <div className={styles.libraryControlSystem}>Architecture</div>
              <div className={styles.webDevelopment}>Hosting</div>
              <div className={styles.payrollControlSystem}>Integrations</div>
              <div className={styles.securitySso}>{`Security & SSO `}</div>
            </div>
            <div className={styles.footeraboutcompany}>
              <div className={styles.products}>Company</div>
              <div className={styles.libraryControlSystem}>About Us</div>
              <div className={styles.webDevelopment}>Our Team</div>
              <div className={styles.payrollControlSystem}>Careers</div>
            </div>
          </div>
        </div>
        <div className={styles.footerlicense}>
          <div className={styles.footercompanylicense}>
            <div className={styles.amlinoIncAllRightsReservParent}>
              <div className={styles.amlinoIncAll}>
                © 2024 Amlino, Inc. All Rights Reserved
              </div>
              <div className={styles.privacyPolicyParent}>
                <div className={styles.amlinoIncAll}>Privacy Policy</div>
                <div
                  className={styles.amlinoIncAll}
                >{`Terms & Conditions`}</div>
                <div className={styles.amlinoIncAll}>Contact us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
