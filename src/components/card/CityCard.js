import React from 'react';
import './CityCard.css';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const CityCard = ({ name, current, desc, id, deleteBtn, updateBtn }) => {
  return (
    <li>
      <div className="item">
        <p className="title">
          {desc} in {name}
        </p>
        <p className="current">Current: {current}°С</p>
        <IconButton aria-label="delete" onClick={deleteBtn} className="button">
          <DeleteIcon />
        </IconButton>
        <div>
          <Button color="primary" onClick={updateBtn}>
            Refresh
          </Button>
          <Link to={{ pathname: `/cities/${id}` }} className="btn">
            <Button color="primary">More info</Button>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CityCard;
