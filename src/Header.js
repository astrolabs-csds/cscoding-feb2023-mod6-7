import AppBar from "@mui/material/AppBar";
import {Link as ReactLink} from 'react-router-dom';
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header() {
    return (
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link
              variant="button"
              color="text.primary"
              component={ReactLink}
              sx={{ my: 1, mx: 1.5 }}
              to="/"
            >
              Universal Co.
            </Link>
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              component={ReactLink}
              sx={{ my: 1, mx: 1.5 }}
              to="/register"
            >
              Register
            </Link>
          </nav>
        </Toolbar>
        </AppBar>
    )
}

export default Header;