import {
	Paper,
	Group,
	Box,
	Divider,
	Grid,
	UnstyledButton,
	Text,
	Image,
	Stack,
} from "@mantine/core";
import React from "react";
import Industry1 from "./Assets/ind1.png";
import Industry2 from "./Assets/ind2.png";
import Industry3 from "./Assets/ind3.png";
import Industry4 from "./Assets/ind4.png";
type Props = {};

const JournalTwo = (props: Props) => {
	return (
		<>
			<Paper w={{ base: 360, lg: 1440 }} h={{ base: 4050, lg: 3200 }} bg={"black"} mt={30}>
				<Stack>
					<Text fz={{ base: 20, lg: 32 }} mt={40} ml={{ base: 16, lg: 114 }} c={"#F6F6F6"}>
						Journal
					</Text>
					<Divider size="xs" w={{ base: 328, lg: 1212 }} ml={{ base: 16, lg: 114 }} />
				</Stack>
				<Grid>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry4}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry1}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry2}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry3}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry4}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry3}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 4 }}>
						<Image
							src={Industry4}
							mt={{ base: 40, lg: 64 }}
							ml={{ base: 16, lg: 116 }}
							h={{ base: 300, lg: 327 }}
							w={{ base: 328, lg: 358 }}
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, lg: 8 }}>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							ml={{ base: 16, lg: 56 }}
							mt={{ base: 16, lg: 128 }}
						>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={{ base: 18, lg: 32 }} mt={16} ml={{ base: 16, lg: 56 }}>
							Glass Manufacture
						</Text>
						<Text
							c={"#e4e8ed"}
							fz={{ base: 12, lg: 16 }}
							mt={16}
							lineClamp={2}
							ml={{ base: 16, lg: 56 }}
							w={{ base: 325, lg: 868 }}
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
						<UnstyledButton>
							<Group>
								<Text
									fz={{ base: 15, lg: 20 }}
									c={"#ffffff"}
									mt={{ base: 8, lg: 24 }}
									fw={400}
									ml={{ base: 16, lg: 56 }}
								>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper>
			{/**Mobile View */}
			{/* <Paper w={360} h={2540} withBorder bg={"black"} hiddenFrom="xs">
				<Group wrap="nowrap" gap={0}>
					<Box w="100%">
						<Text fz={{base: 15}} mt={59} ml={16} c={"#f6f6f6"}>
							Industry
						</Text>
						<Divider size="xs" my={16} ml={16} w={328} />
					</Box>
				</Group>

				<Grid>
					<Grid.Col span={12}>
						<Image src={Industry1} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
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
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={Industry2} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
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
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={Industry3} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
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
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={12}>
						<Image src={Industry4} mt={40} ml={16} h={300} w={328} />
					</Grid.Col>
					<Grid.Col span={12}>
						<Text c={"#e4e8ed"} fz={12} ml={17} mt={16}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={18} mt={16} ml={16}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} mt={12} lineClamp={2} ml={16} w={325}>
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
								<Text fz={15} c={"#ffffff"} mt={8} fw={400} ml={16}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper> */}

			{/**Tablet view */}
			{/* <Paper w={768} h={1340} bg={"black"} visibleFrom="xs" hiddenFrom="md">
				<Group wrap="nowrap" gap={0} ml={90}>
					<Box w="100%">
						<Text fz={28} mt={91} c={"#f6f6f6"}>
							Industry
						</Text>
						<Divider size="md" my={23} mr={114} pb={40} />
					</Box>
				</Group>

				<Grid mx={90}>
					<Grid.Col span={4}>
						<Image src={Industry1} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8}>
						<Text c={"#e4e8ed"} fz={12} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={24} mt={8} ml={30}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={Industry2} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={12} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={24} mt={8} ml={30}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={Industry3} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={12} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={24} mt={8} ml={30}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
					<Grid.Col span={4} mt={60}>
						<Image src={Industry4} h={194} w={206} />
					</Grid.Col>
					<Grid.Col span={8} mt={60}>
						<Text c={"#e4e8ed"} fz={12} mt={10} ml={30}>
							22nd January, 2023.
						</Text>
						<Text c={"#f6f6f6"} fz={24} mt={8} ml={30}>
							Glass Manufacture
						</Text>
						<Text c={"#e4e8ed"} fz={12} lineClamp={2} w={388} mt={14} ml={30}>
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
								<Text fz={14} c={"#ffffff"} mt={32} ml={30} fw={400}>
									Read more
								</Text>
							</Group>
						</UnstyledButton>
					</Grid.Col>
				</Grid>
			</Paper> */}
		</>
	);
};

export default JournalTwo;
