import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core";

import styles from "./BioCard.css.js";

class BioCard extends React.Component {
  render() {
    const { name, description, text } = this.props;

    return (
      <div>
        <Card style={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea style={{ display: "block" }}>
            <CardContent>
							<Typography style={{ textAlign: 'center' }} gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
							<Typography style={{ textAlign: 'center' }} variant="body1" color="textSecondary" component="h5">
                {description}
              </Typography>

							{/* <Typography gutterBottom variant="h6" component="p"> */}
							{/* 	{text} */}	
							{/* </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(BioCard);
