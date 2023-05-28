import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'

export default class WhyweAccord extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted className='brown text-justify'>
        <Accordion inverted>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Why should we protect the wildlife?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            Our planet is home to a vast array of wildlife, from majestic elephants and lions to tiny hummingbirds and butterflies. Unfortunately, many of these species are under threat due to human activity, including habitat destruction, climate change, and hunting. It is up to all of us to protect these animals and their habitats to ensure they continue to thrive for generations to come.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            What is the importance of conservation of wildlife?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
            Conservation is important for many reasons. By protecting wildlife and their habitats, we help maintain biodiversity, which is essential for the health of our planet's ecosystems. Additionally, many species have cultural and economic value, providing food, medicine, and other resources for human communities. By conserving these species, we also support the livelihoods of people who depend on them.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            what is the Role of Sanctuaries in Conservation ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
            Sanctuaries are crucial for the protection of endangered species and their habitats. They provide safe havens for animals to live and breed, free from the threats of poaching and habitat destruction. Additionally, they allow researchers and conservationists to study these species up close, gaining a better understanding of their needs and behaviors.
            </p>
           
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
}