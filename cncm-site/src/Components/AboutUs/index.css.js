export default function styles() {
    return {
        header: {
            background: "linear-gradient(to right, #007CCC, #000000)", 
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
            color: "black", 
            textAlign: "left", 
            marginLeft: "10vw", 
            marginRight: "10vw", 
            marginTop: "2.5vh"
        }
    };
}