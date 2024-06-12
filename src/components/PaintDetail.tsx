import { IconButton, Typography } from "@mui/material";
import { Paint } from "../interface";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface PaintDetailProps {
  paint: Paint;
  allPaintsLenght: number;
  currentPaint: number;
  goToNextImage: () => void;
  backToPreviousImage: () => void;
  onClose: () => void;
  isMobile: boolean;
}

const PaintDetail = ({
  paint,
  allPaintsLenght,
  currentPaint,
  goToNextImage,
  backToPreviousImage,
  onClose,
  isMobile,
}: PaintDetailProps) => {
  return (
    <div className="paint-container">
      <IconButton onClick={onClose} className="paint-detail-close-button">
        <CloseIcon className="paint-detail-close-icon" />
      </IconButton>
      <div className="paint-detail-container">
        <IconButton
          onClick={backToPreviousImage}
          className="paint-detail-back-button"
        >
          <ArrowBackIosNewIcon className="paint-detail-back-icon" />
        </IconButton>
        <div className="paint-detail-image-container">
          <img
            src={paint.src}
            alt=""
            height={isMobile ? paint.mobileHeight : paint.height}
            width={isMobile ? paint.mobileWidth : paint.width}
            style={{ borderRadius: "5px", marginLeft: isMobile ? "12%" : 0 }}
          />
          <div className="paint-detail-description-container">
            <Typography className="small-title">{paint.title}</Typography>
            <Typography className="paragraph">{paint.description}</Typography>
            <div className="paint-additional-info-container">
              <Typography>{paint.year}</Typography>
              <Typography>{paint.paintSize}</Typography>
            </div>
          </div>
        </div>
        <IconButton
          onClick={goToNextImage}
          className="paint-detail-next-button"
        >
          <ArrowForwardIosIcon className="paint-detail-next-icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default PaintDetail;
