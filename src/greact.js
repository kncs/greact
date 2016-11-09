import React from 'react'
import MediaQuery from 'react-responsive';

let styles = {
  row :{
    display : 'flex',
    flexFlow: 'row wrap',
    width : '100%'
  },
  col : {
    display : 'inherit'
  }
}

export function Row(props) {

  let renderMediaQuerie = function(mediaQuery){
    return (
      <MediaQuery key={mediaQuery.property} query={mediaQuery.query}>
        <div style={styles.row}>
          {
            React.Children.map(props.children, child => {
              return React.cloneElement(child, {
                cols: props.cols,
                property : mediaQuery.property
              })
            })
          }
        </div>
      </MediaQuery>
    )
  }

  let mediaQueries = [
    {property: 'xs', query : '(max-width: 544px)'},
    {property: 'sm', query : '(min-width: 545px) and (max-width: 768px)'},
    {property: 'md', query : '(min-width: 769px) and (max-width: 992px)'},
    {property: 'lg', query : '(min-width: 992px)'}
  ]

  return (
    <div>
      {
        mediaQueries.map(function(mediaQuery){
          return renderMediaQuerie(mediaQuery);
        })
      }
    </div>
  );
}

export function Col(props) {

  let getExtraSmallDeviceColSize = function() {
    return props.xs || props.sm || props.md || props.lg || 0;
  }

  let getSmallDeviceColSize = function() {
    return props.sm || props.xs || props.md || props.lg || 0;
  }

  let getMediumDeviceColSize = function() {
    return props.md || props.sm || props.xs || props.lg || 0;
  }

  let getLargeDeviceColSize = function() {
    return props.lg || props.md || props.sm || props.xs || 0;
  }

  let renderChildren = function(size) {
    let customStyle = Object.assign(styles.col, {
      flexBasis : `${(size/props.cols)*100}%`
    })
    return (
      <div style={customStyle}>
        {props.children}
      </div>
    )
  }

  let size = 0;
  switch(props.property) {
    case 'xs':
      size = getExtraSmallDeviceColSize();
      break;

    case 'sm':
      size = getSmallDeviceColSize();
      break;

    case 'md':
      size = getMediumDeviceColSize();
      break;

    case 'lg':
      size = getLargeDeviceColSize();
      break;
  }

  if(size) {
    return renderChildren(size)
  } else {
    return null;
  }
}
