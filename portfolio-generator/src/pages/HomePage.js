import React from 'react';
import styles from './Home.module.css';
import profileImage from '../Images/profile.jpg'; // Make sure you have your profile image in this path
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.navbar}>
        <div className={styles.buttons}>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/project')}>Projects</button>
            <button onClick={() => navigate('/')}>Contact</button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.heading}>
            <h1>Full Stack</h1>
            <h1>Developer</h1>
            <div className={styles.secondHeading}>
              <h3>
                I like to build full scale web apps from scratch
              </h3>
            </div>
            <div className={styles.experienceSection}>
              <h3 className={styles.experienceTitle}>Experienced in</h3>
              <div className={styles.skillsList}>
                <div className={styles.skillItem}>
                  <div className={styles.bullet}></div>
                  <span>React JS</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.bullet}></div>
                  <span>Fast API</span>
                </div>
                <div className={styles.skillItem}>
                  <div className={styles.bullet}></div>
                  <span>Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.profileImageContainer}>
            <img src={profileImage} alt="Developer profile" className={styles.profileImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;