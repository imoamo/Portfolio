import React, { useState } from 'react';
import { Box, Flex, Link, Button, Image } from '@chakra-ui/react';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Full-screen overlay for mobile */}
            <Box
                as="nav"
                className="navbar-overlay"
                position="fixed"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="sticky"
                bg="rgb(15,25,43)"
                boxShadow="0px 2px 4px rgba(156, 19, 19, 0.05)"
                overflowY="auto"
                display={{ base: 'block', md: 'none' }} // Show only on small screens
                transform={menuOpen ? 'translateX(0)' : 'translateX(100%)'} // Slide in/out animation
                transition="transform 0.3s ease"
            >
                <Flex
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                    color="white"
                >
                    <Link href="#about" marginY="4" fontSize="xl" onClick={closeMenu}>About</Link>
                    <Link href="#skills" marginY="4" fontSize="xl" onClick={closeMenu}>Skills</Link>
                    <Link href="#projects" marginY="4" fontSize="xl" onClick={closeMenu}>Projects</Link>
                    <Link href="#contact" marginY="4" fontSize="xl" onClick={closeMenu}>Contact</Link>
                </Flex>
            </Box>

            {/* Navbar for larger screens */}
            <Box
                as="nav"
                className="navbar"
                position="fixed"
                top="0"
                left="0"
                right="0"
                zIndex="sticky"
                bg="rgb(15,25,43)"
                boxShadow="0px 2px 4px rgba(156, 19, 19, 0.05)"
                display={{ base: 'none', md: 'block' }} // Show only on large screens
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    maxWidth="container.xl"
                    marginX="auto"
                    paddingY="4"
                    paddingX="6"
                >
                    <Link href="#" className="title" fontSize="2xl" fontWeight="bold" color="blue.500">Portfolio</Link>
                    <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
                        <Link href="#about" marginX="4" fontSize="xl" color="blue.500">About</Link>
                        <Link href="#skills" marginX="4" fontSize="xl" color="blue.500">Skills</Link>
                        <Link href="#projects" marginX="4" fontSize="xl" color="blue.500">Projects</Link>
                        <Link href="#contact" marginX="4" fontSize="xl" color="blue.500">Contact</Link>
                    </Flex>
                </Flex>
            </Box>

            {/* Hamburger icon button */}
            <Button
                position="fixed"
                top="4"
                right="4"
                zIndex="sticky"
                display={{ base: 'block', md: 'none' }}
                onClick={() => setMenuOpen(!menuOpen)}
                variant="ghost"
                fontSize="xl"
                color="gray.600"
                _hover={{ color: 'gray.800' }}
                padding="1"
            >
                <Image src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" />
            </Button>
        </>
    );
};
