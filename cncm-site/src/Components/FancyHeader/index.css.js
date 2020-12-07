export default function styles(theme) {
  return {
    header: {
      background: "linear-gradient(to right, #007CCC, #000000)",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: '1.5rem',
      color: theme.palette.background.default,
      padding: theme.spacing(5)
    },
    body: {
      fontSize: '1.5rem',
      color: theme.palette.text.primary,
      textAlign: "left",
      marginLeft: "10vw",
      marginRight: "10vw",
      marginTop: "2.5vh"
    }
  };
}
