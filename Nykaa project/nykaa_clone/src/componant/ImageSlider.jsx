import React, { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { small } from "framer-motion/client";

export const ImageSlider = () => {
  // Image array
  const images = [
    "https://images-static.nykaa.com/uploads/2d0411ad-bbc4-48fb-958e-3b049df26009.gif",
    "https://images-static.nykaa.com/creatives/fceb9072-cd92-4637-a380-25d680e1be42/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/1a4117d3-3c86-4e20-9093-60f420e8ed56/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/3c71fd23-b89e-4915-bb9f-16923cbc6109/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/5466f07f-b26e-4479-9e69-92d6e4a439c5/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/2a5b5234-46e7-44d3-a4b4-6d6d98fa8947/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/8c4ebbab-f285-4e6a-be1a-3a13955051d6/default.jpg?tr=cm-pad_resize,w-900",
    "https://images-static.nykaa.com/creatives/6a55d283-bbdd-43e9-842e-cf4099c8aba7/default.jpg?tr=cm-pad_resize,w-900",
  ];

  // State to track the current index of the first visible image
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of images to display at a time based on screen size
  const imagesToShow = useBreakpointValue({ base: 2, md: 3 });

  // Handlers for next and previous buttons with infinite looping logic
  const handleNext = () => {
    const nextIndex = (currentIndex + imagesToShow) % images.length; // Loop back to the start
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - imagesToShow + images.length) % images.length; // Loop back to the end
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <Box p={4} maxW="100%" m="auto" h="700px">
        <HStack justify="space-between" align="center">
          {/* Left Arrow */}
          <IconButton 
            icon={<ArrowBackIcon />}
            aria-label="Previous"
            onClick={handlePrev}
          />

          {/* Image Slider */}
          <Box
            
            w="100%"
          >
            <HStack spacing={4} justify="center">
              {images
                .slice(currentIndex, currentIndex + imagesToShow) // Show images based on index
                .map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    boxSize={{ base: "250px", md: "350px" }}
                    objectFit="cover"
                    borderRadius="md"
                    boxShadow="md"
                  />
                ))}
            </HStack>
          </Box>

          {/* Right Arrow */}
          <IconButton
            icon={<ArrowForwardIcon />}
            aria-label="Next"
            onClick={handleNext}
          />
        </HStack>
      </Box>
    </>
  );
};
