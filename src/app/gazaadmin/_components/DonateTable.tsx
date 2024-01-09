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
  useDisclosure,
  Modal,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { fetchGetDonateList } from '@/utils/api';
import { DonateData } from '@/types/data';
import DonateModifyModal from './DonateModifyModal';

const thead = [
  '생성날짜',
  '후원금액',
  '토스아이디',
  '전화번호',
  '메세지ID',
  '금액 수정',
];

const DonateTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState({});
  const fetchAndSetData = async () => {
    const datas = await fetchGetDonateList('new', 1000, 0);
    setData(datas);
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  return (
    <>
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
            {data.map((v: DonateData) => {
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
                    <Button onClick={onClickModify}>금액 수정</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <DonateModifyModal onClose={onClose} donate={submit} />
      </Modal>
    </>
  );
};

export default DonateTable;
