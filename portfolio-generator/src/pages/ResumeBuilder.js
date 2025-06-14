import React, { useState } from 'react';
import ExperienceForm from '../components/ExperienceForm';
import EducationForm from '../components/EducationForm';
import OtherForm from '../components/OtherForm';
import PDFResume from '../components/PDFResume';
import { PDFDownloadLink } from "@react-pdf/renderer";
import './ResumeBuilder.css';

function ResumeBuilder() {
  const [bio, setBio] = useState({
    name: "First Last",
    email: "first.last@resumeworded.com",
    phone: "+1 (123) 456789",
    location: "San Francisco, CA"
  });

  const [experience, setExperience] = useState([
    {
      role: '', company: '', location: '', start: '', end: '', bullets: [""]
    }
  ]);

  const [education, setEducation] = useState([
    {
      school: '', degree: '', major: '', location: '', end: '', details: [""]
    }
  ]);

  const [other, setOther] = useState({
    techSkills: [""],
    softSkills: [""],
    certifications: [""],
    languages: [""]
  });

  return (
    <div className="main-layout">
      {/* Download button at top right */}
      <div className="download-btn-fixed">
        <h2 style={{ margin: 0}}>Resume Builder</h2>
        <PDFDownloadLink
          document={
            <PDFResume
              bio={bio}
              experience={experience}
              education={education}
              other={other}
            />
          }
          fileName="resume.pdf"
          style={{ textDecoration: "none" }}
        >
          {({ loading }) =>
            <button className="stylish-btn">{loading ? "Preparing PDF..." : "Download as PDF"}</button>
          }
        </PDFDownloadLink>
      </div>
      <div className="generator-container">
        {/* SIDEBAR: 2 x 2 grid */}
        <div className="generator-sidebar">
          <div className="sidebar-grid">
            <div className="sidebar-col">
              <h3 className="sidebar-title">Resume Details</h3>
              <label>Name:
                <input value={bio.name} onChange={e => setBio({ ...bio, name: e.target.value })} />
              </label>
              <label>Email:
                <input value={bio.email} onChange={e => setBio({ ...bio, email: e.target.value })} />
              </label>
              <label>Phone:
                <input value={bio.phone} onChange={e => setBio({ ...bio, phone: e.target.value })} />
              </label>
              <label>Location:
                <input value={bio.location} onChange={e => setBio({ ...bio, location: e.target.value })} />
              </label>
            </div>
            <div className="sidebar-col">
              <h3 className="sidebar-title">Experience</h3>
              <ExperienceForm experience={experience} setExperience={setExperience} />
            </div>
            <div className="sidebar-col">
              <h3 className="sidebar-title">Education</h3>
              <EducationForm education={education} setEducation={setEducation} />
            </div>
            <div className="sidebar-col">
              <h3 className="sidebar-title">Other</h3>
              <OtherForm other={other} setOther={setOther} />
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className="generator-preview-container">
          <div className="classic-resume-preview">
            <div className="resume-header">
              <div style={{ fontWeight: 'bold', fontSize: '1.25em', marginBottom: 2 }}>
                {bio.name}
              </div>
              <div style={{ fontSize: '1em', marginBottom: 10 }}>
                {bio.email} | {bio.phone} | {bio.location}
              </div>
            </div>
            {/* EXPERIENCE */}
            <div className="resume-section-heading">EXPERIENCE</div>
            <div className="section-divider"></div>   
            {experience.filter(exp => exp.role || exp.company).map((exp, idx) => (
              <div key={idx} className="resume-entry">
                <div className="resume-entry-row">
                  <b>{exp.company}</b>
                  <span style={{ fontWeight: 600 }}>{exp.start}{exp.end && ` – ${exp.end}`}</span>
                </div>
                <div className="resume-entry-row">
                  <span>{exp.role}</span>
                  <span>{exp.location}</span>
                </div>
                <ul>
                  {exp.bullets.filter(Boolean).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
            {/* EDUCATION */}
            <div className="resume-section-heading">EDUCATION</div>
            <div className="section-divider"></div>
            {education.filter(edu => edu.school).map((edu, idx) => (
              <div key={idx} className="resume-entry">
                <div className="resume-entry-row">
                  <b>{edu.school}{edu.degree && `, ${edu.degree}`}</b>
                  <span style={{ fontWeight: 600 }}>{edu.end}</span>
                </div>
                <div className="resume-entry-row">
                  <span>{edu.major}</span>
                  <span>{edu.location}</span>
                </div>
                <ul>
                  {edu.details.filter(Boolean).map((d, i) => (<li key={i}>{d}</li>))}
                </ul>
              </div>
            ))}
            {/* OTHER */}
            <div className="resume-section-heading">OTHER</div>
            <div className="section-divider"></div>
            <div>
              {other.techSkills.filter(Boolean).length > 0 && (
                <div><b>Technical Skills:</b> {other.techSkills.filter(Boolean).join(', ')}</div>
              )}
              {other.softSkills.filter(Boolean).length > 0 && (
                <div><b>Soft Skills:</b> {other.softSkills.filter(Boolean).join(', ')}</div>
              )}
              {other.certifications.filter(Boolean).length > 0 && (
                <div><b>Certifications & Training:</b> {other.certifications.filter(Boolean).join(', ')}</div>
              )}
              {other.languages.filter(Boolean).length > 0 && (
                <div><b>Languages:</b> {other.languages.filter(Boolean).join(', ')}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;