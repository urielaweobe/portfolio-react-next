import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:(234)8144521602">(234)8144521602</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:urielaweobe@gmail.com">urielaweobe@gmail.com</LinkItem>
        </LinkColumn>
        
      </LinkList>
      
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Consistency is key</Slogan>
        </CompanyContainer>

        <SocialContainer>
        
          <SocialIcons href='https://github.com/urielaweobe'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/uriel-awe-obe/'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>

          <SocialIcons href='https://instagram.com/urielaweobe'>
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
      
        </SocialContainer>
        
      </SocialIconsContainer>

    </FooterWrapper>
  );
};

export default Footer;
