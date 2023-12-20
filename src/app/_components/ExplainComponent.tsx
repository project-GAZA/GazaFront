'use clients';

import { Accordion, AccordionItem, AccordionIcon } from '@chakra-ui/react';
import { dataTypes } from '@/types';
import { ExplainButton, ExplainText, ArcdText } from './component.style';

const ExplainComponent = ({ explain }) => {
  return (
    <Accordion allowMultiple>
      {explain.map((v: dataTypes.ExplainType): JSX.Element => {
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
