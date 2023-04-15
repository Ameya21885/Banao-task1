import React from "react";
import AllData from "../data/AllData.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ShareIcon from "@mui/icons-material/Share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./allposts.css";

const Allposts = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <h1>Allposts</h1>
      {AllData.map((item) => {
        return (
          <div key={item.id}>
            {/* <h1>{item.name}</h1> */}
            <Card
              sx={{ maxWidth: "100%" }}
              style={{ width: "50%", margin: "0px auto 2rem auto" }}
            >
              <CardMedia
                sx={{ height: 200 }}
                image={item.profile}
                title="green iguana"
              />
              <CardContent>
                <div className="menu">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Report</MenuItem>
                    <MenuItem onClick={handleClose}>Option3</MenuItem>
                  </Menu>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {item.post}
                </Typography>
                <Typography gutterBottom variant="h4" component="div">
                  {item.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.constent}
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Remy Sharp" src={item.profile} />
                      <h6>{item.name}</h6>
                    </Stack>
                  </Box>
                  <Box>
                    <VisibilityIcon />
                    {item.views}
                  </Box>
                  <Box>
                    <ShareIcon />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Allposts;
