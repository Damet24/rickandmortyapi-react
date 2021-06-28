import React from 'react'
import Card from './card'
import Button from './button'

import './styes/characters.css'

class Characters extends React.Component {
  state = {}

  async getFetch(url){
    const res = await fetch(url || 'https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return data
  }

  componentDidMount(){
    console.log('was mount')
    this.getFetch().then(data => {
      console.log(data)
      this.setState({
        next: data.info.next,
        data: data.results,
      })
    })
  }

  getCard(data){
    return (
      <Card key={data.id} img={data.image} name={data.name} des={data.status}/>
    )
  }

  handleButton = async () => {
    const data = await this.getFetch(this.state.next)
    this.setState({
      next: data.info.next,
      data: [...this.state.data, ...data.results]
    })
  }

  render(){
    return (
      <React.Fragment>
        <div className="main" >
          {
          this.state.data
            ? this.state.data.map( item => this.getCard(item))
            : 'nothing'
          }
        </div>
        <Button onClick={this.handleButton} value="More" />
      </React.Fragment>
    )
  }
}

export default Characters
