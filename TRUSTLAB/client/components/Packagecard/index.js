import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./package.css"
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Packagecard(props) {
    const image = props.image;
    const thepack = props.thepack;
    const description = props.description;
    const price = props.price;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {thepack}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="medium" color="primary" variant="outlined">
          {price}
        </Button> */}
        <button class="button-10" role="button">
            {price}
        </button>
      </CardActions>
    </Card>
  );
}
