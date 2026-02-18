import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import type { ResumeContent } from "@/lib/resume-content";
import { FONTS, SPACING } from "./styles";

const s = StyleSheet.create({
  page: {
    padding: `${SPACING.page.top} ${SPACING.page.right} ${SPACING.page.bottom} ${SPACING.page.left}`,
    fontFamily: FONTS.ats.body,
    fontSize: 9.5,
    color: "#000000",
    lineHeight: 1.4,
  },
  // Header
  name: {
    fontFamily: FONTS.ats.display,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 2,
  },
  title: {
    fontSize: 11,
    textAlign: "center",
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 9,
    textAlign: "center",
    marginBottom: 2,
  },
  // Sections
  sectionTitle: {
    fontFamily: FONTS.ats.display,
    fontSize: 11,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 2,
    marginTop: SPACING.sectionGap,
    marginBottom: 6,
  },
  // Experience
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  expRole: {
    fontFamily: FONTS.ats.display,
    fontSize: 10,
  },
  expPeriod: {
    fontSize: 9,
  },
  expCompany: {
    fontSize: 9,
    marginBottom: 3,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 8,
  },
  bulletDot: {
    width: 10,
    fontSize: 9,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
  },
  // Skills
  skillRow: {
    flexDirection: "row",
    marginBottom: 2,
  },
  skillLabel: {
    fontFamily: FONTS.ats.display,
    fontSize: 9,
    width: 140,
  },
  skillList: {
    flex: 1,
    fontSize: 9,
  },
  // Projects
  projTitle: {
    fontFamily: FONTS.ats.display,
    fontSize: 10,
    marginBottom: 1,
  },
  projTech: {
    fontFamily: FONTS.ats.mono,
    fontSize: 8,
    marginBottom: 2,
  },
  projDesc: {
    fontSize: 9,
    marginBottom: 6,
  },
  // Education
  eduHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  eduDegree: {
    fontFamily: FONTS.ats.display,
    fontSize: 10,
  },
  eduInstitution: {
    fontSize: 9,
    marginBottom: 3,
  },
  // Certifications
  certItem: {
    fontSize: 9,
    marginBottom: 2,
  },
  entrySpacing: {
    marginBottom: 8,
  },
});

interface Props {
  content: ResumeContent;
}

export function ATSResume({ content }: Props) {
  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        {/* Header */}
        <Text style={s.name}>{content.name}</Text>
        <Text style={s.title}>{content.title}</Text>
        <Text style={s.contactLine}>
          {content.location} | {content.phone} | {content.email}
        </Text>
        <Text style={s.contactLine}>
          {content.linkedIn} | {content.github} | {content.portfolio}
        </Text>

        {/* Summary */}
        <Text style={s.sectionTitle}>Professional Summary</Text>
        <Text style={{ fontSize: 9, marginBottom: 2 }}>{content.summary}</Text>

        {/* Experience */}
        <Text style={s.sectionTitle}>Experience</Text>
        {content.experience.map((exp) => (
          <View key={exp.company} style={s.entrySpacing}>
            <View style={s.expHeader}>
              <Text style={s.expRole}>{exp.role}</Text>
              <Text style={s.expPeriod}>{exp.period}</Text>
            </View>
            <Text style={s.expCompany}>
              {exp.company} | {exp.location}
            </Text>
            {exp.highlights.map((h, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.bulletDot}>•</Text>
                <Text style={s.bulletText}>{h}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Skills */}
        <Text style={s.sectionTitle}>Skills</Text>
        {content.skills.map((group) => (
          <View key={group.label} style={s.skillRow}>
            <Text style={s.skillLabel}>{group.label}:</Text>
            <Text style={s.skillList}>{group.skills.join(", ")}</Text>
          </View>
        ))}

        {/* Projects */}
        <Text style={s.sectionTitle}>Projects</Text>
        {content.projects.map((proj) => (
          <View key={proj.title}>
            <Text style={s.projTitle}>
              {proj.title} — {proj.subtitle}
            </Text>
            <Text style={s.projTech}>{proj.techStack.join(", ")}</Text>
            <Text style={s.projDesc}>{proj.description}</Text>
          </View>
        ))}

        {/* Education */}
        <Text style={s.sectionTitle}>Education</Text>
        {content.education.map((edu) => (
          <View key={edu.institution} style={s.entrySpacing}>
            <View style={s.eduHeader}>
              <Text style={s.eduDegree}>
                {edu.degree}, {edu.field}
              </Text>
              <Text style={s.expPeriod}>{edu.period}</Text>
            </View>
            <Text style={s.eduInstitution}>{edu.institution}</Text>
            {edu.highlights.map((h, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.bulletDot}>•</Text>
                <Text style={s.bulletText}>{h}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Certifications */}
        <Text style={s.sectionTitle}>Certifications</Text>
        {content.certifications.map((cert) => (
          <Text key={cert.name} style={s.certItem}>
            {cert.name} — {cert.issuer}
          </Text>
        ))}
      </Page>
    </Document>
  );
}
