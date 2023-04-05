import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Link,
  Typography,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
} from "@mui/material";
import CustomizedDialogs from "../../components/Dialog";
import TextEditor from "../../components/TextEditor";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const drawer = (
    <div>
      <Toolbar>
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
          underline="none"
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <EmojiEmotionsIcon className="emojiEmotionsIcon" />
            <Grid item>
              <Typography
                fontWeight={700}
                variant="h6"
                component="h1"
                color={{ color: "white" }}
              >
                SB ADMIN <sup>2</sup>
              </Typography>
            </Grid>
          </Grid>
        </Link>
      </Toolbar>
      <Divider className="divider" />
      <Accordion
        style={{
          backgroundColor: "#4e73df",
          padding: 0,
          margin: 0,
          // height: 60,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ backgroundColor: "#4e73df", padding: 0, margin: 0 }}
        >
          <List className="listItemButton">
            {["จัดการข่าวสาร"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon className="listItemIcon">
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionSummary>

        <AccordionDetails>
          <Card className="cardDashboard">
            <CardContent>
              <Typography
                sx={{ fontSize: 12 }}
                color="text.secondary"
                gutterBottom
              >
                จัดการข่าว:
              </Typography>
              <CustomizedDialogs />
            </CardContent>
          </Card>
        </AccordionDetails>
      </Accordion>

      <Divider className="divider" />
      <List className="listItemButton">
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className="listItemIcon">
                {index === 0 && <InboxIcon />}
                {index === 1 && <MailIcon />}
                {index === 2 && <EmojiEmotionsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "#fff",
          }}
        >
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="black" variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <TextEditor />
        <Toolbar />
      </Box>
    </Box>
  );
}
