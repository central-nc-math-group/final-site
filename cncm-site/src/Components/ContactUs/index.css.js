export default function styles(theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      padding: '5% 10%',
      textAlign: 'center'
    },
    textField: {
      width: '40%'
    },
    textArea: {
      width: `calc(80% + ${theme.spacing(1)}px)`
    }
  };
}
