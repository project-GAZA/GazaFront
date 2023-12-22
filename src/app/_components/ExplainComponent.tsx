'use clients';

import { Accordion, AccordionItem, AccordionIcon } from '@chakra-ui/react';
import { dataTypes } from '@/types';
import Common from './component.style';

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
            <Common.ExplainButton>
              <Common.ExplainText>{v.title}</Common.ExplainText>
              <AccordionIcon />
            </Common.ExplainButton>
            <Common.ArcdText dangerouslySetInnerHTML={{ __html: v.content }} />
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export default ExplainComponent;
