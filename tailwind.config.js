module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {

      transparent: 'transparent',

      black: '#000000',
      white: '#ffffff',

      grey: {
        primary: '#777B94',
        dim    : '#C9C9C9',
        dim2   : '#F5F5F5',
        tint   : '#231F20',
      },

      blue: {
        primary: '#1574F6',
        dim    : '#6CA0EE',
        dim2   : '#C7DBF8',
        tint   : '#005EA3',
      },

      red: {
        primary: '#ED5454',
        dim    : '#FFB4C4',
        dim2   : '#FFDBDD',
        tint   : '#EA3737',
      },

      yellow: {
        primary: '#FDB05E',
        dim    : '#FFD85C',
        dim2   : '#FFEEB9',
        tint   : '#FEAE49',
      },

      green: {
        primary: '#2C8E6E',
        dim    : '#53C87E',
        dim2   : '#A2EABC',
        tint   : '#186049',
      },

      purple: {
        primary: '#7768E5',
        dim    : '#B098E2',
        dim2   : '#D9CBF5',
        tint   : '#54499E',
      },
      
      cyan: {
        primary: '#00C8FF',
        dim    : '#66DEFF',
        dim2   : '#CCF4FF',
        tint   : '#0E84A6',
      }
    },

    fontSize: {
      'ultra'   : '48px',
      'super'   : '40px',
      'headline': '32px', 
      'title'   : '24px', 
      'header'  : '20px',
      'large'   : '16px',
      'base'    : '14px',
      'small'   : '12px',
      'tiny'    : '10px',
    },

    fontFamily: {
      sans: [
        'Noto Sans KR',
        'Noto Sans JP',
        'Noto Sans SC',
        'Noto Sans TC',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    spacing: {
      'auto': 'auto',
      px: '1px',
      '0': '0',
      "half": "2px",
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '5': '20px',
      '6': '24px',
      '8': '32px',
      '10': '40px',
      '12': '48px',
      '16': '64px',
      '20': '80px',
      '24': '96px',
      '32': '128px',
      '40': '160px',
      '48': '192px',
      '56': '224px',
      '64': '256px',
      '72': '288px',
      '80': '320px'
    },

    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'tablet'    : '768px',
      'desktop'   : '1024px',
      'widescreen': '1280px',
    },
    
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },

    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),

    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },

    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },

    borderColor: theme => ({
      ...theme('colors'),
      dim    : "#E7E7E7",
      DEFAULT: "#BDBDBD",
    }),

    borderRadius: {
      'none': '0',
      'sm': '2px',
      DEFAULT: '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '12px',
      'full': '9999px',
    },

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },

    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      full: '100%',
      screen: '100vw',
    }),

    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),

    minWidth: {
      '0': '0',
      full: '100%',
    },

    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },

    maxWidth: {
      'xs': '320px',
      'sm': '480px',
      'md': '640px',
      'lg': '800px',
      'xl': '960px',
      '2xl': '1120px',
      '3xl': '1280px',
      '4xl': '1440px',
      '5xl': '1600px',
      'full': '100%',
    },

    maxHeight: {
      full: '100%',
      screen: '100vh',
    },

    padding: theme => theme('spacing'),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },

    boxShadow: {
      'sm'   : '0 1px 2px 0 rgba(0,0,0,0.15)',
      DEFAULT: '0px 5px 10px 0 rgba(138, 149, 158, 0.15)',
      'md': '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      'lg': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'outline': '0 0 0 3px rgba(52,144,220,0.5)',
      'none': 'none',
    },

    zIndex: {
      'auto': 'auto',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '100': 100
    },

    opacity: {
      '0': '0',
      '10': '.1',
      '20': '.2',
      '30': '.3',
      '40': '.4',
      '50': '.5',
      '60': '.6',
      '70': '.7',
      '80': '.8',
      '90': '.9',
      '100': '1',
    },

    fill: {
      current: 'currentColor',
    },

    stroke: {
      current: 'currentColor',
    },

    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },

    flexGrow: {
      '0': '0',
      DEFAULT: '1',
    },

    flexShrink: {
      '0': '0',
      DEFAULT: '1',
    },

    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },

    inset: {
      '0': '0',
      auto: 'auto',
    },

    container: {}
  },
  
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    order: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    inset: ['responsive'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    fill: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    fontSize: ['responsive'],
    fontStyle: ['responsive'],
    textTransform: ['responsive'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    wordBreak: ['responsive'],
    width: ['responsive'],
    zIndex: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
}
