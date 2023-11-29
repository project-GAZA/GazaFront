'use clients';

import React, { useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const API_URL = '//localhost:8080/api/message';

const ShowGazaMap = () => {
  const percentage = 80;

  useEffect(() => {
    // getPercentage();
  }, []);

  return (
    <Box className="firstSction mobile">
      <VStack justify="center" align="center" height="100vh" spacing={4}>
        <Text className="ShowGazaMapTitleFontOne">PEACE IN GAZA</Text>

        {/* 노란색 큰 박스 */}
        <Box
          width="90%"
          height="70%"
          maxWidth="400px"
          // maxHeight="800px"
          position="relative"
          border="5px solid"
          borderColor="yellow.400"
          borderRadius="10px"
          backgroundColor="blackAlpha.800"
        >
          {/* 내부 파랗게 차오르는 영역 */}
          <Box
            position="absolute"
            bottom="0"
            width="100%"
            height={`${percentage}%`}
            backgroundColor="blue.500"
            transition="height 0.6s ease-out"
          />

          {/* 노란색 박스 앞에 수치 표시 -> percentage를 0~100까지로만 일단 제한함 (나중에 목표치에 대한 비율로 설정!) */}
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontWeight="bold"
            fontSize="50px"
            zIndex="999"
          >
            {percentage}%
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ShowGazaMap;
