import { Paper, Group, Box, Divider, Grid, Text, Image } from "@mantine/core";
import React from "react";
import Event1 from "./Assets/event1.png";
import EventBg from "./Assets/eventbg.png";
import WHO from "./Assets/who.png";
import RectangleOmega from "./Assets/RectangleOmega.png";
import RectangleJournal from "./Assets/RectangleJournal.png";
import Journal1 from "./Assets/journal1.png";
import Journal2 from "./Assets/journal2.png";

type Props = {};

const JournalThree = (props: Props) => {
	return (
		<Paper w={1440} h={3140} bg={"black"}>
			<Group wrap="nowrap">
				<Box w="100%">
					<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
						Industry
					</Text>
					<Divider size="md" mt={24} mr={114} ml={114} />
				</Box>
			</Group>

			<Grid>
				<Grid.Col span={6}>
					<Text fz={14} fw={400} ml={114} mt={191} style={{ color: "#E4E8ED" }}>
						22nd January, 2023
					</Text>
					<Text fz={32} w={562} fw={600} ml={114} mt={16} style={{ color: "#E4E8ED" }}>
						Glass Manufacture
					</Text>
					<Text fz={16} fw={400} ml={118} mt={16} style={{ color: "#E4E8ED" }}>
						Libratherm is an innovation-driven manufacturer of Process Control Instruments and
						Systems since 1991. We cater to a wide range of industries, by providing accurate
						measurement, precise control, and implementing modern standards in data logging and
						industrial communication. Glass is one of the industries where we have been supplying
						numerous process control instruments and control panels for various processes such as
						Glass Bending, Glass Toughening, and Glass Melting.
					</Text>
				</Grid.Col>
				<Grid.Col span={6}>
					<Image src={RectangleOmega} h={696} ml={209} />
					<Image pos={"absolute"} src={WHO} w={493} h={451} ml={123} mt={-550} />
				</Grid.Col>
			</Grid>

			<Grid justify="center" pl={114} mt={89}>
				<Grid.Col span={4}>
					<Text fw={400} w={347} fz={32} style={{ color: "#F6F6F6" }}>
						Glass Bending
					</Text>
					<Divider size={"sm"} w={325} mt={33} />
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={Journal1} h={292} w={293} alt="Client" top={26} left={16} pos={"relative"} />
					<Text fz={14} style={{ color: "#E4E8ED" }} w={337} pt={60}>
						Libratherm offers Ramp Soak PID Temperature Controller - PRC-300, High Temperature Ramp
						Soak PID Controller - PRC-309 and Three Phase Thyristor Power Controller - POW-3-PA-CL
						for the Glass Bending Process.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Text fw={400} w={347} fz={32} style={{ color: "#F6F6F6" }}>
						Glass Toughening
					</Text>
					<Divider size={"sm"} w={325} mt={33} />
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={Journal2} h={292} w={293} alt="Client" top={26} left={16} pos={"relative"} />
					<Text fz={14} style={{ color: "#E4E8ED" }} w={337} pt={60}>
						Libratherm offers Ramp Soak PID Temperature Controller - PRC-300, High Temperature Ramp
						Soak PID Controller - PRC-309 and Three Phase Thyristor Power Controller - POW-3-PA-CL
						for the Glass Bending Process.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Text fw={400} w={347} fz={32} style={{ color: "#F6F6F6" }}>
						Glass Melting
					</Text>
					<Divider size={"sm"} w={325} mt={33} />
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={WHO} h={292} w={293} alt="Client" top={26} left={16} pos={"relative"} />
					<Text fz={14} style={{ color: "#E4E8ED" }} w={337} pt={60}>
						Libratherm offers Ramp Soak PID Temperature Controller - PRC-300, High Temperature Ramp
						Soak PID Controller - PRC-309 and Three Phase Thyristor Power Controller - POW-3-PA-CL
						for the Glass Bending Process.
					</Text>
				</Grid.Col>
			</Grid>

			<Grid mt={150}>
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
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={64} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={85} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={269}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={269} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={34} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={55} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={249}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={249} mt={15} w={186}>
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
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={64} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={85} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={269}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={269} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
				<Grid.Col span={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={34} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={55} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={249}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={249} mt={15} w={186}>
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
				<Grid.Col span={4} offset={4}>
					<Box pos="relative" w={1200} h={280}>
						<Image src={EventBg} h={202} w={82} pos="absolute" top={0} left={34} />
						<Image src={Event1} h={164} w={164} pos="absolute" top={20} left={55} />
						<Text style={{ color: "#e4e8ed" }} fz={12} ml={249}>
							22nd January, 2023.
						</Text>
						<Text style={{ color: "#FFFFFF" }} fz={16} ml={249} mt={15} w={186}>
							Mumbai ACE Tech Exhibition
						</Text>
					</Box>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default JournalThree;
