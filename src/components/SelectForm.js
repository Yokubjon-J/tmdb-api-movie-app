import React, {useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {MovieQueriesContext} from '../MovieQueriesContext';

const regions = [
  {
    name: 'Luxembourg',
    label: 'LU',
  },
  {
    name: 'Slovakia',
    label: 'SK',
  },
  {
    name: 'Turkey',
    label: 'TR',
  },
  {
    name: 'Kazakhstan',
    label: 'KZ',
  },
  {
    name: 'Czechia',
    label: 'CZ',
  },
  {
    name: 'Great Britain',
    label: 'GB',
  },
  {
    name: 'Iceland',
    label: 'IS',
  },
  {
    name: 'Ireland',
    label: 'IE',
  },
  {
    name: 'Estonia',
    label: 'EE',
  },
];

const languages = [
  {
    name: 'English',
    label: 'en',
  },
  {
    name: 'Slovak',
    label: 'sk',
  },
  {
    name: 'Turkish',
    label: 'tr',
  },
  {
    name: 'Kazakh',
    label: 'kk',
  },
  {
    name: 'Czech',
    label: 'cs',
  },
  {
    name: 'Icelandic',
    label: 'is',
  },
  {
    name: 'Irish',
    label: 'ga',
  },
  {
    name: 'Estonian',
    label: 'et',
  },
];

const monetization = [
  {
    name: 'Flatrate',
    label:'flatrate',
  },
  {
    name: 'Free',
    label:'free',
  },
  {
    name: 'With ads',
    label:'ads',
  },
  {
    name: 'Rent',
    label:'rent',
  },
  {
    name: 'Buy',
    label:'buy',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({region, language, monetizationType, page, setRegion, setLanguage, setMonetizationType, 
  setPage, personInput, setPersonInput, byPerson, setByPerson}) {
  const classes = useStyles();
  const changeSearch = () => {byPerson===false ? console.log('set to false') : setByPerson(false)}
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Country"
          value={region}
          onChange={(e) => {setRegion(e.target.value); changeSearch();} }
          // onChange={(e) => {region = e.target.value; changeSearch();} }
          SelectProps={{
            native: true,
          }}
          helperText="Please select your country"
          variant="outlined"
        >
          {regions.map((option) => (
            <option key={option.label} value={option.label}>
              {option.name}
            </option>
          ))}
        </TextField>
        
      </div>
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Language"
          value={language}
          onChange={(e) => {setLanguage(e.target.value); changeSearch();}}
          // onChange={(e) => {language=e.target.value; changeSearch();}}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your language"
          variant="outlined"
        >
          {languages.map((option) => (
            <option key={option.label} value={option.label}>
              {option.name}
            </option>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Monetization types"
          value={monetizationType}
          onChange={(e) => {setMonetizationType(e.target.value); changeSearch();}}
          // onChange={(e) => {monetizationType=e.target.value; changeSearch();}}
          SelectProps={{
            native: true,
          }}
          helperText="Choose monetization type"
          variant="outlined"
        >
          {monetization.map((option) => (
            <option key={option.label} value={option.label}>
              {option.name}
            </option>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="outlined-select-currency-native"
          select={false}
          label="Rating"
          value={page}
          onChange={(e) => {setPage(e.target.value); changeSearch();}}
          // onChange={(e) => {page=e.target.value;}}
          SelectProps={{
            native: true,
          }}
          type="number"
          helperText="Enter page number (up to 20)"
          variant="outlined"
        >
        </TextField>
      </div>
    </form>
  );
}
