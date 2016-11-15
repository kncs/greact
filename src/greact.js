import React from 'react'
import MediaQuery from 'react-responsive';
import {styles} from './styles'
import {options} from './options'

export function Row(props) {

  let renderMediaQuerie = function(mediaQuery){
    return (
      <MediaQuery key={mediaQuery.property} query={mediaQuery.query}>
        <div style={styles.row}>
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
  let renderChildren = function(size) {
    let customStyle = Object.assign(styles.col, {
      flexBasis : `${(size/props.cols)*100}%`
    })

    if(size) {
      return (
        <div style={customStyle}>
          {props.children}
        </div>
      )
    }
  }

  let size = 0;
  switch(props.property) {
    case 'xs':
      size = props.xs || props.sm || props.md || props.lg || 0;
      break;
    case 'sm':
      size = props.sm || props.xs || props.md || props.lg || 0;
      break;
    case 'md':
      size = props.md || props.sm || props.xs || props.lg || 0;
      break;
    case 'lg':
      size = props.lg || props.md || props.sm || props.xs || 0;
      break;
  }
  return renderChildren(size)
}
