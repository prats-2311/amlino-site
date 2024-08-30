import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./HeaderContent.module.css";
const HeaderContent: FunctionComponent = () => {
  return (
    <div className={styles.headercontent}>
      <div className={styles.navinfo}>
        <div className={styles.infoWrapper}>
          <div className={styles.info}>
            <div className={styles.iconPackParent}>
              <Image
                className={styles.iconPack}
                alt=""
                src="/images/headermaillogo.svg"
              />
              <div className={styles.infoamlinocom}>info@amlino.com</div>
            </div>
            <div className={styles.iconPackParent}>
              <Image
                className={styles.iconPack}
                alt=""
                src="/images/headerphonelogo.svg"
              />
              <div className={styles.infoamlinocom}>(+91) 9873718915</div>
            </div>
          </div>
        </div>
        <div className={styles.clockLogoParent}>
          <Image
            className={styles.iconPack}
            alt=""
            src="/images/headerclocklogo.svg"
          />
          <div className={styles.amUntil500}>9:00 AM until 5:00 PM IST</div>
        </div>
      </div>
      <div className={styles.navcontent}>
        <div className={styles.logo}>
          <Image
            className={styles.image2Icon}
            alt=""
            src="/images/companylogo.png"
          />
        </div>
        <div className={styles.navlinkContainer}>
          <div className={styles.serviceLink}>
            <div className={styles.collectionsWrapper}>
              <div className={styles.infoamlinocom}>Services</div>
            </div>
          </div>
          <div className={styles.productLink}>
            <div className={styles.collectionsWrapper}>
              <div className={styles.infoamlinocom}>Products</div>
            </div>
          </div>
          <div className={styles.technologyLink}>
            <div className={styles.collectionsWrapper}>
              <div className={styles.infoamlinocom}>Technology</div>
            </div>
          </div>
          <div className={styles.companyLink}>
            <div className={styles.collectionsWrapper}>
              <div className={styles.infoamlinocom}>Company</div>
            </div>
          </div>
        </div>
        <Image
          className={styles.socialMediaIcon}
          alt=""
          src="/images/social-media.svg"
        />
        <div className={styles.contactUsButton}>
          <div className={styles.navButton}>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderContent;
