import React from 'react'
import MediaQuery from 'react-responsive';
import {styles} from './styles'
import {options} from './options'

export function Row(props) {

  let renderMediaQuerie = function(mediaQuery){
    return (
      <MediaQuery key={mediaQuery.property} query={mediaQuery.query}>
        <div className="greact-row" style={styles.row}>
          {
            React.Children.map(props.children, child => {
              return React.cloneElement(child, {
                cols: props.cols || options.cols,
                property : mediaQuery.property
              })
            })
          }
        </div>
      </MediaQuery>
    )
  }

  let queriesSize = Object.assign(options.queries, props.queries)
  let mediaQueries = [
    {property: 'xs', query : `(max-width: ${queriesSize.xs}px)`},
    {property: 'sm', query : `(min-width: ${queriesSize.xs+1}px) and (max-width: ${queriesSize.sm}px)`},
    {property: 'md', query : `(min-width: ${queriesSize.sm+1}px) and (max-width: ${queriesSize.md}px)`},
    {property: 'lg', query : `(min-width: ${queriesSize.md+1}px)`}
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
  let renderChildren = function(size, offset) {
    let customStyle = Object.assign(styles.col, {
      flexBasis : `${(size/props.cols)*100}%`,
      marginLeft : `${(offset/props.cols)*100}%`
    })

    if(size) {
      return (
        <div className="greact-col" style={customStyle}>
          {props.children}
        </div>
      )
    }
  }

  let size = 0;
  let offset = 0;
  switch(props.property) {
    case 'xs':
      size = props.xs || 12
      if(props.offset) {
        offset = props.offset.xs;
      }
      break;

    case 'sm':
      size = props.sm || props.xs || 12
      if(props.offset) {
        offset = props.offset.sm || props.offset.xs;
      }
      break;

    case 'md':
      size = props.md || props.sm || props.xs || 12
      if(props.offset) {
        offset = props.offset.md || props.offset.sm || props.offset.xs;
      }
      break;

    case 'lg':
      size = props.lg || props.md || props.sm || props.xs || 12
      if(props.offset) {
        offset = props.offset.lg || props.offset.md || props.offset.sm || props.offset.xs;
      }
      break;
  }
  return renderChildren(size, offset)
}
