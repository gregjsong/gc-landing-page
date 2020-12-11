import React from 'react';

const AnchorList = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    //open modal showing that its not working because the website is fake
  }

  const lister = (arr) => {
    const list = arr.map(str => {
      return (
        <li key={`${props.list.title.toLowerCase()}-${props.list.arr.indexOf(str)}`}>
          <a className='footer-a' href='/' onClick={handleClick}>{str}</a>
        </li>
      );
    });
    return (<ul>{list}</ul>)
  }
  return (
    <div className={`${props.list.title.toLowerCase()}-list list`}>
      <h5>{props.list.title}</h5>
      {lister(props.list.arr)}
    </div>
  )
}

export default AnchorList;