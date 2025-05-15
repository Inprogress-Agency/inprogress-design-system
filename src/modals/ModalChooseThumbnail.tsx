import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import Modal from './Modal/Modal';
import LineGallery from '../icons/LineGallery';
import { RootState } from '../types/RootState';

export type ModalHandle = BottomSheetModal;

export interface ModalChooseThumbnailProps {
  onChange: () => void;
  onReset: () => void;
  children: (ref: React.RefObject<ModalHandle | null>) => React.ReactNode;
}

const ModalChooseThumbnail: React.FC<ModalChooseThumbnailProps> = ({
  onChange,
  onReset,
  children,
}) => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme);
  const modalRef = useRef<ModalHandle | null>(null);

  const colors = (theme as any).colors ?? {};

  return (
    <>
      {children(modalRef)}

      <Modal
        ref={modalRef as React.RefObject<ModalHandle>}
        closable
        header={<LineGallery color={colors.black} />}
        title={t('modal.chooseThumbnail.title')}
        actions={[
          {
            title: t('modal.chooseThumbnail.btn.perso'),
            onPress: () => {
              onChange();
              modalRef.current?.dismiss();
            },
          },
          {
            title: t('modal.chooseThumbnail.btn.default'),
            onPress: () => {
              onReset();
              modalRef.current?.dismiss();
            },
            color: colors.grey1,
          },
        ] as unknown}
      />
    </>
  );
};

export default ModalChooseThumbnail;
