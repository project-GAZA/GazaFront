'use clients';

import { Accordion, AccordionItem, AccordionIcon } from '@chakra-ui/react';
import { dataTypes } from '@/types';
import Component from './component.style';

const ExplainComponent = ({
  explain,
}: {
  explain: Array<dataTypes.ExplainType>;
}) => {
  return (
    <Accordion allowMultiple>
      {explain.map((v: dataTypes.ExplainType): JSX.Element => {
        return (
          <AccordionItem key={v.title}>
            <Component.ExplainButton>
              <Component.ExplainText>{v.title}</Component.ExplainText>
              <AccordionIcon />
            </Component.ExplainButton>
            <Component.ArcdText
              dangerouslySetInnerHTML={{ __html: v.content }}
            />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export default ExplainComponent;
