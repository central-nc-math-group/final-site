export default function styles(theme) {
  return {
    app: {
      textAlign: "center",
      backgroundColor: "#FFFFFF",
    },
    appHeader: {
      background: "linear-gradient(to right, #007CCC, #000000)",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      color: theme.palette.background.default,
    },
    body: {
      fontSize: "1.5rem",
      color: theme.palette.text.primary,
      textAlign: "left",
      marginLeft: "10vw",
      marginRight: "10vw",
      marginTop: "2.5vh",
    },
    cardTitle: {
      fontSize: "1.5rem",
    },
    joinUsCard: {
      textAlign: "center",
      color: "white",
      cursor: "pointer",
    },
    joinUsBorder: {
      maxWidth: "300px!important",
    },
  };
}
