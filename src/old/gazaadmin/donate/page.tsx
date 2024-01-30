'use client';

import { useState, useEffect } from 'react';
import { fetchGetDonateList } from '@/utils/api';
import { Modal, ModalOverlay, useDisclosure } from '@chakra-ui/react';

import { useRouter } from 'next/navigation';
import DonateModifyModal from './_components/DonateModifyModal';
import DonateTable from './_components/DonateTable';

const GazaAdminDonate = () => {
  const navigator = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submit, setSubmit] = useState({});
  const [donates, setDonates] = useState([]);

  const fetchAndSetData = async () => {
    try {
      const { data, status } = await fetchGetDonateList('new', 1000, 0);
      if (status === 200) setDonates(data);
    } catch (err) {
      navigator.push('/gazaadmin');
    }
  };

  useEffect(() => {
    fetchAndSetData();
  }, []);

  return (
    <>
      <DonateTable setSubmit={setSubmit} onOpen={onOpen} data={donates} />;
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <DonateModifyModal
          fetchAndSetData={fetchAndSetData}
          onClose={onClose}
          donate={submit}
        />
      </Modal>
    </>
  );
};

export default GazaAdminDonate;
