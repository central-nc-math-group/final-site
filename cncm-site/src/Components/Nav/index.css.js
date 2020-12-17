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
    },
    discord: {
      backgroundColor: "#7289da",
      color: "white",
      "&:hover": {
        backgroundColor: "#5067b8"
      }
    },
    youtube: {
      backgroundColor: "#FF0000",
      color: "white",
      "&:hover": {
        backgroundColor: "#DD0000"
      }
    },
    twitch: {
      backgroundColor: "#6441a5",
      color: "white",
      "&:hover": {
        backgroundColor: "#421e83"
      }
    },
    noPadding: {
      padding: 0,
      "& div ul": {
        padding: 0
      }
    },
    icon: {
      color: "white",
      minWidth: "30px"
    }
  };
}
