import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import SelectForm from "./SelectForm";
import Button from '@material-ui/core/Button'; //la
import {withStyles} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: "10px"
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ClickAway({region, language, monetizationType, page, setRegion, setLanguage, setMonetizationType, 
  setPage, personInput, setPersonInput, byPerson, setByPerson}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <ColorButton type="button" onClick={handleClick}>
          Filters
        </ColorButton>
        {open ? (
          <SelectForm region={region} language={language} monetizationType={monetizationType} page={page}
          setRegion={setRegion} setLanguage={setLanguage} setMonetizationType={setMonetizationType} setPage={setPage}
          personInput={personInput} setPersonInput={setPersonInput} byPerson={byPerson} setByPerson={setByPerson}/>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
