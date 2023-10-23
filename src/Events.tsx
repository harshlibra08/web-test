import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import React from "react";
import Event1 from "./Assets/event1.png";
import EventBg from "./Assets/eventbg.png";
type Props = {};

const Events = (props: Props) => {
	return (
		<Paper w={1440} h={1046} bg={"#000"} mt={300}>
			<Text style={{ color: "#E4E8ED" }} fz={14} pt={106} ml={140}>
				WHAT HAVE WE BEEN DOING
			</Text>
			<Group wrap="nowrap" gap={0}>
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
			<Grid>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={114} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={135} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={319}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={319} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
			</Grid>
			<Group justify="center">
				<UnstyledButton>
					<Text size="md" style={{ color: "#FFFFFF" }}>
						Show more
					</Text>
				</UnstyledButton>
				{<IconChevronDown size="20px" color="#FFF" />}
			</Group>
		</Paper>
	);
};

export default Events;
