import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Utility for rendering comma lists, used for skills, languages, etc.
const joinList = arr => arr.filter(Boolean).join(', ');

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times-Roman",
    fontSize: 12,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 48,
    lineHeight: 1.5,
    color: "#111"
  },
  headerName: { fontSize: 18, fontWeight: "bold", marginBottom: 2 },
  headerDetails: { fontSize: 10, marginBottom: 14 },
  section: { marginBottom: 12 },
  sectionHeader: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 13.7,
    marginBottom: 6,
    letterSpacing: 1.2
  },
  entryHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  entryCompany: { fontWeight: "bold" },
  entryDates: { fontSize: 10, fontWeight: 600 },
  entryTitleRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2
  },
  entryTitle: { fontSize: 12 },
  entryLocation: { fontSize: 11, color: "#444" },
  list: { marginLeft: 10, marginTop: 2 },
  listItem: { marginBottom: 2 }
});

const PDFResume = ({ bio, experience, education, other }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* HEADER */}
      <View>
        <Text style={styles.headerName}>{bio.name}</Text>
        <Text style={styles.headerDetails}>
          {bio.email} | {bio.phone} | {bio.location}
        </Text>
      </View>

      {/* EXPERIENCE */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Experience</Text>
        {experience.filter(e => e.company).map((exp, i) => (
          <View key={i}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryCompany}>{exp.company}</Text>
              <Text style={styles.entryDates}>
                {exp.start}{exp.end && ` – ${exp.end}`}
              </Text>
            </View>
            <View style={styles.entryTitleRow}>
              <Text style={styles.entryTitle}>{exp.role}</Text>
              <Text style={styles.entryLocation}>{exp.location}</Text>
            </View>
            <View style={styles.list}>
              {exp.bullets.filter(Boolean).map((b, j) => (
                <Text key={j} style={styles.listItem}>• {b}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* EDUCATION */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Education</Text>
        {education.filter(e => e.school).map((edu, i) => (
          <View key={i}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryCompany}>
                {edu.school}{edu.degree && `, ${edu.degree}`}
              </Text>
              <Text style={styles.entryDates}>{edu.end}</Text>
            </View>
            <View style={styles.entryTitleRow}>
              <Text style={styles.entryTitle}>{edu.major}</Text>
              <Text style={styles.entryLocation}>{edu.location}</Text>
            </View>
            <View style={styles.list}>
              {edu.details.filter(Boolean).map((d, j) => (
                <Text key={j} style={styles.listItem}>• {d}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* OTHER */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Other</Text>
        {joinList(other.techSkills) && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Technical Skills: </Text>
            {joinList(other.techSkills)}
          </Text>
        )}
        {joinList(other.softSkills) && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Soft Skills: </Text>
            {joinList(other.softSkills)}
          </Text>
        )}
        {joinList(other.certifications) && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Certifications & Training: </Text>
            {joinList(other.certifications)}
          </Text>
        )}
        {joinList(other.languages) && (
          <Text>
            <Text style={{ fontWeight: "bold" }}>Languages: </Text>
            {joinList(other.languages)}
          </Text>
        )}
      </View>
    </Page>
  </Document>
);

export default PDFResume;