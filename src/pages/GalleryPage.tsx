import { useEffect, useState } from "react";
import { paints } from "../data/paints";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import { useTranslation } from "react-i18next";
import PaintDetail from "../components/PaintDetail";
import Navbar from "../components/Navbar";
import { MobileMenu } from "../components/MobileMenu";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const GalleryPage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(-1);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallLaptop, setIsSmallLaptop] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobileDevice(true);
    }

    if(window.innerWidth > 1300 && window.innerWidth < 1500) {
      setIsSmallLaptop(true)
    }

    setTimeout(()=>{
      setIsLoading(false)
    }, 6500)
  }, []);

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
          isMobile={isMobileDevice}
        />
      ) : (
        <>
          {openMobileMenu ? (
            <MobileMenu onClose={() => setOpenMobileMenu(false)} />
          ) : (
            <div style={{height: "100%"}}>
              <Navbar onMobileMenuOpen={() => setOpenMobileMenu(true)} />
                {
                  isLoading ? (
                    <div style={{marginTop: isSmallLaptop ? "10%" : "20%", marginLeft:"10%"}}>
                      <Loader color="#b0a300"/>
                    </div>
                  ) : (
                    <>
                    <Box
                      sx={{
                        width: "100%",
                        height: isMobileDevice ? "100%" : 750,
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
                            key={paint.id}
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
                    <Footer />
                    </>
                  )
                }

            </div>
          )}
        </>
      )}
    </>
  );
};

export default GalleryPage;
