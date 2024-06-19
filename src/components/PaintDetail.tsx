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
      <div className="paint-number-info">
        <Typography className="small-title">
          {currentPaint} / {allPaintsLenght}
        </Typography>
      </div>
      <IconButton onClick={onClose} className="paint-detail-close-button">
        <CloseIcon className="paint-detail-close-icon" />
      </IconButton>
      <div className="paint-detail-container">
        {currentPaint !== 1 && (
          <IconButton
            onClick={backToPreviousImage}
            className="paint-detail-back-button"
          >
            <ArrowBackIosNewIcon className="paint-detail-back-icon" />
          </IconButton>
        )}
        <div
          className="paint-detail-image-container"
          style={{
            marginLeft:
              currentPaint === 1 && isMobile
                ? "18.5%"
                : currentPaint === 1
                ? "26.5%"
                : "auto",
            marginRight:
              currentPaint === allPaintsLenght && isMobile ? "13%" : "auto",
          }}
        >
          <img
            src={paint.src}
            alt=""
            height={isMobile ? paint.mobileHeight : paint.height}
            width={isMobile ? paint.mobileWidth : paint.width}
            style={{
              borderRadius: "5px",
              marginLeft:
                currentPaint === 1 && isMobile
                  ? 0
                  : (currentPaint === 7 || currentPaint === allPaintsLenght) &&
                    isMobile
                  ? "5%"
                  : currentPaint === 9 && isMobile
                  ? "8%"
                  : isMobile
                  ? "1%"
                  : 0,
            }}
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
        {currentPaint !== allPaintsLenght && (
          <IconButton
            onClick={goToNextImage}
            className="paint-detail-next-button"
          >
            <ArrowForwardIosIcon className="paint-detail-next-icon" />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default PaintDetail;
