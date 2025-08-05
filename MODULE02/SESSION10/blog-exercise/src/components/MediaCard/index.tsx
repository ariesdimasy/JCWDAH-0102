import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IMediaCardProps {
  item: {
    summary: string;
    created: number;
    ___class: string;
    description: string;
    ownerId: null;
    title: string;
    image: string;
    updated: null;
    objectId: string;
    slug: string;
  };
}

export default function MediaCard(props: IMediaCardProps) {
  const { item } = props;

  return (
    <Card sx={{ maxWidth: 300, marginRight: "20px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.image ? item.image : "/images/post-image-test.png"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {item.summary}
        </Typography>
      </CardContent>
      <CardActions style={{ float: "right" }}>
        <Button href={`/posts/${item.objectId}`} size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
