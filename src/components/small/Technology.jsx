import React from 'react'

const Technology = ({img,height,title}) => {
  return <img title={title} height={height||100} style={{justifySelf:"center",alignSelf:"center"}} src={require(`../../assets/${img}.png`)} alt={title}/>
  
}

export default Technology;