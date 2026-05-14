import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import h1 from '../../../../assets/images/history-1.png';
import h2 from '../../../../assets/images/history-2.png';
import h3 from '../../../../assets/images/history-3.png';
import h4 from '../../../../assets/images/history-4.png';
import h5 from '../../../../assets/images/history-5.png';
import h6 from '../../../../assets/images/history-6.png';
import h7 from '../../../../assets/images/history-7.png';
import h8 from '../../../../assets/images/history-8.png';
import h9 from '../../../../assets/images/history-9.png';
import h10 from '../../../../assets/images/history-10.png';
import h11 from '../../../../assets/images/history-11.png';
import h12 from '../../../../assets/images/history-12.png';

import {
  ModalOverlay,
  ModalWrapper,
  CloseButton,
  ContentArea,
  LeftPanel,
  MainImageBox,
  MainImagePlaceholder,
  YearLarge,
  YearDescription,
  RightPanel,
  TimelineList,
  TimelineCardImage,
  TimelineCardImagePlaceholder,
  TimelineCardYear,
} from './HistoryModal.styles';

const HISTORY_DATA = [
  {
    id: 1,
    year: '1966년',
    yearShort: '1966',
    image: h1,
    description:
      '더글러스 톰킨스, 케네스 클롭이 샌프란시스코에 아웃도어 장비 소매점 창업.\n노스페이스의 시작이자, 진짜 탐험을 위한 장비라는 철학이 출발한 시점이었다.',
  },
  {
    id: 2,
    year: '1970s',
    yearShort: '1970s',
    image: h2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    year: '1990s',
    yearShort: '1990s',
    image: h3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    year: '1997년',
    yearShort: '1997',
    image: h4,
    description:
      '영원아웃도어를 통해 한국 시장에 본격 진출.\n국내 아웃도어 시장에서 노스페이스의 입지를 다지기 시작했다.',
  },
  {
    id: 5,
    year: '2004년',
    yearShort: '2004',
    image: h5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    year: '2009년',
    yearShort: '2009',
    image: h6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 7,
    year: '2013년',
    yearShort: '2013',
    image: h7,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 8,
    year: '2016년',
    yearShort: '2016',
    image: h8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 9,
    year: '2018년',
    yearShort: '2018',
    image: h9,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 10,
    year: '2019년',
    yearShort: '2019',
    image: h10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 11,
    year: '2021년',
    yearShort: '2021',
    image: h11,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 12,
    year: '2023년',
    yearShort: '2023',
    image: h12,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

function HistoryModal({ isOpen, onClose, selectedId, onSelect }) {
  // 직전 selectedId 추적 (layoutId 매칭용)
  const previousIdRef = useRef(selectedId);
  const previousId = previousIdRef.current;

  useEffect(() => {
    previousIdRef.current = selectedId;
  }, [selectedId]);

  // ESC 키로 닫기 + 배경 스크롤 잠금
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const selectedItem =
    HISTORY_DATA.find((item) => item.id === selectedId) || HISTORY_DATA[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalWrapper
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="닫기">
              ×
            </CloseButton>

            <ContentArea>
              {/* 좌측 메인 디스플레이 */}
              <LeftPanel>
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={selectedItem.id}
                    layoutId={`history-image-${selectedItem.id}`}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      opacity: { duration: 0.5 },
                      y: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                      scale: { duration: 0.5 },
                      layout: { type: 'spring', stiffness: 200, damping: 26 },
                    }}
                    style={{
                      width: '100%',
                      maxWidth: '640px',
                      marginBottom: '48px',
                    }}
                  >
                    <MainImageBox style={{ marginBottom: 0, maxWidth: 'none' }}>
                      {selectedItem.image ? (
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.year}
                        />
                      ) : (
                        <MainImagePlaceholder>
                          <span>{selectedItem.year}</span>
                        </MainImagePlaceholder>
                      )}
                    </MainImageBox>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${selectedItem.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ width: '100%' }}
                  >
                    <YearLarge>{selectedItem.year}</YearLarge>
                    <YearDescription>
                      {selectedItem.description.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                            {i < selectedItem.description.split('\n').length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </YearDescription>
                  </motion.div>
                </AnimatePresence>
              </LeftPanel>

              {/* 우측 타임라인 */}
              <RightPanel>
                <TimelineList>
                  <AnimatePresence mode="popLayout">
                    {HISTORY_DATA.filter(
                      (item) => item.id !== selectedId
                    ).map((item) => {
                      // 이전에 선택됐던 카드에만 layoutId 부여
                      // (좌측에서 사라지는 이미지가 이 자리로 이동)
                      const isPreviouslySelected = item.id === previousId;

                      return (
                        <motion.div
                          key={item.id}
                          layout
                          layoutId={
                            isPreviouslySelected
                              ? `history-image-${item.id}`
                              : undefined
                          }
                          initial={
                            isPreviouslySelected ? false : { opacity: 0 }
                          }
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            layout: {
                              type: 'spring',
                              stiffness: 200,
                              damping: 26,
                            },
                            opacity: { duration: 0.3 },
                          }}
                          onClick={() => onSelect(item.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          <TimelineCardImage>
                            {item.image ? (
                              <img src={item.image} alt={item.year} />
                            ) : (
                              <TimelineCardImagePlaceholder />
                            )}
                          </TimelineCardImage>
                          <TimelineCardYear>{item.year}</TimelineCardYear>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </TimelineList>
              </RightPanel>
            </ContentArea>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}

export default HistoryModal;