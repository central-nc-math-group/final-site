export default function styles(theme) {
  return {
    nav: {
      display: "flex",
      fontSize: "calc(2px*2vw)",
      color: theme.palette.background.default
    },
    bar: {
      backgroundColor: "#000000"
    },
    btn: {
      background: "#000000",
      border: 0,
      borderRadius: 1,
      color: theme.palette.background.default,
      height: "calc(30*vh)",
      padding: "0 30px*vmin",
      marginLeft: "1vw",
      marginRight: "1vw"
    }
  };
}
