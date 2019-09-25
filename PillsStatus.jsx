import React from 'react';

const PillsStatus = (props) => {
  const { status } = props;

  const pillStyles = {
    ok: {
      color: '#fff',
      backgroundColor: '#009688',
      fontWeight: 'bold',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '10px',
      paddingRight: '10px',
      margin: 'auto 0',
      borderRadius: '10px',
    },
    trouble: {
      color: '#fff',
      backgroundColor: '#f44336',
      fontWeight: 'bold',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '10px',
      paddingRight: '10px',
      margin: 'auto 0',
      borderRadius: '10px',
    },
    warn: {
      color: '#fff',
      backgroundColor: '#ffa000',
      fontWeight: 'bold',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '10px',
      paddingRight: '10px',
      margin: 'auto 0',
      borderRadius: '10px',
    },
  };

  if (status === 'ok') {
    return <span className="custom-ok"  style={pillStyles.ok}><i className="fas fa-thumbs-up">{status}</i></span>;
  }
  if (status === 'warn') {
    return <span className="custom-warn"  style={pillStyles.warn}><i className="fas fa-arrow-alt-circle-up">{status}</i></span>;
  }
  if (status === 'trouble') {
    return <span className="custom-trouble" style={pillStyles.trouble}><i className="fas fa-arrow-circle-down">{status}</i></span>;
  }
};

export default PillsStatus;
