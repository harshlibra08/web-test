import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import Event1 from "./Assets/event1.png";
import Event2 from "./Assets/event2.png";
import Event3 from "./Assets/event3.png";
import Event4 from "./Assets/event4.png";
import Event5 from "./Assets/event5.png";
import Event6 from "./Assets/event6.png";
import EventBg from "./Assets/eventbg.png";
type Props = {};

const Events = (props: Props) => {
	return (
		<Paper w={1440} h={1046} withBorder style={{ backgroundColor: "black" }}>
			<Text color="#E4E8ED" size={14} mt={106} ml={140}>
				WHAT HAVE WE BEEN DOING
			</Text>
			<Group noWrap spacing={0}>
				<Box w="100%">
					<Divider
						size="md"
						my={"60px"}
						mr={"157px"}
						label={
							<Text size={"32px"} ml={140} color="#FFF">
								Events
							</Text>
						}
						labelPosition="left"
					/>
				</Box>
			</Group>
			<Group position="center" spacing="lg">
				<Grid gutter="lg">
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event1}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event2}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event3}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event4}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event5}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
					<Grid.Col span={4}>
						<Box pos="relative" w={1200} h={280}>
							<Image
								src={EventBg}
								height={202}
								width={82}
								pos="absolute"
								top={0}
								left={114}
								w="100%"
								h="100%"
							/>
							<Image
								src={Event6}
								height={164}
								width={164}
								pos="absolute"
								top={20}
								left={135}
								w="100%"
								h="100%"
							/>
							<Text color="#E4E8ED" size={12} ml={319}>
								22nd January, 2023.
							</Text>
							<Text color="#F6F6F6" size={16} ml={319} mt={15} w={186}>
								Mumbai ACE Tech Exhibition
							</Text>
						</Box>
					</Grid.Col>
				</Grid>
				<UnstyledButton>
					<Group>
						<Text size="md" color="white">
							Show more
						</Text>
						{<IconChevronDown size="20px" color="#FFF" />}
					</Group>
				</UnstyledButton>
			</Group>
		</Paper>
	);
};

export default Events;
