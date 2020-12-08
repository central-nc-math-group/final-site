export default function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing(6),
    },
    footer: {
      padding: theme.spacing(3, 0),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(8, 0),
      },
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      '& img': {
        width: 22.5,
        height: 25,
        marginRight: theme.spacing(1.5),
      },
      fontSize: '2rem'
    },
    list: {
      marginBottom: theme.spacing(4),
      '& h3': {
        fontWeight: theme.typography.fontWeightMedium,
      },
      '& ul': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      '& li': {
        padding: '6px 0',
        color: theme.palette.text.secondary,
      },
    },
    version: {
      marginTop: theme.spacing(3),
      alignItems: 'center'
    },
  };
}
