import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import styles from './index.css.js';

class InfoCard extends React.Component {
    button(isBtn, buttonText) {
        if (isBtn) {
            <div style={{ flex: 1, justifyContent: 'flex-end'}}>
                <Button color="primary">
                    Click me! {buttonText}
                </Button>
            </div>
        }
        else return;
    }
    
    render() {
        const { classes, title, body, isBtn, btnText} = this.props;

        return (
            <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2">
                {body}
              </Typography>
            {this.button(isBtn, btnText)}
            </CardContent> 
          </Card>
        );
    };
}

export default withStyles(styles)(InfoCard);