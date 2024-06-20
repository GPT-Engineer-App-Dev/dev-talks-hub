import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Divider } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaDatabase, FaCloud, FaMobileAlt } from "react-icons/fa";

const Navbar = () => (
  <Flex as="nav" bg="brand.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
    <Heading size="md">Tech Forum</Heading>
    <HStack spacing={4}>
      <Link href="#home" display="flex" alignItems="center">
        <FaHome />
        <Text ml={2}>Home</Text>
      </Link>
      <Link href="#webdev" display="flex" alignItems="center">
        <FaLaptopCode />
        <Text ml={2}>Web Development</Text>
      </Link>
      <Link href="#database" display="flex" alignItems="center">
        <FaDatabase />
        <Text ml={2}>Databases</Text>
      </Link>
      <Link href="#cloud" display="flex" alignItems="center">
        <FaCloud />
        <Text ml={2}>Cloud Computing</Text>
      </Link>
      <Link href="#mobile" display="flex" alignItems="center">
        <FaMobileAlt />
        <Text ml={2}>Mobile Development</Text>
      </Link>
    </HStack>
  </Flex>
);

const Footer = () => (
  <Box as="footer" bg="brand.800" color="white" padding={4} textAlign="center">
    <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <VStack spacing={8} align="stretch" padding={8}>
        <Box id="home">
          <Heading as="h2" size="xl" mb={4}>Welcome to Tech Forum</Heading>
          <Text fontSize="lg">A place to discuss the latest in technology.</Text>
        </Box>
        <Divider />
        <Box id="webdev">
          <Heading as="h2" size="lg" mb={4}>Web Development</Heading>
          <Text fontSize="md">Discuss the latest trends and technologies in web development.</Text>
        </Box>
        <Divider />
        <Box id="database">
          <Heading as="h2" size="lg" mb={4}>Databases</Heading>
          <Text fontSize="md">Share knowledge and best practices for database management.</Text>
        </Box>
        <Divider />
        <Box id="cloud">
          <Heading as="h2" size="lg" mb={4}>Cloud Computing</Heading>
          <Text fontSize="md">Explore the world of cloud computing and its applications.</Text>
        </Box>
        <Divider />
        <Box id="mobile">
          <Heading as="h2" size="lg" mb={4}>Mobile Development</Heading>
          <Text fontSize="md">Discuss mobile app development for various platforms.</Text>
        </Box>
      </VStack>
      <Footer />
    </Container>
  );
};

export default Index;