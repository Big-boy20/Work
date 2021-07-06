import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CreateIcon from '@material-ui/icons/Create';
import HistoryIcon from '@material-ui/icons/History';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import PeopleIcon from '@material-ui/icons/People';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';






export const mainListItems = (
  
  <div>
    <ListItem button>
      <ListItemIcon>
        <AccessibleForwardIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="Create" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccessTimeIcon />
      </ListItemIcon>
      <ListItemText primary="AccessTime" />
    </ListItem>
    <ListItem button>
    <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Control Admins" />
    </ListItem>
  </div>
);


