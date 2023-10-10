import { Paper, Group, Box, Divider, Grid, UnstyledButton, Text, Image } from "@mantine/core";
import React from "react";
import Industry1 from "./Assets/ind1.png";
import Industry2 from "./Assets/ind2.png";
import Industry3 from "./Assets/ind3.png";
import Industry4 from "./Assets/ind4.png";
type Props = {};

const JournalTwo = (props: Props) => {
	return (
		<Paper w={1440} h={3140} withBorder bg={"black"}>
			<Group wrap="nowrap" gap={0}>
				<Box w="100%">
					<Text size={"32px"} mt={91} ml={114} color="#F6F6F6">
						Industry
					</Text>
					<Divider size="md" my={23} mr={114} ml={114} pb={40} />
				</Box>
			</Group>

			<Grid>
				<Grid.Col span={4}>
					<Image src={Industry1} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Glass Manufacture
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} lineClamp={2} ml={56} w={808}>
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
						<Group>
							<Text fz={20} style={{ color: "#FFFFFF" }} mt={32} fw={400} ml={56}>
								Read more
							</Text>
						</Group>
					</UnstyledButton>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry2} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Jewelry Manufacture{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} lineClamp={2} ml={56} w={808}>
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
						<Group>
							<Text fz={20} style={{ color: "#FFFFFF" }} mt={32} fw={400} ml={56}>
								Read more
							</Text>
						</Group>
					</UnstyledButton>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry3} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Pharmaceuticals{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} lineClamp={2} ml={56} w={808}>
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
						<Group>
							<Text fz={20} style={{ color: "#FFFFFF" }} mt={32} fw={400} ml={56}>
								Read more
							</Text>
						</Group>
					</UnstyledButton>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry4} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Steel Plants{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} ml={56} w={808}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry2} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Jewelry Manufacture{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} ml={56} w={808}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry3} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Pharmaceuticals{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} ml={56} w={808}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
				</Grid.Col>
				<Grid.Col span={4}>
					<Image src={Industry4} mt={64} ml={116} h={327} w={358} />
				</Grid.Col>
				<Grid.Col span={8}>
					<Text style={{ color: "#E4E8ED" }} fz={16} ml={56} mt={128}>
						22nd January, 2023.
					</Text>
					<Text style={{ color: "#F6F6F6" }} fz={32} mt={16} ml={56}>
						Steel Plants{" "}
					</Text>
					<Text style={{ color: "#E4E8ED" }} fz={16} mt={16} ml={56} w={808}>
						Libratherm has supplied various types of temperature controllers, thyristor power
						controllers and control panels to the industries manufacturing Files, Diamond Tools,
						Machine Tools, Automobile parts, Hack saw blades, Stone cutting tools and circular
						blades etc… The temperature of the electrical or fuel fired heating systems, used for
						annealing, hardening, steam bluing and similar such processes, has been in use for
						precise control up to 1200-C, using our models PRC-300, PRC-309, PID-300, PID-723,
						DLC-301, POW-3/S and POW-3/D with the sensor input from thermocouples or infrared non
						contact sensors.
					</Text>
				</Grid.Col>
			</Grid>
		</Paper>
	);
};

export default JournalTwo;
