const React=require('react')


class CoordinatesButton extends React.Component{
  constructor(props){
    super()
    this.createCoordinates=this.createCoordinates.bind(this)
  }

  createCoordinates(e){
    let coordArray=[e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordArray)
  }

  render(){
    return(
      <button type="button" onClick={this.createCoordinates}>Click for Coordiantes</button>
    )
  }
}


module.exports=CoordinatesButton
