export default function styles() {
  return {
    app: {
      textAlign: "center", 
      backgroundColor: "#202020"
    },
    appHeader: {
      backgroundColor: "#101010",
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "calc(10px + 2vmin)",
      color: "white"
    },
    body: {
      fontSize: "calc(5px + 2vmin)", 
      color: "white", 
      textAlign: "left", 
      marginLeft: "10vw", 
      marginRight: "10vw", 
      marginTop: "2.5vh",
    }
  };
}
