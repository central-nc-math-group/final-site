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
    const { img, name, description, classes } = this.props;

    return (
      <div>
        <Card style={{ maxWidth: 345, margin: "20px" }}>
          <CardActionArea style={{ display: "block" }}>
            <CardMedia style={{ height: 80 }} image={img} title="Face" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(BioCard);
