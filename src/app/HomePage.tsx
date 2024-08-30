import { FunctionComponent, useCallback } from "react";
import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import HeaderContent from "./HeaderContent";
import Footer from "./Footer";
const HomePage: FunctionComponent = () => {
  return (
    <div className={styles.homepage1}>
      {/* <HeaderContent /> */}
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
                <div className={styles.infoamlinocom}>
                  <Link href="/Technology">
                    <a>Technology</a>
                  </Link>
                </div>
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
      <div className={styles.content}>
        <div className={styles.headerTextParent}>
          <div className={styles.headerText}>
            <div className={styles.h1PrimaryText}>
              <p className={styles.greatProductIs}>
                <span>
                  <span className={styles.great}>{`Great `}</span>
                  <b className={styles.product}>Product</b>
                </span>
                <span>
                  <span>
                    <span className={styles.is}> is</span>
                  </span>
                </span>
              </p>
              <p className={styles.builtByGreatTeams}>
                <span>
                  <span className={styles.builtByGreatTeams1}>
                    <span>{`built by great `}</span>
                    <span className={styles.teams}>teams</span>
                  </span>
                </span>
              </p>
            </div>
            <div className={styles.spanDecorativeText}>
              We help build and manage a team of world-class developers to bring
              your vision to life
            </div>
          </div>
          <div className={styles.btnPrimary}>
            <div className={styles.letsGetStarted}>Let’s get started!</div>
          </div>
        </div>
        <div className={styles.webDevelopment1Wrapper}>
          <Image
            className={styles.webDevelopment1Icon}
            alt=""
            src="/images/web-development-1.png"
          />
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.servicescarousel}>
          <div className={styles.servicescarouselcontent}>
            <div className={styles.service}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/resource-prioritization-svgrepo-com-1.svg"
                />
                <div className={styles.businessStrategy}>Business Strategy</div>
              </div>
              <div className={styles.strategicPlanningIs}>
                Strategic planning is a management technique for evaluating your
                present firm, identifying its strategic direction, and laying
                out a plan for strategic projects. A strategic strategy outlines
                why a firm exists, what it hopes to achieve, and what processes
                will be necessary to achieve those goals.
              </div>
            </div>
            <div className={styles.service1}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/webdevelopment.svg"
                />
                <div className={styles.businessStrategy}>
                  <p
                    className={styles.greatProductIs}
                  >{`Web Design & Development`}</p>
                </div>
              </div>
              <div className={styles.strategicPlanningIs}>
                <p className={styles.greatProductIs}>
                  A Website is an extension of yourself and we can help you to
                  express it properly. Your website is your number one marketing
                  asset because we live in a digital age. We make scalable and
                  user-friendly web components
                </p>
                <p className={styles.greatProductIs}>
                  which performance exceptional in all sort of incoming traffic.
                </p>
              </div>
            </div>
            <div className={styles.service1}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/projectmanagement.svg"
                />
                <div className={styles.businessStrategy}>
                  Project Management
                </div>
              </div>
              <div className={styles.strategicPlanningIs}>
                <p
                  className={styles.greatProductIs}
                >{`We assist our clients in defining their priorities, understanding their risks, implementing processes and management and control systems to fit their demands, and ensuring that their infrastructures are managed and implemented optimally.Hello `}</p>
                <p className={styles.greatProductIs}>i Am good</p>
              </div>
            </div>
            <div className={styles.service1}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/onlinemarketing.svg"
                />
                <div className={styles.businessStrategy}>Online Marketing</div>
              </div>
              <div className={styles.strategicPlanningIs}>
                Amlino is a dynamic, versatile, full-service digital marketing
                agency that does not rely on smoke or mirrors to attract new
                customers. Instead, Thrive relies on its own search engine
                optimization (SEO) and marketing skills to attract new customers
                to our website.
              </div>
            </div>
            <div className={styles.service1}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/humanresources.svg"
                />
                <div className={styles.businessStrategy}>
                  <p className={styles.greatProductIs}>Human Resource</p>
                </div>
              </div>
              <div className={styles.strategicPlanningIs}>
                In this highly competitive business environment, almost all
                types of companies face the pressure to reduce operating costs
                and deliver more value. To achieve this, companies must
                outsource non-core activities and handle core business functions
                internally.
              </div>
            </div>
            <div className={styles.service5}>
              <div className={styles.resourcePrioritizationSvgrepParent}>
                <Image
                  className={styles.resourcePrioritizationSvgrepIcon}
                  alt=""
                  src="/images/marketresearch.svg"
                />
                <div className={styles.businessStrategy}>Market Research</div>
              </div>
              <div className={styles.strategicPlanningIs}>
                Our market research services help schools identify growth
                opportunities and develop competitive strategies based on a deep
                understanding of parents and the market as a whole. Unlike other
                market research companies, we use a robust and comprehensive
                market research strategy to ensure maximum research coverage.
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.lbtn}>
              <div className={styles.bgBlur} />
              <div className={styles.button}>
                <b className={styles.b}>←</b>
              </div>
            </div>
            <div className={styles.rbtn}>
              <div className={styles.bgBlur} />
              <div className={styles.button}>
                <b className={styles.b}>→</b>
              </div>
            </div>
          </div>
          <div className={styles.servicescarouselheading}>
            <b className={styles.servicesWeOffer}>Services we offer</b>
            <div className={styles.sliderNodes} />
            <div className={styles.card} />
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <div className={styles.carousel1Base}>
          <div className={styles.rightIconParent}>
            <Image
              className={styles.leftIcon}
              alt=""
              src="/images/left-icon.svg"
            />

            <b className={styles.whatOurClients}>
              What Our Clients Say About Us
            </b>
            <Image
              className={styles.rightIcon}
              alt=""
              src="/images/right-icon.svg"
            />
          </div>
          <Image
            className={styles.sliderPositionIcon}
            alt=""
            src="/images/slider-position.svg"
          />
          <div className={styles.carousel1}>
            <div className={styles.vectorParent}>
              <Image
                className={styles.groupChild}
                alt=""
                src="/images/Vector-8.svg"
              />
              <Image
                className={styles.groupItem}
                alt=""
                src="/images/Vector-9.svg"
              />
              <Image
                className={styles.vityouIcon}
                alt=""
                src="/images/vit-you.png"
              />
              <b className={styles.hannahSchmitt}>Hannah Schmitt</b>
              <div className={styles.leadDesigner}>Lead designer</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim `}</div>
              <Image
                className={styles.clarityblockQuoteLineIcon}
                alt=""
                src="/images/clarity-block-quote-line.svg"
              />
            </div>
            <div className={styles.vectorGroup}>
              <Image
                className={styles.groupChild}
                alt=""
                src="/images/Vector-10.svg"
              />
              <Image
                className={styles.vectorIcon}
                alt=""
                src="/images/Vector-11.svg"
              />
              <Image
                className={styles.dps1Icon}
                alt=""
                src="/images/dps-1.jpg"
              />
              <b className={styles.hannahSchmitt1}>Schmitt</b>
              <div className={styles.leadDesigner1}>Lead designer</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim `}</div>
              <Image
                className={styles.clarityblockQuoteLineIcon1}
                alt=""
                src="/images/clarity-block-quote-line.svg"
              />
            </div>
            <div className={styles.vectorContainer}>
              <Image
                className={styles.groupChild}
                alt=""
                src="/images/Vector-8.svg"
              />
              <Image
                className={styles.groupChild2}
                alt=""
                src="/images/Vector-9.svg"
              />
              <Image
                className={styles.vityouIcon1}
                alt=""
                src="/images/vit-you.png"
              />
              <b className={styles.hannahSchmitt2}>Hannah </b>
              <div className={styles.leadDesigner2}>Lead designer</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim `}</div>
              <Image
                className={styles.clarityblockQuoteLineIcon}
                alt=""
                src="/images/clarity-block-quote-line.svg"
              />
            </div>
            <div className={styles.groupDiv}>
              <Image
                className={styles.groupChild}
                alt=""
                src="/images/Vector-10.svg"
              />
              <Image
                className={styles.vectorIcon}
                alt=""
                src="/images/Vector-11.svg"
              />
              <Image
                className={styles.dps1Icon1}
                alt=""
                src="/images/dps-1.png"
              />
              <b className={styles.hannahSchmitt1}>Schmitt</b>
              <div className={styles.leadDesigner1}>designer</div>
              <div
                className={styles.loremIpsumDolor1}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim `}</div>
              <Image
                className={styles.clarityblockQuoteLineIcon1}
                alt=""
                src="/images/clarity-block-quote-line.svg"
              />
            </div>
            <div className={styles.vectorParent1}>
              <Image
                className={styles.groupChild5}
                alt=""
                src="/images/Vector-6.svg"
              />
              <Image
                className={styles.groupChild6}
                alt=""
                src="/images/Vector-5.svg"
              />
              <Image
                className={styles.dps1Icon2}
                alt=""
                src="/images/dps-1.png"
              />
              <b className={styles.hannahSchmitt4}>Hannah</b>
              <div className={styles.leadDesigner4}>Lead</div>
              <div
                className={styles.loremIpsumDolor4}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim `}</div>
              <Image
                className={styles.clarityblockQuoteLineIcon4}
                alt=""
                src="/images/clarity-block-quote-line.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
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
    </div>
  );
};

export default HomePage;
