'use clients';

import React, { useEffect } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const API_URL = '//13.124.123.16:8080/api/message';

const ShowGazaMap = () => {
  //   const [percentage, setPercentage] = useState(0);

  //   const getPercentage = async () => {
  //     const response = await fetch(API_URL, {
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json;charset=UTF-8',
  //       },
  //     });
  //     try {
  //         if (response.status === 200){
  //             const { number } = await response.json();
  //             setPercentage(number);
  //             console.log(number);
  //         } else {
  //             console.error('Failed to fetch data:', response.status);
  //         }
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //     }
  //     return;
  //   };

  // 테스트용 데이터 (임시 하드코딩)
  const percentage = 80;

  useEffect(() => {
    // getPercentage();
  }, []);

  return (
    <>
      <VStack justify="center" align="center" height="100vh" spacing={4}>
        <Text color="yellow.400" fontSize="35px" fontWeight="bold">
          메시지 참여 현황
        </Text>
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
    </>
  );
};

export default ShowGazaMap;
