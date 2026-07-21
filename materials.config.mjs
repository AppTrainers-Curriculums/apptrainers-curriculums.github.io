// Single source of truth for the workbooks on the site.
//
// published: true   → built into the site (pages, sidebar group, home card)
// published: false  → left out of the build entirely (not on the site at all)
//
// protected: true   → the built pages are AES-encrypted with StatiCrypt; a
//                     visitor must enter that course's password to read them.
//                     "Turning a course on for students" = giving them the
//                     password. No rebuild needed once it's deployed.
//
// Passwords are NEVER stored here. At build time each protected course reads its
// password from an environment variable  COURSE_PW_<SLUG>  (slug uppercased,
// dashes → underscores), e.g. COURSE_PW_CHECKERS, COURSE_PW_TANK_SURVIVAL.
// In CI these come from GitHub Secrets (see .github/workflows/deploy.yml).
//
// `salt` is a fixed 32-hex string per course — it is NOT secret. Keeping it
// stable makes builds reproducible and lets the "Remember me" box work across a
// course's chapters (enter the password once per course).

export const materials = [
  {
    slug: 'checkers',
    src: 'checkers.md',
    introTitle: 'Before You Start',
    sidebarLabel: 'Build a Checkers Game',
    cardTitle: 'Build a Checkers Game in Unity',
    cardDescription:
      'A 17-chapter, copy-along workbook: the board, the rules, capturing, kings, a simple AI, then animation and sound — built toward a real, shipped project.',
    published: true,
    protected: true,
    salt: 'bf6074782f0ae0e8425f425a65546a1d',
  },
  {
    slug: 'tank-survival',
    src: 'tank-survival.md',
    introTitle: 'Before You Start',
    sidebarLabel: 'Build a Tank Survival Game',
    cardTitle: 'Build a Top-Down Tank Survival Game in Unity',
    cardDescription:
      'An 11-chapter, copy-along workbook: drive a tank, shoot, spawn endless enemies, then add health, score, and a game-over screen — a complete survival game, step by step.',
    published: true,
    protected: true,
    salt: '8b89ae7a4d0459b23756cc738a01037b',
  },
];

export const publishedMaterials = materials.filter((m) => m.published);

// Env var name that holds a course's password, e.g. 'COURSE_PW_TANK_SURVIVAL'.
export const passwordEnvVar = (slug) =>
  'COURSE_PW_' + slug.toUpperCase().replace(/-/g, '_');
