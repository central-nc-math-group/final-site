export default function styles(theme) {
  return {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      margin: "50px",
    },
    potd: {
      maxWidth: "60%",
      margin: "50px",
    },
    error: {
      color: "red",
      margin: "20px",
    },
  };
}
