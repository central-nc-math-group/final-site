export default function styles(theme) {
  return {
    mr10: {
      marginRight: "10px",
    },
    icon: {
      verticalAlign: "baseline",
      cursor: "pointer",
      color: "white"
    },
    toolbar: {
      marginLeft: "0",
      marginRight: "auto",
      padding: "1rem 1rem",
      borderRadius: "1rem",
      fontSize: "0",
      transition: "opacity 0.5s ease-in-out",
    },
    pdfToolbar: (props) => ({
      backgroundColor: props.color[500],
      color: theme.palette.getContrastText(props.color[500]),
      display: "inline-block",
      marginLeft: "0",
      marginRight: "auto",
      zIndex: "20",
      padding: "0.5rem 1rem",
      borderRadius: "1rem",
      fontSize: "0",
      transition: "opacity 0.5s ease-in-out",
    }),
    pdfToolbarWrapper: {
      position: "absolute",
      paddingTop: "2rem",
      paddingLeft: "2rem",
      zIndex: "20",
      textAlign: "left",
    },
    input: {
      padding: "5px",
      fontSize: "16px",
    },
    viewerWrapper: {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      height: "100%",
      backgroundColor: "inherit",
    },
    pdfWrapper: {
      position: "absolute",
      top: "0px",
      right: "0px",
      left: "0px",
      bottom: "0px",
      overflow: "auto",
    },
  };
}
