import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import './gdpr.css';
import { IGDPR } from 'app/shared/model/gdpr.model';
import { getEntities, reset } from './gdpr.reducer';

export const GDPR = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(location, ITEMS_PER_PAGE, 'id'), location.search)
  );
  const [sorting, setSorting] = useState(false);

  const gDPRList = useAppSelector(state => state.gDPR.entities);
  const loading = useAppSelector(state => state.gDPR.loading);
  const totalItems = useAppSelector(state => state.gDPR.totalItems);
  const links = useAppSelector(state => state.gDPR.links);
  const entity = useAppSelector(state => state.gDPR.entity);
  const updateSuccess = useAppSelector(state => state.gDPR.updateSuccess);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      })
    );
  };

  const resetAll = () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  useEffect(() => {
    resetAll();
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      resetAll();
    }
  }, [updateSuccess]);

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if ((window as any).pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1,
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting]);

  const sort = p => () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
    setSorting(true);
  };

  const handleSyncList = () => {
    resetAll();
  };

  return (
    <div>
      <pre>
        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Clubping Privacy Policy</h3>
        <p style={{ fontFamily: 'Arial' }}>
          This privacy policy will explain how our organisation uses the personal data we collect from you when you use our website.
        </p>
        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Topics:</h3>
        <li style={{ fontFamily: 'Arial' }}>What data do we collect?</li>
        <li style={{ fontFamily: 'Arial' }}>How do we collect your data?</li>
        <li style={{ fontFamily: 'Arial' }}>How will we use your data?</li>
        <li style={{ fontFamily: 'Arial' }}>How do we store your data?</li>
        <li>Marketing</li>
        <li>What are your data protection rights?</li>
        <li>What are cookies?</li>
        <li>How do we use cookies?</li>
        <li>What types of cookies do we use?</li>
        <li>How to manage your cookies</li>
        <li>Privacy policies of other websites</li>
        <li>Changes to our privacy policy</li>
        <li>How to contact us</li>
        <li>How to contact the appropriate authorities</li>
        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>What data do we collect?</h3>
        <p>Clubping collects the following data:</p>
        <li>Personal identification information: Name, email address, phone number</li>
        <li>
          University credentials: The university you attend, student ID number, university email, your programme of study, year of study
        </li>
        <li>City and Country of residence</li>
        <li>User behaviour patterns which include the clubs you will join, events you will attend, any searches that you make</li>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How do we collect your data?</h3>
        <p>You directly provide Clubping with most of the data we collect. We collect data and process data when you:</p>
        <li>Register online for our service.</li>
        <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email.</li>
        <li>Use or view our website via your browser’s cookies.</li>
        <li>Sign up fo events where we require you to give us registration info</li>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>
          Clubping may also receive your data indirectly from the following sources:
        </h3>
        <p>If you attend one of the universities we are partnered with, we will already have your information in our records.</p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How will we use your data?</h3>

        <p>Clubping collects your data so that we can:</p>
        <li>Manage your account.</li>
        <li>Email you with special offers on other products and services we think you might like.</li>
        <li>Give event and search suggestions</li>
        <li>Curate better events and to obtain better suited sponsors and advertisers</li>

        <p>
          If you agree, Clubping will share your data with our partner companies so that they may offer you their products and services.
        </p>
        <li>University’s we are partnered with</li>
        <li>Our event management partners and sponsors</li>

        <p>
          When you sign up to Clubping, we may send your data to, and also use the resulting information from registration details to give
          it to our identity protection department to prevent identity theft and any sort of fraud.
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How do we store your data?</h3>
        <p>
          Clubping securely stores your data within the European Union.
          <br />
          To ensure the security of your data, Clubping likely uses a variety of security measures, such as encryption, firewalls, access
          controls,and intrusion detection systems.
          <br />
          Access to data is restricted only to authorised personnel who require it for their job functions, and all access to data is
          monitored and logged.
        </p>
        <p>
          In addition, Clubping follows industry-standard practices and regulations for data protection,
          <br />
          such as GDPR, CCPA, and HIPAA, depending on the type of data being stored and the location of the user.
          <br />
          Overall, Clubping takes significant steps to ensure the security and privacy of your data.
        </p>

        <p>
          Clubping will keep your personal identification information for 1 year.
          <br />
          Once this time period has expired,
          <br /> we will delete your data by completely removing it from our database unless you renew your account which you will be
          prompted by us to do so 6 months prior from the data of last renewal.
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Marketing</h3>
        <p>
          Clubping would like to send you information about our services that we think you might like, as well as those of our partner
          companies.
        </p>
        <li>Partnered universities and sponsors</li>

        <p>If you have agreed to receive marketing, you may always opt out at a later date.</p>
        <p>
          You have the right at any time to stop Clubping from contacting you for marketing purposes or giving your data to any of our
          partners.
        </p>
        <p>If you no longer wish to be contacted for marketing purposes, please contact clubpingforbusiness@gmail.com</p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>What are your data protection rights?</h3>
        <p>
          Clubping would like to make sure you are fully aware of all of your data protection rights.
          <br />
          Every user is entitled to the following:
          <br />
          The right to access - You have the right to request Clubping for copies of your personal data. We may charge you a small fee for
          this service.
          <br />
          The right to rectification - You have the right to request that Clubping correct any information you believe is inaccurate. You
          also have the right to request Clubping to complete information you believe is incomplete.
          <br />
          The right to erasure — You have the right to request that Clubping erase your personal data, under certain conditions.
          <br />
          The right to restrict processing - You have the right to request that Clubping restrict the processing of your personal data,
          under certain conditions.
          <br />
          The right to object to processing - You have the right to object to Clubping’s processing of your personal data, under certain
          conditions.
          <br />
          The right to data portability - You have the right to request that Clubping transfer the data that we have collected to another
          organisation, or directly to you, under certain conditions.
          <br />
          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us
          at our email:<a href="mailto:clubpingforbusiness@gmail.com">clubpingforbusiness@gmail.com</a>
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>What are cookies?</h3>
        <p>
          Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information.
          <br />
          When you visit our websites, we may collect information from you automatically through cookies or similar technology.
        </p>

        <p>
          For further information, visit <a href="aIIaboutcookies.org">aIIaboutcookies.org</a>
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How do we use cookies?</h3>
        <p>Clubping uses cookies in a range of ways to improve your experience on our website, including:</p>
        <li>Keeping you signed in</li>
        <li>Understanding how you use our website</li>
        <li>Search history</li>
        <li>Event attendance history</li>
        <li>Origin of where you are searching from</li>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>What types of cookies do we use?</h3>
        <p>There are a number of different types of cookies, however, our website uses:</p>
        <li>
          Functionality — Clubping uses these cookies so that we recognize you on our website and remember your previously selected
          preferences.
          <br /> These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are
          used.
        </li>
        <li style={{ fontFamily: 'Arial' }}>
          Advertising — Clubping uses these cookies to collect information about your visit to our website, the content you viewed, the
          links you followed and information about your browser, device, and your IP address.
          <br /> Clubping sometimes shares some limited aspects of this data with third parties for advertising purposes.
          <br /> We may also share online data collected through cookies with our advertising partners.
          <br /> This means that when you visit another website, you may be shown advertising based on your browsing patterns on our
          website.
        </li>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How to manage cookies</h3>
        <p style={{ fontFamily: 'Arial' }}>
          You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser.
          <br /> However, in a few cases, some of our website features may not function as a result.
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Privacy policies of other websites</h3>
        <p style={{ fontFamily: 'Arial' }}>
          The Clubping website contains links to other websites.
          <br /> Our privacy policy applies only to our website, so if you click on a link to another website, you should read their privacy
          policy.
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>Changes to our privacy policy</h3>
        <p style={{ fontFamily: 'Arial' }}>
          Clubping keeps its privacy policy under regular review and places any updates on this web page.
          <br /> This privacy policy was last updated on 15 March 2023.
        </p>

        <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial' }}>How to contact us</h3>
        <p style={{ fontFamily: 'Arial' }}>
          If you have any questions about Clubping’s privacy policy, the data we hold on you, or you would like to exercise one of your data
          protection rights, please do not hesitate to contact us.
        </p>

        <p style={{ fontFamily: 'Arial' }}>
          Email us at: <a href="mailto:clubpingforbusiness@gmail.com">clubpingforbusiness@gmail.com</a> or contact any of our entire team:
          <ul>
            <li>
              Ahmed Raza: <a href="mailto:axa1874@student.bham.ac.uk">axa1874@student.bham.ac.uk</a>
            </li>
            <li>
              Meena Muthukumar: <a href="mailto:mxm1397@student.bham.ac.uk">mxm1397@student.bham.ac.uk</a>
            </li>
            <li>
              Kavin Babu: <a href="mailto:kxb195@student.bham.ac.uk">kxb195@student.bham.ac.uk</a>
            </li>
            <li>
              Rayna Felix: <a href="mailto:rxf138@student.bham.ac.uk">rxf138@student.bham.ac.uk</a>
            </li>
            <li>
              Rohit Manikuttan: <a href="mailto:rmu186@student.bham.ac.uk">rmu186@student.bham.ac.uk</a>
            </li>
            <li>
              Zhange Luo: <a href="mailto:zxl084@student.bham.ac.uk">zxl084@student.bham.ac.uk</a>
            </li>
          </ul>
          If you wish to report a complaint or if you feel that Clubping has not addressed your concern in a satisfactory manner, please
          contact the Information Commissioner’s Office.
        </p>
        <p style={{ fontFamily: 'Arial' }}>
          Contact via:{' '}
          <a href="https://ico.org.uk/global/contact-us/contact-us-public/">https://ico.org.uk/global/contact-us/contact-us-public/</a>
        </p>
      </pre>
    </div>
  );
};

export default GDPR;
