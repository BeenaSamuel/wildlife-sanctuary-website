import React from 'react';
import panda from '../images/panda.jpg';
import hippo from '../images/hippo.jpeg';
import FieldSet from '../components/Fieldset';

const Gallery = () => {
  const animals = [
    {
      name: 'Lion',
      imageSrc: 'https://images.pexels.com/photos/41315/africa-african-animal-cat-41315.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Lions are one of the biggest cats in the world and are known for their impressive mane and loud roar.'
    },
    {
      name: 'Elephant',
      imageSrc: 'https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Elephants are the largest land animals in the world and are known for their long trunks and ivory tusks.'
    },
    {
      name: 'Panda',
      // imageSrc: 'https://images.pexels.com/photos/65320/polar-bear-bear-teddy-sleep-65320.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageSrc: panda,
      description: 'Pandas are black and white bears native to central China and are known for their adorable appearance.'
    },
    {
      name: 'Tiger',
      imageSrc: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tigers are the largest cats in the world and are known for their distinctive orange and black stripes.'
    },
    {
      name: 'Giraffe',
      imageSrc: 'https://images.pexels.com/photos/70442/pexels-photo-70442.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Giraffes are the tallest animals in the world and are known for their long necks and spotted coats.'
    },
    // {
    //   name: 'Kangaroo',
    //   imageSrc: 'https://images.unsplash.com/photo-1550448849-9faab352d082',
    //   description: 'Kangaroos are marsupials native to Australia and are known for their powerful hind legs and pouches.'
    // },
    {
      name: 'Gorilla',
      imageSrc: 'https://images.pexels.com/photos/33787/chimpanzee-sitting-sad-mammal.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Gorillas are the largest primates in the world and are known for their strength and intelligence.'
    },
    {
      name: 'Zebra',
      imageSrc: 'https://images.pexels.com/photos/259547/pexels-photo-259547.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Zebras are striped horses native to Africa and are known for their unique patterns.'
    },
    {
      name: 'Hippo',
      // imageSrc: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=400',
      imageSrc: hippo,
      description: 'Hippos are large aquatic mammals and are known for their massive jaws and aggressive behavior.'
    },
    {
      name: 'Penguin',
      imageSrc: 'https://images.pexels.com/photos/689784/pexels-photo-689784.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Penguins are flightless birds native to Antarctica and are known for their tuxedo-like appearance.'
    },
    {
      name: 'Monkey',
      imageSrc: 'https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Monkeys are primates known for their intelligence and dexterity.'
    },
    {
      name: 'Squirrel',
      imageSrc: 'https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Squirrels are small, furry rodents known for their.'
    },
    {
      name: 'Peacock',
      imageSrc: 'https://images.pexels.com/photos/638738/pexels-photo-638738.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Penguins are flightless birds native to Antarctica and are known for their tuxedo-like appearance.'
    }
 
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {animals.map((animal, index) => (
        <div key={index} style={{ width: '30%', marginBottom: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          <br></br> <br></br><h2 style={{ textAlign: 'center', padding: '10px 0' }}>{animal.name}</h2>
          <img src={animal.imageSrc} alt={animal.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <p style={{ margin: '10px', lineHeight: '1.5' }}>{animal.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;