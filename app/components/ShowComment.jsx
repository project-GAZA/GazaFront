'use clients';

import {
  Card,
  CardHeader,
  Heading,
  Stack,
  Box,
  Text,
  CardBody,
  StackDivider,
} from '@chakra-ui/react';

const ShowComment = () => {
  return (
    <Card sx={{ margin: '0 auto' }}>
      <CardHeader>
        <Heading size="md">댓글 보여줄 창임!</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Overview
            </Heading>
            <Text pt="2" fontSize="sm">
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Analysis
            </Heading>
            <Text pt="2" fontSize="sm">
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ShowComment;
