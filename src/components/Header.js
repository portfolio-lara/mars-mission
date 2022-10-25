import React from 'react';
import Button from './Button';
import "../index.css";
const Header = ({ showForm, changeTextAndColor }) => {
  return (
      <header className="header">
          <Button onClick={showForm} color={changeTextAndColor ? 'red' : 'green'} text=     {changeTextAndColor ? 'Close' : 'Add'} />
        </header>
    )
}
export default Header;