import { useState } from "react";
import { paints } from "../data/paints";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import PaintDetail from "../components/PaintDetail";
import Navbar from "../components/Navbar";
import { MobileMenu } from "../components/MobileMenu";
import Footer from "../components/Footer";

const GalleryPage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const currentImage = paints[index];
  const nextIndex = (index + 1) % paints.length;
  const prevIndex = (index + paints.length - 1) % paints.length;

  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <>
      {!!currentImage ? (
        <PaintDetail
          paint={currentImage}
          onClose={handleClose}
          goToNextImage={handleMoveNext}
          backToPreviousImage={handleMovePrev}
          allPaintsLenght={paints.length}
          currentPaint={index + 1}
        />
      ) : (
        <>
          {openMobileMenu ? (
            <MobileMenu onClose={() => setOpenMobileMenu(false)} />
          ) : (
            <>
              <Navbar onMobileMenuOpen={() => setOpenMobileMenu(true)} />
              <div>
                <Box
                  sx={{
                    width: "100%",
                    height: 850,
                    overflowY: "scroll",
                  }}
                >
                  <Typography className="title" textAlign={"center"} my={"2%"}>
                    {t("i-miei-lavori")}
                  </Typography>
                  <ImageList
                    variant="masonry"
                    cols={3}
                    gap={8}
                    style={{ paddingLeft: "3%", paddingRight: "3%" }}
                  >
                    {paints.map((paint, index) => (
                      <ImageListItem
                        key={paint.src}
                        className="paint-item"
                        onClick={() => handleClick(index)}
                      >
                        <img
                          srcSet={paint.src}
                          src={paint.src}
                          alt={paint.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          className="paint-item-info"
                          title={paint.title}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </>
  );
};

export default GalleryPage;
