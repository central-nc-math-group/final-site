export default function styles(theme) {
  return {
    header: {
      background: '#f8705c' ,
      minHeight: "10vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      fontSize: '1.5rem',
      color: theme.palette.background.default,
      padding: theme.spacing(5), 
    },
		textWrapper: {
			alignItems: "center",
			position: 'absolute',
		}, 
		wrapper: {
			backgroundColor: theme.palette.secondary.light,
			height: "20vh", 
		}, 
		content: {
			textAlign: 'center', 
			position: 'absolute', 
			zIndex: 1, 
			height: '20vh', 
			width: '100%', 
		}, 
		pos: {
			display: 'flex', 
			justifyContent: 'center', 
			alignItems: 'center',
			width: '100%', 
			height: '100%', 
		}, 
		text: {
			margin: "auto", 
			color: "#ffffff",
		}
  };
}
