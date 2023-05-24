import React from 'react';
import FieldSet from '../components/Fieldset';
//import './about.css';

function About() {
  return (
    <div >
      <h1>Protecting Our Planet's Wildlife</h1>
      <p>Our planet is home to a vast array of wildlife, from majestic elephants and lions to tiny hummingbirds and butterflies. Unfortunately, many of these species are under threat due to human activity, including habitat destruction, climate change, and hunting. It is up to all of us to protect these animals and their habitats to ensure they continue to thrive for generations to come.</p>
     
      <h2>The Importance of Conservation</h2>
      <p>Conservation is important for many reasons. By protecting wildlife and their habitats, we help maintain biodiversity, which is essential for the health of our planet's ecosystems. Additionally, many species have cultural and economic value, providing food, medicine, and other resources for human communities. By conserving these species, we also support the livelihoods of people who depend on them.</p>
      <h2>The Role of Sanctuaries in Conservation</h2>
      <p>Sanctuaries are crucial for the protection of endangered species and their habitats. They provide safe havens for animals to live and breed, free from the threats of poaching and habitat destruction. Additionally, they allow researchers and conservationists to study these species up close, gaining a better understanding of their needs and behaviors.</p>
      <h2>The Importance of Nature</h2>
      <p>Nature provides countless benefits to humans and the planet as a whole. It produces oxygen, purifies air and water, and regulates the climate. Additionally, spending time in nature has been shown to improve mental and physical health, reduce stress, and increase creativity and productivity.</p>
      <p>Conservation is important for many reasons. By protecting wildlife and their habitats, we help maintain biodiversity, which is essential for the health of our planet's ecosystems. Additionally, many species have cultural and economic value, providing food, medicine, and other resources for human communities. By conserving these species, we also support the livelihoods of people who depend on them.</p>
      <br></br><br></br>
      <FieldSet
      heading = "Elephants"
    imageSrc="https://source.unsplash.com/featured/?elephant"
    paragraph="Elephants are a keystone species, meaning they play a critical role in maintaining the structure and function of their ecosystem. By protecting them, we help ensure the health of the entire ecosystem."
/>

<FieldSet
      heading = "Tigers"
    imageSrc="https://source.unsplash.com/featured/?tiger"
    paragraph="Tigers are apex predators, at the top of the food chain. By conserving them and their habitat, we help protect the biodiversity of the entire ecosystem."
/>

<FieldSet
      heading = "Butterfly"
    imageSrc="https://source.unsplash.com/featured/?butterfly"
    paragraph="Butterflies are important pollinators, helping to fertilize plants and ensure their survival. By protecting them, we help ensure the health of our planet's ecosystems."
/>
       
      
     
      
     
    </div>
  );
}

export default About;
