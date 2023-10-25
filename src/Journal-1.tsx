import { Paper, Group, Box, Divider, UnstyledButton, Text, Image, Stack } from "@mantine/core";
import React from "react";
import RectangleJournal from "./Assets/RectangleJournal.png";
import Journal1 from "./Assets/journal1.png";
import Journal2 from "./Assets/journal2.png";
import WHO from "./Assets/who.png";

type Props = {};

const JournalOne = (props: Props) => {
	return (
		<>
			<Paper w={1440} h={964} bg={"black"} visibleFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text size={"32px"} mt={40} ml={114} c={"#F6F6F6"}>
							Journal
						</Text>
						<Divider size="md" my={40} mr={114} ml={114} />
					</Box>
				</Group>

				<Group justify="center">
					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
						<Image src={Journal1} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#F6F6F6"}>
							Industries
						</Text>

						<Text fz={16} fw={400} w={325} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text fz={20} c={"#ffffff"} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>

					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
						<Image src={Journal2} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#F6F6F6"}>
							Services
						</Text>

						<Text fz={16} fw={400} w={325} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text fz={20} c={"#ffffff"} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>

					<Box pos="relative" w={391} h={650} bg={"black"}>
						<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
						<Image src={WHO} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
						<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} c={"#F6F6F6"}>
							Applications
						</Text>

						<Text fz={16} fw={400} w={325} pos="absolute" top={414} c={"#e4e8ed"} lineClamp={3}>
							Libratherm has supplied various types of temperature controllers, thyristor power
							controllers and control panels to the industries manufacturing Files, Diamond Tools,
							Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
							blades etc… The temperature of the electrical or fuel fired heating systems, used for
							annealing, hardening, steam bluing and similar such processes, has been in use for
							precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
							DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
							contact sensors.
						</Text>
						<UnstyledButton pos={"absolute"} mt={463}>
							<Text fz={20} c={"#ffffff"} mt={32} fw={400}>
								Know more
							</Text>
						</UnstyledButton>
					</Box>
				</Group>
			</Paper>

			{/**Mobile View */}
			<Paper w={1440} h={1920} withBorder bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={20} mt={24} ml={16} c={"#F6F6F6"}>
							Journal
						</Text>
						<Divider size="xs" my={16} ml={16} w={328} />
					</Box>
				</Group>

				<Stack ml={16} gap={0}>
					<Box pos="relative" w={391} bg={"black"}>
						<Image src={RectangleJournal} h={182} w={328} alt="Client" />
						<Image src={Journal1} h={284} w={296} alt="Client" pos="absolute" top={16} left={16} />
					</Box>
					<Text fw={400} w={347} fz={18} c={"#F6F6F6"} mt={134}>
						Industries
					</Text>

					<Text fz={12} fw={400} mt={12} w={325} c={"#e4e8ed"} lineClamp={2}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
					<UnstyledButton>
						<Text fz={15} c={"#ffffff"} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>

					<Box pos="relative" w={391} bg={"black"} mt={69}>
						<Image src={RectangleJournal} h={182} w={328} alt="Client" />
						<Image src={Journal2} h={284} w={296} alt="Client" pos="absolute" top={16} left={16} />
					</Box>
					<Text fw={400} w={347} fz={18} c={"#F6F6F6"} mt={134}>
						Industries
					</Text>

					<Text fz={12} fw={400} mt={12} w={325} c={"#e4e8ed"} lineClamp={2}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
					<UnstyledButton>
						<Text fz={15} c={"#ffffff"} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>
					<Box pos="relative" w={391} bg={"black"} mt={69}>
						<Image src={RectangleJournal} h={182} w={328} alt="Client" />
						<Image src={Journal1} h={284} w={296} alt="Client" pos="absolute" top={16} left={16} />
					</Box>
					<Text fw={400} w={347} fz={18} c={"#F6F6F6"} mt={134}>
						Industries
					</Text>

					<Text fz={12} fw={400} mt={12} w={325} c={"#e4e8ed"} lineClamp={2}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
					<UnstyledButton>
						<Text fz={15} c={"#ffffff"} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>
				</Stack>
			</Paper>
		</>
	);
};

export default JournalOne;
