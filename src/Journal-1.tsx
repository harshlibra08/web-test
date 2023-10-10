import { Paper, Group, Box, Divider, UnstyledButton, Text, Image, Stack } from "@mantine/core";
import React from "react";
import RectangleJournal from "./Assets/RectangleJournal.png";
import Journal1 from "./Assets/journal1.png";
import Journal2 from "./Assets/journal2.png";
import WHO from "./Assets/who.png";

type Props = {};

const JournalOne = (props: Props) => {
	return (
		<Paper w={1440} h={964} withBorder bg={"black"}>
			<Group wrap="nowrap" gap={0}>
				<Box w="100%">
					<Text size={"32px"} mt={40} ml={114} color="#F6F6F6">
						Journal
					</Text>
					<Divider size="md" my={40} mr={114} ml={114} />
				</Box>
			</Group>

			<Group justify="center">
				<Box pos="relative" w={391} h={650} bg={"black"}>
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={Journal1} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
					<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} color="#F6F6F6">
						Industries
					</Text>

					<Text
						size="16px"
						fw={400}
						w={325}
						pos="absolute"
						top={414}
						style={{ color: "#E4E8ED" }}
						lineClamp={3}
					>
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
						<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>
				</Box>

				<Box pos="relative" w={391} h={650} bg={"black"}>
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={Journal2} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
					<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} color="#F6F6F6">
						Services
					</Text>

					<Text
						size="16px"
						fw={400}
						w={325}
						pos="absolute"
						top={414}
						style={{ color: "#E4E8ED" }}
						lineClamp={3}
					>
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
						<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>
				</Box>

				<Box pos="relative" w={391} h={650} bg={"black"}>
					<Image src={RectangleJournal} h={172} w={325} alt="Client" pos="absolute" />
					<Image src={WHO} h={292} w={293} alt="Client" pos="absolute" top={26} left={16} />
					<Text fw={400} h={92} w={347} fz={32} pos="absolute" mt={350} color="#F6F6F6">
						Applications
					</Text>

					<Text
						size="16px"
						fw={400}
						w={325}
						pos="absolute"
						top={414}
						style={{ color: "#E4E8ED" }}
						lineClamp={3}
					>
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
						<Text size="20px" style={{ color: "#FFFFFF" }} mt={32} fw={400}>
							Know more
						</Text>
					</UnstyledButton>
				</Box>
			</Group>
		</Paper>
	);
};

export default JournalOne;
