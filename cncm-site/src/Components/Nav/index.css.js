export default function styles(theme) {
  return {
    nav: {
      display: "flex",
      fontSize: "calc(2px*2vw)",
      color: theme.palette.background.default,
    },
    bar: {
      backgroundColor: "#000000!important",
    },
    btn: {
      background: "#000000!important",
      border: 0,
      borderRadius: 1,
      color: theme.palette.background.default,
      height: "calc(30*vh)",
      padding: "0 30px*vmin",
      marginLeft: "1vw",
      marginRight: "1vw",
    },
    discord: {
      backgroundColor: "#7289da!important",
      color: "white!important",
      "&:hover": {
        backgroundColor: "#5067b8!important",
      },
    },
    youtube: {
      backgroundColor: "#FF0000!important",
      color: "white!important",
      "&:hover": {
        backgroundColor: "#DD0000!important",
      },
    },
    twitch: {
      backgroundColor: "#6441a5!important",
      color: "white!important",
      "&:hover": {
        backgroundColor: "#421e83!important",
      },
    },
    noPadding: {
      padding: 0,
      "& div ul": {
        padding: 0,
      },
    },
    icon: {
      color: "white!important",
      minWidth: "30px",
    },
  };
}
