const adjectives = [
  '힘센',
  '열나는',
  '빠른',
  '느린',
  '조용한',
  '시끄러운',
  '밝은',
  '어두운',
  '긍정적인',
  '부정적인',
  '큰',
  '작은',
  '거대한',
  '미세한',
  '높은',
  '낮은',
  '가벼운',
  '무거운',
  '강력한',
  '약한',
  '부드러운',
  '거친',
  '따뜻한',
  '차가운',
  '신선한',
  '오래된',
  '젊은',
  '노인',
  '맛있는',
  '혐오스러운',
  '멋진',
  '촌스러운',
  '현대적인',
  '고전적인',
  '평범한',
  '특이한',
  '사랑스러운',
  '귀여운',
  '화려한',
  '소박한',
  '매끄러운',
  '거친',
  '반짝이는',
  '흐릿한',
  '아름다운',
  '추한',
  '잘생긴',
  '명랑한',
  '우울한',
  '활기찬',
  '침착한',
  '불안한',
  '편안한',
  '불편한',
  '행복한',
  '슬픈',
  '기쁜',
  '분노한',
  '만족한',
  '실망한',
  '흥미로운',
  '지루한',
  '신비로운',
  '평이한',
  '달콤한',
  '쓴',
  '매운',
  '짠',
  '신',
  '고소한',
  '덥다',
  '춥다',
  '온화한',
  '습한',
  '건조한',
  '색다른',
  '비슷한',
  '같은',
  '다른',
  '독특한',
  '정확한',
  '부정확한',
  '빠른',
  '느린',
  '적절한',
  '부적절한',
  '올바른',
  '그릇된',
  '예리한',
  '둔한',
  '유용한',
  '쓸모없는',
  '필수적인',
  '불필요한',
  '가능한',
  '불가능한',
  '보이는',
  '보이지 않는',
  '듣기 좋은',
  '시끄러운',
];
const nouns = ['춘식이', '무지', '라이언', '어피치', '튜브', '네오', '프로도'];

const GenerateNickName = () => {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adj} ${noun}`;
};

export default GenerateNickName;
