// gitprofile.config.js

const config = {
  github: {
    username: 'kbiits', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'nabiel',
    twitter: '@kbiits',
    facebook: '',
    dribbble: '',
    behance: '',
    medium: 'kbiits',
    dev: '',
    website: 'https://nabiels.my.id',
    phone: '',
    email: 'nabilumarsyarif294@gmail.com',
  },
  skills: [
    'Golang',
    'Docker',
    'Laravel',
    'Linux',
    'React.js',
    'Node.js',
  ],
  experiences: [
    {
      company: 'Waresix',
      position: 'Frontend Engineer Intern',
      from: 'Dec 2021',
      to: 'Mar 2022',
    },
    {
      company: 'TurnkeyID',
      position: 'Backend Engineer Intern',
      from: 'Jun 2022',
      to: 'Aug 2022',
    },
    {
      company: 'Tokopedia',
      position: 'Software Engineer Intern',
      from: 'Aug 2022',
      to: 'Jan 2023',
    },
    {
      company: 'Danamas',
      position: 'Software Engineer',
      from: 'Oct 2022',
      to: 'Oct 2023',
    },
  ],
  education: [
    {
      institution: 'Sriwijaya University',
      degree: 'Computer Science',
      from: '2020',
      to: 'end of 2023',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'kbiits',
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    id: 'G-RFQ1MFP47G', // Please remove this and use your own tag id or keep it empty
  },
  hotjar: {
    id: '3611682', //  Please remove this and use your own id or keep it empty
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
