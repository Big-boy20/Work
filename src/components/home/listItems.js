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


export const mainListItems = (
  <div>
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
    
  </div>
);


