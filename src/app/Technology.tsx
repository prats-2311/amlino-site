import { FunctionComponent, useCallback } from "react";
import React from "react";
import Image from "next/image";
import styles from "./Technology.module.css";

const Technology: FunctionComponent = () => {
  return (
    <div className={styles.technology}>
      <div className={styles.headercontent}>
        <div className={styles.navinfo}>
          <div className={styles.companycontactdetails}>
            <div className={styles.companyinfo}>
              <div className={styles.companymail}>
                <Image
                  className={styles.companymailicon}
                  alt=""
                  src="/images/CompanyMailIcon.svg"
                />
                <div className={styles.infoamlinocom}>info@amlino.com</div>
              </div>
              <div className={styles.companymail}>
                <Image
                  className={styles.companymailicon}
                  alt=""
                  src="/images/CompanyPhoneIcon.svg"
                />
                <div className={styles.infoamlinocom}>(+91) 9873718915</div>
              </div>
            </div>
          </div>
          <div className={styles.companycontacttiming}>
            <Image
              className={styles.companymailicon}
              alt=""
              src="/images/CompanyTimingIcon.svg"
            />
            <div className={styles.amUntil500}>9:00 AM until 5:00 PM IST</div>
          </div>
        </div>
        <div className={styles.navcontent}>
          <div className={styles.amlinologo}>
            <Image className={styles.logoIcon} alt="" src="/images/logo.png" />
          </div>
          <div className={styles.navlinkContainer}>
            <div className={styles.serviceLink}>
              <div className={styles.service}>
                <div className={styles.infoamlinocom}>Services</div>
              </div>
            </div>
            <div className={styles.productsLink}>
              <div className={styles.service}>
                <div className={styles.infoamlinocom}>Products</div>
              </div>
            </div>
            <div className={styles.technologyLink}>
              <div className={styles.service}>
                <div className={styles.infoamlinocom}>Technology</div>
              </div>
            </div>
            <div className={styles.companyLink}>
              <div className={styles.service}>
                <div className={styles.infoamlinocom}>Company</div>
              </div>
            </div>
          </div>
          <Image
            className={styles.socialMediaIcon}
            alt=""
            src="/images/Social Media.svg"
          />
          <div className={styles.contactUsButton}>
            <div className={styles.contactus}>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ourdesign}>
        <div className={styles.approchheading}>
          <div className={styles.headingH2Left}>
            <div className={styles.decoLine} />
            <div className={styles.leadingCompaniesTrustContainer}>
              <p className={styles.ourDesignAnd}>Our design and</p>
              <p className={styles.ourDesignAnd}>
                <b>development approach</b>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div className={styles.uxDrivenEngineering}>
                  UX Driven Engineering
                </div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst}>UX first</span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupItem} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div className={styles.uxDrivenEngineering}>
                  Developing Shared Understanding
                </div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst1}>UX first</span>
                  <span className={styles.span}>{` `}</span>
                  <span>
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupInner} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div className={styles.uxDrivenEngineering}>
                  Proven Experience and Expertise
                </div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst2}>UX first</span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangleDiv} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div
                  className={styles.uxDrivenEngineering}
                >{`Security & Intellectual Property (IP)`}</div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst2}>UX first</span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild1} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div className={styles.uxDrivenEngineering}>Code Reviews</div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst2}>UX first</span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.groupParent}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild2} />
                <Image
                  className={styles.playPerspectiveMatteIcon}
                  alt=""
                  src="/images/Play_perspective_matte.png"
                />
              </div>
              <div className={styles.uxDrivenEngineeringParent}>
                <div
                  className={styles.uxDrivenEngineering}
                >{`Quality Assurance & Testing`}</div>
                <div className={styles.unlikeOtherCompaniesContainer}>
                  <span>{`Unlike other companies, we are a `}</span>
                  <span className={styles.uxFirst2}>UX first</span>
                  <span>
                    {" "}
                    development company. Projects are driven by designers and
                    they make sure design and experiences translate to code.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headingH2LeftParent}>
        <div className={styles.headingH2Left1}>
          <div className={styles.decoLine} />
          <div className={styles.leadingCompaniesTrustContainer1}>
            <p className={styles.ourDesignAnd}>{`How development `}</p>
            <p className={styles.ourDesignAnd}>
              <b>through Amlino works</b>
            </p>
          </div>
        </div>
        <div className={styles.lineParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper4}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#4</b>
                <b
                  className={styles.standupsWeekly}
                >{`Standups & weekly demos`}</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                Standups, weekly demos, and weekly reviews make sure everyone is
                on the same page and can raise their concerns.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper5}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#3</b>
                <b className={styles.standupsWeekly}>Tech Architecture</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                We break monolithic apps into microservices. Decoupling the code
                allows teams to move faster and more independently
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper6}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#6</b>
                <b className={styles.standupsWeekly}>Iterative Delivery</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                We divide the implementation process into several checkpoints
                rather than a single deadline.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#6</b>
                <b className={styles.standupsWeekly}>Code Reviews</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                Code reviews before release help detect issues like memory
                leaks, file leaks, performance signs, and general bad smells
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper8}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#3</b>
                <b className={styles.sprintPlanning}>Sprint Planning</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                Sprint roadmap is a collective planning effort. Team members
                collaborate to clarify items and ensure shared understanding.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper9}>
            <div className={styles.frameGroup}>
              <div className={styles.parent}>
                <b className={styles.infoamlinocom}>#1</b>
                <b className={styles.sprintPlanning}>Assemble the right team</b>
              </div>
              <div className={styles.standupsWeeklyDemos}>
                We handle all aspects of vetting and choosing the right team
                that you dont have the time, expertise, or desire to do.
              </div>
            </div>
          </div>
          <Image
            className={styles.trophyPerspectiveMatteIcon}
            alt=""
            src="/images/Trophy_perspective_matte.png"
          />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.lineDiv} />
        </div>
      </div>
      <div className={styles.techstack}>
        <div className={styles.headingH2LeftGroup}>
          <div className={styles.headingH2Left2}>
            <div className={styles.decoLine} />
            <div className={styles.leadingCompaniesTrustContainer2}>
              <p className={styles.ourDesignAnd}>Our</p>
              <p className={styles.techStack}>
                <b>Tech Stack</b>
              </p>
            </div>
          </div>
          <div className={styles.groupParent5}>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.backend}>Backend</div>
              <div className={styles.groupChild3} />
            </div>
            <div className={styles.frontend}>Frontend</div>
            <div className={styles.databases}>Databases</div>
            <div className={styles.databases}>Devops</div>
            <div className={styles.databases}>CloudHosting</div>
          </div>
        </div>
        <div className={styles.nodejsParent}>
          <Image
            className={styles.nodejsIcon}
            alt=""
            src="/images/NodeJS.svg"
          />
          <Image
            className={styles.nodejsIcon}
            alt=""
            src="/images/NETCore.svg"
          />
          <Image
            className={styles.typescriptIcon}
            alt=""
            src="/images/typescript.svg"
          />
          <Image
            className={styles.image1Icon}
            alt=""
            src="/images/image 1.png"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footercontent}>
          <div className={styles.footerheader}>
            <div className={styles.footercompanydetails}>
              <div className={styles.ourHeadOffice}>Our Head Office</div>
              <div className={styles.companyname}>
                <Image
                  className={styles.locationicon}
                  alt=""
                  src="/images/locationicon.svg"
                />
                <b className={styles.amlinoTechnologyPvt}>
                  Amlino Technology Pvt. Ltd.
                </b>
              </div>
              <div className={styles.companyname}>
                <Image
                  className={styles.locationicon1}
                  alt=""
                  src="/images/locationicon.svg"
                />
                <b className={styles.newDelhiIndia}>New Delhi, India</b>
              </div>
              <div className={styles.companyname}>
                <b className={styles.infoamlinocom1}>info@amlino.com</b>
                <Image
                  className={styles.maillogoIcon}
                  alt=""
                  src="/images/maillogo.svg"
                />
              </div>
              <div className={styles.companyphone1}>
                <b className={styles.infoamlinocom2}>info@amlino.com</b>
                <Image
                  className={styles.phonelogoIcon}
                  alt=""
                  src="/images/phonelogo.svg"
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
                  className={styles.youtubeLogoIcon}
                  alt=""
                  src="/images/youtube-logo.svg"
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
                <div className={styles.services}>Services</div>
                <div className={styles.onlineMarketing}>Online Marketing</div>
                <div className={styles.webDevelopment}>Web Development</div>
                <div className={styles.projectManagement}>
                  Project Management
                </div>
              </div>
              <div className={styles.footeraboutcompany}>
                <div className={styles.services}>Products</div>
                <div className={styles.onlineMarketing}>
                  Library Control System
                </div>
                <div className={styles.webDevelopment}>
                  Education Control System
                </div>
                <div className={styles.projectManagement}>
                  Payroll Control System
                </div>
              </div>
              <div className={styles.footercompanytechnology}>
                <div className={styles.services}>Technology</div>
                <div className={styles.onlineMarketing}>Architecture</div>
                <div className={styles.webDevelopment}>Hosting</div>
                <div className={styles.projectManagement}>Integrations</div>
                <div className={styles.securitySso}>{`Security & SSO `}</div>
              </div>
              <div className={styles.footeraboutcompany}>
                <div className={styles.services}>Company</div>
                <div className={styles.onlineMarketing}>About Us</div>
                <div className={styles.webDevelopment}>Our Team</div>
                <div className={styles.projectManagement}>Careers</div>
              </div>
            </div>
          </div>
          <div className={styles.footerlicense}>
            <div className={styles.footercompanylicense}>
              <div className={styles.licensedetails}>
                <div className={styles.amlinoIncAll}>
                  © 2024 Amlino, Inc. All Rights Reserved
                </div>
                <div className={styles.companyfaqs}>
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
    </div>
  );
};

export default Technology;
