import React from 'react';
import image from '../My-image.jpg';
import './Info.css'





class Info extends React.Component {
  constructor() {
    console.log('Info constructor()')
    super()
    this.state = {
      fullName: 'Lara Jones',
      prof: 'Web Developer',
      bio: 'Excepteur ut commodo adipisicing commodo reprehenderit deserunt pariatur aute excepteur id. Ipsum voluptate tempor ut ea tempor occaecat reprehenderit ut occaecat.',
      intervall: null,
      time: 0
    }
  }
  componentDidMount() {
    console.log('INFO componentDidMount()')
    this.setState(
      {
        intervall: setInterval(() => {
          this.setState({ time: this.state.time + 1 })
        }, 1000)
      }
    )
  }
  componentDidUpdate() {
    console.log('INFO componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('INFO componentWillUnmount')
    clearInterval(this.state.intervall)
  }
  render() {
    console.log('INFO render()')
    return (
      <div className="Info">
        <h2>{this.state.time}</h2>
        <div className='box'>
          <div className='box1'>
            <h1>{this.state.fullName}</h1>
            <h4>{this.state.prof}</h4>
            <p>{this.state.bio}</p>
          </div>
          <img src={image} alt='me' ></img>

        </div>
      </div>
    )
  }

}


export default Info;
