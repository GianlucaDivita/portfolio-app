import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import type { ResumeContent } from "@/lib/resume-content";
import { COLORS, FONTS } from "./styles";

const s = StyleSheet.create({
  page: {
    padding: "30 32 30 32",
    fontFamily: FONTS.designed.body,
    fontSize: 8.5,
    color: COLORS.textPrimary,
    lineHeight: 1.35,
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingBottom: 7,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.accent,
  },
  headerLeft: {
    flex: 1,
  },
  headerRight: {
    alignItems: "flex-end",
  },
  name: {
    fontFamily: FONTS.designed.display,
    fontSize: 20,
    color: COLORS.accent,
    marginBottom: 3,
  },
  title: {
    fontSize: 10,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  contactText: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7.5,
    color: COLORS.textSecondary,
    marginBottom: 1.5,
  },
  contactLink: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7.5,
    color: COLORS.accent,
    textDecoration: "none",
    marginBottom: 1.5,
  },
  // Sections
  sectionTitle: {
    fontFamily: FONTS.designed.display,
    fontSize: 10,
    textTransform: "uppercase",
    color: COLORS.accent,
    letterSpacing: 1,
    marginTop: 7,
    marginBottom: 1,
  },
  sectionLine: {
    width: "25%",
    height: 0.75,
    backgroundColor: COLORS.accent,
    marginBottom: 4,
  },
  // Experience
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 0.5,
  },
  expRole: {
    fontFamily: FONTS.designed.display,
    fontSize: 9.5,
    color: COLORS.textPrimary,
  },
  expPeriod: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7,
    color: COLORS.textMuted,
  },
  expCompany: {
    fontSize: 8,
    color: COLORS.textSecondary,
    marginBottom: 2,
  },
  bullet: {
    flexDirection: "row",
    marginBottom: 1.5,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 7,
    fontSize: 8,
    color: COLORS.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    color: COLORS.textPrimary,
  },
  entrySpacing: {
    marginBottom: 5,
  },
  // Skills
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillGroup: {
    width: "50%",
    marginBottom: 3,
    paddingRight: 8,
  },
  skillLabel: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7,
    textTransform: "uppercase",
    color: COLORS.accent,
    letterSpacing: 0.5,
    marginBottom: 1,
  },
  skillList: {
    fontSize: 8,
    color: COLORS.textPrimary,
  },
  // Projects
  projEntry: {
    marginBottom: 4,
  },
  projHeader: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 0.5,
  },
  projTitle: {
    fontFamily: FONTS.designed.display,
    fontSize: 9.5,
    color: COLORS.textPrimary,
  },
  projSub: {
    fontSize: 8,
    color: COLORS.textMuted,
    marginLeft: 5,
  },
  projTech: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7,
    color: COLORS.accent,
    marginBottom: 1,
  },
  projDesc: {
    fontSize: 8,
    color: COLORS.textSecondary,
  },
  // Bottom row (Education + Certs side by side)
  bottomRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 7,
  },
  bottomCol: {
    flex: 1,
  },
  eduDegree: {
    fontFamily: FONTS.designed.display,
    fontSize: 9,
    color: COLORS.textPrimary,
  },
  eduInstitution: {
    fontSize: 8,
    color: COLORS.textSecondary,
  },
  eduPeriod: {
    fontFamily: FONTS.designed.mono,
    fontSize: 7,
    color: COLORS.textMuted,
    marginBottom: 3,
  },
  certItem: {
    fontSize: 8,
    color: COLORS.textPrimary,
    marginBottom: 1,
  },
  certIssuer: {
    color: COLORS.textMuted,
    marginBottom: 2,
  },
  // Summary
  summary: {
    fontSize: 8.5,
    color: COLORS.textSecondary,
    lineHeight: 1.4,
  },
});

interface Props {
  content: ResumeContent;
}

export function DesignedResume({ content }: Props) {
  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        {/* Header */}
        <View style={s.header}>
          <View style={s.headerLeft}>
            <Text style={s.name}>{content.name}</Text>
            <Text style={s.title}>{content.title}</Text>
          </View>
          <View style={s.headerRight}>
            <Text style={s.contactText}>{content.location}</Text>
            <Text style={s.contactText}>{content.phone}</Text>
            <Link src={`mailto:${content.email}`} style={s.contactLink}>
              {content.email}
            </Link>
            <Link
              src={`https://${content.linkedIn}`}
              style={s.contactLink}
            >
              {content.linkedIn}
            </Link>
            <Link
              src={`https://${content.github}`}
              style={s.contactLink}
            >
              {content.github}
            </Link>
            <Link
              src={`https://${content.portfolio}`}
              style={s.contactLink}
            >
              {content.portfolio}
            </Link>
          </View>
        </View>

        {/* Summary */}
        <Text style={s.sectionTitle}>Summary</Text>
        <View style={s.sectionLine} />
        <Text style={s.summary}>{content.summary}</Text>

        {/* Experience */}
        <Text style={s.sectionTitle}>Experience</Text>
        <View style={s.sectionLine} />
        {content.experience.map((exp) => (
          <View key={exp.company} style={s.entrySpacing}>
            <View style={s.expHeader}>
              <Text style={s.expRole}>{exp.role}</Text>
              <Text style={s.expPeriod}>{exp.period}</Text>
            </View>
            <Text style={s.expCompany}>
              {exp.company} · {exp.location}
            </Text>
            {exp.highlights.slice(0, 2).map((h, i) => (
              <View key={i} style={s.bullet}>
                <Text style={s.bulletDot}>›</Text>
                <Text style={s.bulletText}>{h}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Projects */}
        <Text style={s.sectionTitle}>Projects</Text>
        <View style={s.sectionLine} />
        {content.projects.map((proj) => (
          <View key={proj.title} style={s.projEntry}>
            <View style={s.projHeader}>
              <Text style={s.projTitle}>{proj.title}</Text>
              <Text style={s.projSub}>{proj.subtitle}</Text>
            </View>
            <Text style={s.projTech}>{proj.techStack.join("  ·  ")}</Text>
          </View>
        ))}

        {/* Skills */}
        <Text style={s.sectionTitle}>Skills</Text>
        <View style={s.sectionLine} />
        <View style={s.skillsGrid}>
          {content.skills.map((group) => (
            <View key={group.label} style={s.skillGroup}>
              <Text style={s.skillLabel}>{group.label}</Text>
              <Text style={s.skillList}>{group.skills.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Education + Certifications side by side */}
        <View style={s.bottomRow}>
          <View style={s.bottomCol}>
            <Text style={s.sectionTitle}>Education</Text>
            <View style={s.sectionLine} />
            {content.education.map((edu) => (
              <View key={edu.institution} style={{ marginBottom: 4 }}>
                <Text style={s.eduDegree}>
                  {edu.degree}, {edu.field}
                </Text>
                <Text style={s.eduInstitution}>{edu.institution}</Text>
                <Text style={s.eduPeriod}>{edu.period}</Text>
              </View>
            ))}
          </View>
          <View style={s.bottomCol}>
            <Text style={s.sectionTitle}>Certifications</Text>
            <View style={s.sectionLine} />
            {content.certifications.map((cert) => (
              <View key={cert.name} style={{ marginBottom: 2 }}>
                <Text style={s.certItem}>{cert.name}</Text>
                <Text style={[s.certItem, s.certIssuer]}>{cert.issuer}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
