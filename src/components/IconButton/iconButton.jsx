import React from 'react'
import styles from "./iconButton.module.css"
export const IconButton = ({ type, size, icon, style }) => {
    let buttonStyle = {
        padding: size === 'sm' ? '6px' : '8px',
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        ...style,
      };
      if (type === 'primary') {
        buttonStyle.backgroundColor = '#007bff';
        buttonStyle.color = '#fff';
      } else if (type === 'secondary') {
        buttonStyle.backgroundColor = '#6c757d';
        buttonStyle.color = '#fff';
      } else {
        buttonStyle.backgroundColor = '#fff';
        buttonStyle.color = '#000';
        buttonStyle.border = '1px solid #ccc';
      }
  return (
    <button style={buttonStyle}>
      <span>{icon}</span>
    </button>
  )
}
