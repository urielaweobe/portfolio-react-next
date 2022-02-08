import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section roq nopadding>
    <LeftSection>
      <SectionTitle main center>
        I am Uriel Awe-Obe <br />
        a Frontend Developer.
      </SectionTitle>
      <SectionText>
        A professional responsible for the design and implementaion of a interface. 
        Making website beautiful, functional, and fast.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;