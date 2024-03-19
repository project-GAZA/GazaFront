import Comments from '@/component/Section_Message/Modules/Comments';
import SortButtons from '@/component/Section_Message/Modules/SortButtons';

const SectionMessage = () => {
  return (
    <>
      <SortButtons theme="primary" />
      <Comments />
    </>
  );
};

export default SectionMessage;
