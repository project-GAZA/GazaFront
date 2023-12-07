'use clients';

import React, { useState } from 'react';

import { Accordion, AccordionItem, AccordionIcon } from '@chakra-ui/react';
import { ExplainButton, ExplainText, ArcdText } from './component.style';

const ExplainComponent = ({ explain }) => {
  return (
    <Accordion allowMultiple>
      {explain.map(v => {
        return (
          <AccordionItem key={v.title}>
            <ExplainButton>
              <ExplainText>{v.title}</ExplainText>
              <AccordionIcon />
            </ExplainButton>
            <ArcdText dangerouslySetInnerHTML={{ __html: v.content }} />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export default ExplainComponent;
