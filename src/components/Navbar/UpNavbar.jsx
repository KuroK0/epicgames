import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Icon from "../Image/Icon.png";
import "./UpNavbar.css";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const pages = ["Магазин", "Добавить игру"];
const settings = ["Воити/Зарегистрироваться"];
const user = ["Выити"];

function UpNavbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // const userA = () => {
  //   if()
  // }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2e2e2e" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={Icon} alt="Epic Games" id="image" />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ mx: "5px", color: "white", display: "block" }}
                  className="pages"
                  onClick={() => {
                    if (page === "Магазин") {
                      navigate("/");
                    } else if (page == "Добавить игру") {
                      navigate("/admin");
                    }
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button variant="square" sx={{ color: "white", height: "60px" }}>
                <PersonIcon
                  sx={{ color: "white" }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                />
                {email && email}
              </Button>
            </IconButton>
            <Button
              variant="contained"
              href="https://store.epicgames.com/ru/"
              sx={{ height: "60px" }}
            >
              Загрузить Epic Games
            </Button>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {email === email
                ? settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => navigate("/auth")}
                        textAlign="center"
                      >
                        {setting}
                      </Button>
                    </MenuItem>
                  ))
                : user.map((user) => (
                    <MenuItem key={user} onClick={handleCloseUserMenu}>
                      <Button
                        onClick={() => navigate("/auth")}
                        textAlign="center"
                      >
                        {user}
                      </Button>
                    </MenuItem>
                  ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default UpNavbar;
