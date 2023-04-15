import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import Dropdown from "../filter/Dropdown";
import JoinGroup from "../filter/JoinGroup";

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* desktop view */}
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO heading
            </Typography> */}

            {/* mobile view */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>

            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            {/* <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGOjiji
            </Typography> */}

            {/* desktop pages */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="/">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  All Posts(32)
                </Button>
              </NavLink>
              <NavLink to="article">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Article
                </Button>
              </NavLink>
              <NavLink to="event">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Event
                </Button>
              </NavLink>
              <NavLink to="education">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Education
                </Button>
              </NavLink>
              <NavLink to="job">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Job
                </Button>
              </NavLink>
            </Box>

            {/* Desktop & mobile view */}
            <Box sx={{ flexGrow: 0 }} style={{ display: "flex" }}>
              {/* <h1>helllo</h1> */}
              <Dropdown />
              <JoinGroup />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Nav;
