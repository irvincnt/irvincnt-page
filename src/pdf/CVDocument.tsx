import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Lang, Translations, ExperienceItem, ProjectItem, Skills } from '@/lib/content';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', color: '#0a0a0a' },
  // Header
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  name: { fontSize: 18, fontWeight: 700, color: '#2563EB' },
  tagline: { fontSize: 11, color: '#4b5563', marginTop: 4 },
  contact: { fontSize: 10, color: '#6c757d' },
  contactItem: { marginBottom: 3 },
  about: { marginTop: 14 },
  listExperience: { marginBottom: 10 },
  // Columns
  cols: { flexDirection: 'row', gap: 18 },
  leftCol: { width: '70%' },
  rightCol: { width: '30%' },
  skillsRow: { marginBottom: 10 },
  // Typography
  h2: { fontSize: 12, fontWeight: 500, color: '#2563EB', marginTop: 14, marginBottom: 8 },
  role: { fontSize: 11, fontWeight: 500, marginBottom: 10 },
  meta: { fontSize: 10, color: '#6b7280' },
  p: { fontSize: 9, marginBottom: 3, lineHeight: 1.2 },
  pill: { fontSize: 9, color: '#1f2937' },
  sep: { marginVertical: 6 },
  list: { marginTop: 4 },
  skillTile: { fontSize: 10, fontWeight: 500, marginBottom: 3, lineHeight: 1.2 },
});

export default function CVDocument({ lang, t, data }:{
  lang: Lang; t: Translations[Lang]; data: {
    about: { description_one?: string; description_two?: string; description_three?: string };
    experiences: ExperienceItem[]; projects: ProjectItem[]; skills: Skills;
    contacts?: { email?: string; phone?: string; github?: string; website?: string; linkedin?: string; instagram?: string; x?: string };
    education?: { degree?: string; institution?: string };
    interests?: string[];
  };
}){
  const contacts = data.contacts || {};
  const education = data.education || {};
  const interests = data.interests || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>


        <View style={styles.cols}>
          {/* LEFT COLUMN */}
          <View style={styles.leftCol}>        
          <View>
            <Text style={styles.name}>Irvin Giovanni Contreras García</Text>
            <Text style={styles.tagline}>{t.hero.title}</Text>
          </View>
          {/* About */}
          <View style={styles.about}>
          <Text style={styles.p}>{data.about.description_one}</Text>
          <Text style={styles.p}>{data.about.description_two}</Text>
          <Text style={styles.p}>{data.about.description_three}</Text>
          </View>


            {/* Experience */}
            <Text style={styles.h2}>{lang === 'es' ? 'Experiencia Relevante' : 'Relevant Experience'}</Text>
            {data.experiences.map((e, i) => (
              <View key={i} style={styles.listExperience} >
                <Text style={styles.role}>{e.role} · {e.company} <Text style={styles.meta}>— {e.period}</Text></Text>
                <View>
                  {e.achievements.map((a, j) => (
                    <Text key={j} style={styles.p}>• {a}</Text>
                  ))}
                </View>
                <View style={styles.sep} />
              </View>
            ))}
          </View>

          {/* RIGHT COLUMN (SIDEBAR) */}
          <View style={styles.rightCol}>
          <View>
            <Text style={styles.contact}>{contacts.email}</Text>
            <Text style={styles.contact}>{contacts.phone}</Text>
            <Text style={styles.contact}>{contacts.github}</Text>
            <Text style={styles.contact}>{contacts.website}</Text>
          </View>
            {/* Skills */}
            <Text style={styles.h2}>{t.skills.title}</Text>
            <View style={styles.skillsRow}>
              <Text style={styles.skillTile}>{lang === 'es' ? 'Lenguajes' : 'Programming Languages'} </Text>
              <Text style={styles.p}>{data.skills.languages.join(', ')}</Text>
            </View>
            <View style={styles.skillsRow}>
              <Text style={styles.skillTile}>{lang === 'es' ? 'Librerías & Frameworks' : 'Libraries & Frameworks'} </Text> 
              <Text style={styles.p}>{data.skills.librariesandframeworks.join(', ')}</Text>
            </View>
            <View style={styles.skillsRow}>
              <Text style={styles.skillTile}>{lang === 'es' ? 'Herramientas' : 'Tools & Platforms'} </Text>
              <Text style={styles.p}>{data.skills.toolsandplatforms.join(', ')}</Text>
            </View>
            {/* Projects */}
            <Text style={styles.h2}>{lang === 'es' ? 'Proyectos' : 'Projects'}</Text>
            {data.projects.map((p, i) => (
              <View key={i} wrap style={styles.skillTile}>
                <Text style={styles.skillTile}>{p.title}</Text>
                <Text style={styles.p}>{p.description}</Text>
              </View>
            ))}

            {/* Education */}
            <Text style={styles.h2}>{t.education.title}</Text>
            <Text style={styles.p}>Ingeniería en sistemas computacionales</Text>
            <Text style={styles.meta}>Instituto Tecnológico de Iztapalapa I</Text>

            {/* Interests (optional) */}
            {interests.length ? (
              <>
                <Text style={styles.h2}>{lang === 'es' ? 'Intereses' : 'Interests'}</Text>
                <Text style={styles.p}>{interests.join(', ')}</Text>
              </>
            ) : null}
          </View>
        </View>
      </Page>
    </Document>
  );
}



