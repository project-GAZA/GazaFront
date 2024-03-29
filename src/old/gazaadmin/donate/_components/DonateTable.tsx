'use client';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  Button,
  TableContainer,
} from '@chakra-ui/react';
import React from 'react';
import { DonateData } from '@/types/data';

type DonateTableProps = {
  onOpen: any;
  setSubmit: React.SetStateAction<any>;
  data: any;
};

const thead = [
  '생성날짜',
  '후원금액',
  '토스아이디',
  '전화번호',
  '메세지ID',
  '금액 수정',
];

const DonateTable = ({ onOpen, setSubmit, data }: DonateTableProps) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>지원금 현황</TableCaption>
        <Thead>
          <Tr>
            {thead.map(v => (
              <th key={v}>{v}</th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Array.isArray(data) &&
            data.map((v: DonateData) => {
              const onClickModify = () => {
                setSubmit(v);
                onOpen();
              };
              return (
                <Tr key={v.donateId}>
                  <Td>{v.createDt}</Td>
                  <Td isNumeric>{v.amount}</Td>
                  <Td>{v.tossId}</Td>
                  <Td>{v.telNumber}</Td>
                  <Td isNumeric>{v.messageId}</Td>
                  <Td>
                    <Button onClick={onClickModify}>수정하기</Button>
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DonateTable;
