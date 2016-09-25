const React=require('react')


class DelayedButton extends React.Component{
  constructor(props){
    super()
    this.persistEvent=this.persistEvent.bind(this)
  }

  persistEvent(e){
    e.persist()
    this.props.onDelayedClick(e)
  }

  render(){
    return(
      <button type="button" onClick={this.persistEvent}>Click to Persist!</button>
    )
  }
}


module.exports=DelayedButton
