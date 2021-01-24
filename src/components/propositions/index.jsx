import React from 'react'
import { Flex } from 'rebass'
import { CustomSvg } from '../../svgs'
import { Box, Text } from '../common'
import { PropositionsGridView, PropositionWrapper } from './styled'

const PropositionItem = ({ icon, title, text, ...props }) => (
  <PropositionWrapper {...props}>
    <Flex alignItems='center'>
      <CustomSvg name={icon} fill='#000' size='48' />
      <Text ml={3} fontSize='1.5rem' color='#000' fontWeight='bold'>{title}</Text>
    </Flex>
    <Text mt={3} color='#212121' lineHeight='1.75'>{text}</Text>
  </PropositionWrapper>
)

const Propositions = ({ propositions }) => {
  return (
    <PropositionsGridView>
      {propositions.map(proposition => (
        <PropositionItem {...proposition} key={proposition.title} />
      ))}
    </PropositionsGridView>
  )
}

export default Propositions
