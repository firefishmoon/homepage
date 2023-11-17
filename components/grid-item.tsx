import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Link, Divider } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ href, title, date }) => (
    <LinkBox cursor='pointer' textColor="white" bgColor="gray.600" as="article" rounded="md" minH={100} p={4}>
        <LinkOverlay href={href} target='_blank'>
            <Text mt={2} fontSize='xl' fontWeight='bold'>{title}</Text>
            <Divider mt={2} mb={2}></Divider>
            <Text fontSize='sm' textColor='gray.400'>
                {date}
            </Text>
        </LinkOverlay>
    </LinkBox>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
    <Box w="100%" textAlign="center">
        <LinkBox
            as={NextLink}
            href={`/works/${id}`}
            scroll={false}
            cursor="pointer"
        >
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
            <LinkOverlay as="div" href={`/works/${id}`}>
                <Text mt={2} fontSize={20}>
                    {title}
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
    />
)
