import React from 'react'
import { Segment, Image ,Divider} from 'semantic-ui-react'
import Whywe from '../pages/Whywe'

const src = '/images/wireframe/image-text.png'

const WhyweImg = () => (
  <Segment basic className='text-justify stacked' style={{ overflow: 'hidden' }}>
    <Image src='./amur.jpg' size='medium' floated='left' />
    <h3 >Amur leopard</h3>
    <p>
    Graceful and elusive, the Amur Leopard roams the Russian Far East.
With striking spots and agile moves, it's a symbol of wilderness and grace.
Sadly, their population dwindles, threatened by habitat loss and poaching.
Conservation efforts strive to protect this majestic feline from vanishing.
    </p>

  
    <Image src='./orange.jpg' size='medium' floated='right' />
    <h3>Sumatran Orangutans</h3>
    <p>
    High up in trees, Sumatran Orangutans swing with agile ease.
Their intelligent eyes reflect the wisdom of the dense rainforest.
Habitat destruction and illegal pet trade threaten their existence.
Conservation aims to safeguard their unique heritage, a treasure unsurpassed.
    </p>
   
    <Image src='./hawkturtle.jpg' size='medium' floated='left' />
    <h3>Hawksbill Turtles</h3>
    <p>
    Graceful in the ocean, Hawksbill Turtles glide through azure waters.
Their intricately patterned shells are a marvel of nature's artistry.
Habitat degradation and illegal trade threaten their fragile existence.
Conservation endeavors strive to protect these ocean wanderers with persistence.
    </p>
   
    <Image src='./javanrhino.jpg' size='medium' floated='right' />
    <h3>Javan Rhino</h3>
    <p>
    Ancient and noble, Javan Rhinos roam Java's dense forests.
Their armored bodies speak of resilience and earthly worth.
Poaching and habitat loss decimate their dwindling numbers.
Conservation stands as their guardian, protecting their rightful slumber.
    </p>
    
    <Image src='./africanphant.jpg' size='medium' floated='left' />
    <h3>African Elephant</h3>
    <p>
    Towering and wise, African Elephants traverse vast savannas.
Their magnificent tusks and familial bonds are a testament to their grandeur.
Poaching for ivory and habitat fragmentation endanger their legacy.
Conservation endeavors strive to secure their future, a majestic sanctuary to ensure.
    </p>

  </Segment>
)

export default WhyweImg