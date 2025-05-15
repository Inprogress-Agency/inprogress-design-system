import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {
  ItemWrapper,
  LabelText,
  EditIcon,
} from './ThumbnailPreview.styles';
import { ThumbnailPreviewProps } from './ThumbnailPreview.types';
import { handleError } from '../../utils/errorHelper';
import { RootState } from '../../types/RootState';
import { useSelector } from 'react-redux';
import CustomThumbnail from './CustomThumbnail';
import ModalChooseThumbnail from '../../modals/ModalChooseThumbnail';

const ThumbnailPreview: React.FC<ThumbnailPreviewProps> = ({
  icon,
  label,
  thumbnail,
  setThumbnail,
  initialValue = null,
  width = 50,
  height = 50,
}) => {
 const { theme } = useSelector((state: RootState) => state.theme)


  const handleChangeThumbnail = async () => {
    try {
      const { path } = await ImagePicker.openPicker({
        width,
        height,
        cropping: true,
        compressImageMaxWidth: width,
        compressImageMaxHeight: height,
        compressImageQuality: 0.85,
      });

      setThumbnail(path);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <ModalChooseThumbnail
      onChange={handleChangeThumbnail}
      onReset={() => setThumbnail(initialValue)}
    >
      {(ref) => (
        <ItemWrapper onPress={() => ref.current?.present()}>
          {thumbnail ? (
            <CustomThumbnail source={{ uri: thumbnail }} />
          ) : (
            icon
          )}
          <LabelText>{label}</LabelText>
          <EditIcon />
        </ItemWrapper>
      )}
    </ModalChooseThumbnail>
  );
};

export default ThumbnailPreview;
