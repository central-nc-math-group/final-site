export default function styles() {
  return {
    app: {
      textAlign: "center"
    },
    appLogo: {
      height: "40vmin",
      pointerEvents: "none",
      animation: "$appLogoSpin infinite 20s linear"
    },
    appHeader: {
      backgroundColor: "#282c34",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    },
    appLink: {
      color: "#61dafb"
    },
    "@keyframes appLogoSpin": {
      "from": {
        transform: "rotate(0deg)"
      },
      "to": {
        transform: "rotate(360deg)"
      }
    }
  };
}
