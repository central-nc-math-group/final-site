export default function styles(theme) {
  return {
    redirectHeader: {
      background: "linear-gradient(to right, #007CCC, #000000)",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: '1.5rem',
      color: theme.palette.background.default
    },
    app: {
      textAlign: "center",
      backgroundColor: "#FFFFFF"
    },
    icon: {
      verticalAlign: "bottom"
    },
    link: {
      color: theme.palette.warning.light
    }
  };
}
