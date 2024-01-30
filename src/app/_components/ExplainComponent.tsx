'use clients';

import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { dataTypes } from '@/types';
import styles from './ExplainComponent.module.scss';

const ExplainComponent = ({
  explain,
}: {
  explain: Array<dataTypes.ExplainType>;
}) => {
  return (
    <Accordion allowMultiple>
      {explain.map((v: dataTypes.ExplainType) => (
        <AccordionItem key={v.title}>
          <h2>
            <AccordionButton className={styles.explainButton}>
              <Box className={styles.explainText}>{v.title}</Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            className={styles.arcdText}
            dangerouslySetInnerHTML={{ __html: v.content }}
          />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ExplainComponent;
